import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactData = {
  contactDetails: [
    {
      title: "Phone",
      info: "+91 8160971021",
      icon: <FaPhoneAlt className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Email",
      info: "support@hospitalnetwork.com",
      icon: <FaEnvelope className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Address",
      info: "Vadodara",
      icon: <FaMapMarkerAlt className="h-6 w-6 text-emerald-600" />,
    },
  ],
};

export default function Contact() {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="bg-emerald-50 flex flex-col items-center justify-start px-8 py-12 min-h-screen">
      <main className="w-full max-w-7xl">
        <h1 className="text-5xl font-bold text-emerald-600 mb-8 text-center">
          Contact & Legal
        </h1>

        {/* Tab Buttons */}
        <div className="mb-8 flex justify-center">
          <button
            className={`px-6 py-3 mr-2 rounded-lg transition duration-300 ${
              activeTab === "contact"
                ? "bg-emerald-600 text-white"
                : "bg-white text-emerald-600 border border-emerald-600"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition duration-300 ${
              activeTab === "legal"
                ? "bg-emerald-600 text-white"
                : "bg-white text-emerald-600 border border-emerald-600"
            }`}
            onClick={() => setActiveTab("legal")}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {activeTab === "contact" ? (
                <motion.div
                  className="grid md:grid-cols-2 gap-12"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
                    <h2 className="text-3xl text-emerald-600 mb-6">
                      Get in Touch
                    </h2>
                    <form className="space-y-6">
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                      <textarea
                        placeholder="Your message"
                        className="w-full p-4 border rounded-lg min-h-[200px] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                      <motion.button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                  <div className="space-y-6 flex-1">
                    {contactData.contactDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                          {detail.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-emerald-600">
                            {detail.title}
                          </h3>
                          <p className="text-gray-600 text-lg">
                            {detail.info}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-8"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl text-emerald-600 mb-6">
                    Terms & Conditions
                  </h2>
                  <div className="space-y-6 text-gray-700 text-lg">
                    <p>
                      By using our platform, hospitals agree to responsibly
                      request and manage blood donations for medical emergencies.
                    </p>
                    <h3 className="text-2xl text-emerald-600 mt-6">
                      1. Request Validity
                    </h3>
                    <p>
                      Hospitals must provide accurate details when submitting
                      blood requests to ensure proper donor matching.
                    </p>
                    <h3 className="text-2xl text-emerald-600 mt-6">
                      2. Donor Interaction
                    </h3>
                    <p>
                      Hospitals should maintain ethical standards when
                      contacting and managing blood donors.
                    </p>
                    <h3 className="text-2xl text-emerald-600 mt-6">
                      3. Data Privacy
                    </h3>
                    <p>
                      All donor information must be kept confidential and used
                      solely for medical purposes.
                    </p>
                    <h3 className="text-2xl text-emerald-600 mt-6">
                      4. Legal Compliance
                    </h3>
                    <p>
                      Hospitals must comply with national blood donation laws
                      and regulations.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
