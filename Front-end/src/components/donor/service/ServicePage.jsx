import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserEdit, FaCheckCircle, FaTimesCircle, FaBell } from "react-icons/fa";
import { Switch } from "@headlessui/react";

const DonorDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  useEffect(() => {
    const donorData = {
      donor: {
        name: "John Doe",
        bloodType: "O+",
        location: "New York, USA",
        available: true
      },
      notifications: [
        "Urgent: Need O+ blood at City Hospital",
        "New donation request near your location",
        "Your last donation was successful!"
      ],
      donationHistory: [
        { date: "2025-02-10", location: "City Hospital", status: "Completed" },
        { date: "2025-01-15", location: "Red Cross Center", status: "Completed" },
        { date: "2024-12-20", location: "Community Clinic", status: "Pending" }
      ]
    };

    setTimeout(() => {
      setData(donorData);
      setLoading(false);
    }, 1000);
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
      {/* Donor Profile Section */}
      <motion.div
        className="w-full max-w-6xl mx-auto bg-[#f87171] bg-opacity-80 backdrop-blur-md p-10 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between text-xl text-white relative"
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

        <motion.button
          className="flex items-center gap-3 bg-blue-500 px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          <FaUserEdit /> Edit Profile
        </motion.button>
      </motion.div>

      {/* Notification Section */}
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

      {/* Availability Switch */}
      <motion.div
        className="w-full max-w-6xl mx-auto bg-[#f87171] bg-opacity-80 backdrop-blur-md p-6 rounded-xl flex items-center justify-between text-lg shadow-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span>Available for Donation:</span>
        <Switch
          checked={data.donor.available}
          onChange={() =>
            setData((prev) => ({
              ...prev,
              donor: { ...prev.donor, available: !prev.donor.available }
            }))
          }
          className={`${
            data.donor.available ? "bg-green-500" : "bg-gray-500"
          } relative inline-flex h-10 w-20 items-center rounded-full`}
        >
          <motion.span
            className="inline-block w-8 h-8 bg-white rounded-full"
            animate={{ x: data.donor.available ? 40 : 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Switch>
      </motion.div>

      {/* Donation History Section */}
      <motion.div
        className="w-full max-w-6xl mx-auto bg-[#f87171] bg-opacity-80 backdrop-blur-md p-10 rounded-xl shadow-lg text-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Donation History</h2>
        <table className="w-full text-center border-collapse bg-white bg-opacity-10 rounded-lg text-gray-900">
          <thead>
            <tr className="bg-gray-800 text-white text-lg">
              <th className="p-4">Date</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.donationHistory.map((donation, index) => (
              <motion.tr
                key={index}
                className="border-b border-white border-opacity-30 text-lg"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <td className="p-4 text-gray-900">{donation.date}</td>
                <td className="p-4 text-gray-900">{donation.location}</td>
                <td className="p-4 flex items-center justify-center gap-3 text-gray-900">
                  {donation.status === "Completed" ? (
                    <FaCheckCircle className="text-green-400 text-xl" />
                  ) : (
                    <FaTimesCircle className="text-yellow-400 text-xl" />
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
