package com.example.bloodnet.services;

import com.example.bloodnet.models.DonorForm;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DonorEligibilityService {

    @Value("${openrouter.api.key}") // Load API key from application.properties
    private String openRouterApiKey = "${openrouter.api.key}";

    private static final String OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Check donor eligibility using OpenRouter AI API.
     *
     * @param donorForm The form data filled by the donor.
     * @return A message indicating whether the donor is eligible or not.
     */
    public String checkEligibility(DonorForm donorForm) {
        // Prepare the request payload for OpenRouter
        String prompt = createPromptFromDonorForm(donorForm);
        String requestBody = String.format("{\"model\": \"gpt-3.5-turbo\", \"messages\": [{\"role\": \"user\", \"content\": \"%s\"}]}", prompt);

        // Set headers for OpenRouter API
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + openRouterApiKey);
        headers.set("Content-Type", "application/json");

        // Send request to OpenRouter API
        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(
                OPENROUTER_API_URL, HttpMethod.POST, requestEntity, String.class);

        // Process the response from OpenRouter
        String aiResponse = response.getBody();
        System.out.println("Raw AI Response: " + aiResponse);
        return interpretAiResponse(aiResponse);
    }

    /**
     * Create a prompt for OpenRouter based on the donor's form data.
     *
     * @param donorForm The form data filled by the donor.
     * @return A prompt string for the AI.
     */
    private String createPromptFromDonorForm(DonorForm donorForm) {
        return String.format(
                "Is a donor eligible? Respond with 'Eligible' or 'Not Eligible' using following details. " +
                        "Is the donor between 18–65 years old?: "+donorForm.getAge_18_65()+
                        "Has the donor ever had a bad reaction to donating blood?: "+donorForm.getBad_reaction_to_donation()+
                        "Does the donor have any chronic illnesses like diabetes, heart disease, or cancer?: "+donorForm.getChronic_illnesses()+
                        "Is the donor taking any medications that might affect eligibility?: "+donorForm.getMedications_affecting_eligibility()+
                        "Is the donor pregnant or recently given birth (within the last 6 weeks)?: "+donorForm.getPregnancy_recent_birth() +
                        "Has the donor had any infections, colds, flu, or fever in the past 1–2 weeks?: "+donorForm.getRecent_infections()+
                        "Has the donor donated blood recently?: "+donorForm.getRecent_blood_donation()+
                        "Has the donor been in close contact with someone who has an infectious disease?: "+donorForm.getContact_with_infectious_disease()+
                        "Has the donor received any live vaccines in the past 4 weeks?: "+donorForm.getRecent_live_vaccines()+
                        "Has the donor undergone surgery or received a blood transfusion in the past 6–12 months?: "+donorForm.getRecent_surgery_or_transfusion()+
                        "Is the donor at least 50 kg (110 lbs)?: "+donorForm.getWeight_50kg()+
                        "Has the donor ever tested positive for HIV, hepatitis B or C, syphilis, or other transmissible diseases?: "+donorForm.getTested_positive_for_diseases()+
                        "Has the donor traveled to regions with endemic diseases in the past 3–12 months?: "+donorForm.getRecent_travel_endemic_regions());
    }


    /**
     * Interpret the AI's response to determine eligibility.
     *
     * @param aiResponse The raw response from OpenRouter.
     * @return A user-friendly eligibility message.
     */
    private String interpretAiResponse(String aiResponse) {
        try {
            // Parse the JSON response
            JsonNode rootNode = new ObjectMapper().readTree(aiResponse);

            // Extract the "content" field from the response
            String content = rootNode
                    .path("choices") // Navigate to the "choices" array
                    .get(0)        // Get the first element in the array
                    .path("message") // Navigate to the "message" object
                    .path("content")  // Navigate to the "content" field
                    .asText()        // Convert it to a string
                    .trim();         // Trim any whitespace

            // Check the content for eligibility
            if (content.equalsIgnoreCase("Eligible")) {
                return "The donor is eligible.";
            } else if (content.equalsIgnoreCase("Not Eligible")) {
                return "The donor is not eligible.";
            } else {
                return "Unable to determine eligibility. Please try again.";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error processing the AI response.";
        }
    }
}
