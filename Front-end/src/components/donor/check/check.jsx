import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { ChevronDown, ChevronUp, Check } from "lucide-react"

function BloodDonationForm() {
  const [isFormExpanded, setIsFormExpanded] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    alert("Congratulations! You are eligible to donate blood. ❤️")
    reset() // Clear form data
  }

  const formFields = [
    { name: "age", label: "Is the donor between 18–65 years old?", type: "radio" },
    { name: "weight", label: "Is the donor at least 50 kg (110 lbs)?", type: "radio" },
    { name: "recentIllness", label: "Has the donor had any infections, colds, flu, or fever in the past 1–2 weeks?", type: "radio" },
    { name: "chronicConditions", label: "Does the donor have any chronic illnesses like diabetes, heart disease, or cancer?", type: "radio" },
    { name: "infectiousDiseases", label: "Has the donor ever tested positive for HIV, hepatitis B or C, syphilis, or other transmissible diseases?", type: "radio" },
    { name: "recentSurgery", label: "Has the donor undergone surgery or received a blood transfusion in the past 6–12 months?", type: "radio" },
    { name: "pregnancy", label: "Is the donor pregnant or recently given birth (within the last 6 weeks)?", type: "radio" },
    { name: "medications", label: "Is the donor taking any medications that might affect eligibility?", type: "radio" },
    { name: "travelHistory", label: "Has the donor traveled to regions with endemic diseases in the past 3–12 months?", type: "radio" },
    { name: "exposureToInfections", label: "Has the donor been in close contact with someone who has an infectious disease?", type: "radio" },
    { name: "frequencyOfDonation", label: "Has the donor donated blood recently?", type: "radio" },
    { name: "adverseReactions", label: "Has the donor ever had a bad reaction to donating blood?", type: "radio" },
    { name: "vaccinations", label: "Has the donor received any live vaccines in the past 4 weeks?", type: "radio" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200 p-8">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 flex flex-col items-center justify-center min-h-[15vh]"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">BloodNet Hero: Are You Ready?</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-red-800"
        >
          Let's check your eligibility to be a lifesaver!
        </motion.p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormExpanded(!isFormExpanded)}
          className="w-full p-6 flex justify-center items-center bg-red-500 text-white text-xl font-semibold gap-4"
        >
          <span>Eligibility Check Form</span>
          {isFormExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </motion.button>

        <motion.form
          initial={false}
          animate={isFormExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-hidden"
        >
          <div className="p-6 grid gap-6 md:grid-cols-2">
            {formFields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" {...register(field.name)} value="yes" className="form-radio text-red-600" />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" {...register(field.name)} value="no" className="form-radio text-red-600" />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-gray-50 text-right">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Check size={20} className="mr-2" />
              Check Eligibility
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default BloodDonationForm
