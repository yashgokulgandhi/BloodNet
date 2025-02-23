"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell, FaHospital, FaTint, FaCheck, FaTimes, FaHeart } from "react-icons/fa";

const mockNotifications = [
  { id: 1, bloodType: "A+", hospitalName: "City General Hospital", distance: "2.5 km" },
  { id: 2, bloodType: "O-", hospitalName: "St. Mary's Medical Center", distance: "4.2 km" },
  { id: 3, bloodType: "B+", hospitalName: "Sunshine Children's Hospital", distance: "1.8 km" },
];

export default function DonorNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [index, setIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  // Simulate receiving notifications one by one
  useEffect(() => {
    if (index < mockNotifications.length) {
      const timeout = setTimeout(() => {
        setNotifications((prev) => [...prev, mockNotifications[index]]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Handle accepting a notification
  const handleAccept = () => {
    setShowCelebration(true);
    setTimeout(() => {
      setNotifications([]); // Clear notifications
      setIndex(mockNotifications.length); // Stop further notifications
      setShowCelebration(false); // Hide celebration animation
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#1c3b57] p-8 flex items-center justify-center relative overflow-hidden">
      {/* Celebration Animation */}
      {showCelebration ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute flex flex-col items-center text-white text-center z-50"
        >
          <FaHeart size={80} className="text-red-500 animate-pulse" />
          <h1 className="text-4xl font-bold mt-4">Woah! You just saved a life! ❤</h1>
        </motion.div>
      ) : (
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            className="text-4xl font-bold text-white mb-8 flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaBell className="mr-4 text-yellow-300" size={40} />
            Donor Notifications
          </motion.h1>
          <AnimatePresence>
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 mb-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-red-500 rounded-full p-3 mr-4">
                      <FaTint className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-2">Blood Needed: {notification.bloodType}</h2>
                      <p className="text-black text-lg flex items-center">
                        <FaHospital className="mr-2" /> {notification.hospitalName}
                      </p>
                      <p className="text-black text-lg">Distance: {notification.distance}</p>
                    </div>
                  </div>
                  <div className="text-right flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAccept}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold shadow-lg hover:bg-green-600 transition-all duration-300 focus:outline-none"
                    >
                      <FaCheck size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setNotifications(notifications.filter((n) => n.id !== notification.id))}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold shadow-lg hover:bg-red-600 transition-all duration-300 focus:outline-none"
                    >
                      <FaTimes size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Falling Blood Droplets Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500 rounded-full w-4 h-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: "100vh" }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
