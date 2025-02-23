// import React from "react";
// import NavBar from "../Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Phone",
      info: "+1 (555) 123-4567",
      icon: <FaPhoneAlt className="h-6 w-6 text-rose-600" />,
    },
    {
      title: "Email",
      info: "contact@healthorg.com",
      icon: <FaEnvelope className="h-6 w-6 text-rose-600" />,
    },
    {
      title: "Address",
      info: "123 Health Street, Medical District, City",
      icon: <FaMapMarkerAlt className="h-6 w-6 text-rose-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      {/* <NavBar /> */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-rose-600 mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-rose-600 mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <textarea
                placeholder="Your message"
                className="w-full p-3 border rounded-lg min-h-[150px] focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="font-medium text-rose-600">{detail.title}</h3>
                  <p className="text-gray-600">{detail.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
