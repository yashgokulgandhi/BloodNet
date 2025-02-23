import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserEdit, FaCheckCircle, FaTimesCircle, FaBell } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import axios from "axios";

const DonorDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  useEffect(() => {
    let username = localStorage.getItem("username");
    console.log(username);

    axios.get(`http://localhost:8080/donor/${username}`)
        .then(async (res) => {
            const latitude = 22.3051776; // Define latitude
            const longitude = 73.1938816; // Define longitude
            
            const donorData = {
                donor: {
                    name: res.data.fullName,
                    bloodType: res.data.bloodType,
                    location: "Fetching location...", // Placeholder
                    available: true
                },
                notifications: [
                    "Urgent: Need O+ blood at Hospital1",
                    "New donation request near your location",
                    "Your last donation was successful!"
                ],
                donationHistory: [
                    { date: "2025-02-10", location: "City Hospital", status: "Completed" },
                    { date: "2025-01-15", location: "Red Cross Center", status: "Completed" },
                    { date: "2024-12-20", location: "Community Clinic", status: "Pending" }
                ]
            };

            try {
                const locationResponse = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                );
                donorData.donor.location = locationResponse.data.display_name;
            } catch (err) {
                console.error("Error fetching location:", err);
                donorData.donor.location = "Location not found";
            }

            setData(donorData);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error fetching donor data:", err);
            setLoading(false);
        });
}, []);



  useEffect(() => {
    if (data && data.notifications.length > 0) {
      const timer = setInterval(() => {
        setCurrentAlertIndex((prev) => (prev + 1) % data.notifications.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [data]);

  if (loading) {
    return <div className="text-center text-white text-2xl">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center text-red-500 text-2xl">Error: No data found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#ffe4e6] p-12 text-gray-900 flex flex-col gap-10 relative">

      <motion.div
        className="w-full max-w-6xl mx-auto bg-[#f20a1d] bg-opacity-80 backdrop-blur-md p-10 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between text-xl text-white relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-white bg-opacity-50 rounded-full flex items-center justify-center text-4xl font-bold text-gray-900">
            {data.donor.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>
          <div>
            <h2 className="text-3xl font-semibold">{data.donor.name}</h2>
            <p className="text-xl">
              Blood Type: <strong>{data.donor.bloodType}</strong>
            </p>
            <p className="text-lg opacity-80">📍 {data.donor.location}</p>
          </div>
        </div>
      </motion.div>

      <div className="fixed top-20 right-10 w-96 z-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAlertIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-300 text-gray-900 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 opacity-90"
          >
            <FaBell className="text-gray-900 text-2xl" />
            <span className="text-lg font-semibold">
              {data.notifications[currentAlertIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="w-full max-w-6xl mx-auto bg-[#f20a1d] bg-opacity-80 backdrop-blur-md p-10 rounded-xl shadow-lg text-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Donation History</h2>
        <table className="w-full text-center border-collapse bg-white bg-opacity-10 rounded-lg text-black">
          <thead>
            <tr className="bg-gray-800 text-white text-2xl">
              <th className="p-4">Date</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.donationHistory.map((donation, index) => (
              <motion.tr
                key={index}
                className="border-b border-white border-opacity-30 text-xl"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <td className="p-4 text-black">{donation.date}</td>
                <td className="p-4 text-black">{donation.location}</td>
                <td className="p-4 flex items-center justify-center gap-3 text-gray-900">
                  {donation.status === "Completed" ? (
                    <FaCheckCircle className="text-green-400 text-2xl" />
                  ) : (
                    <FaTimesCircle className="text-yellow-400 text-2xl" />
                  )}
                  {donation.status}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default DonorDashboard;
