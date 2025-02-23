import { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Mock data for donors
const donorsData = [
  { id: 1, name: "Yash Gokulgandhi", bloodType: "O+", distance: "2.5 km", lat: 22.6885, lng: 72.8616 }, // Near Nadiad
  { id: 2, name: "Ansh Hathi", bloodType: "O+", distance: "3.7 km", lat: 22.6953, lng: 72.8704 }, // Near Nadiad
  { id: 3, name: "Ishan Joshi", bloodType: "O+", distance: "1.8 km", lat: 22.7031, lng: 72.8562 }, // Near Nadiad
];




// Custom icon for map markers
const customIcon = new L.Icon({
  iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeslgCLLrolw0WeoH-Z5EKFKGjw-3QAS_gPg&sheight=25&width=25",
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function BloodRequestPage() {
  const [formData, setFormData] = useState({
    bloodType: "",
    requiredBloodAmount: "",
    urgencyLevel: "",
    additionalNote: "",
    username:""
  });
  
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    formData.username=localStorage.getItem("username")


    axios.post('http://localhost:8080/hospital/request', formData, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      donorsData
      console.log('Response:', response.data);
  })
  .catch(error => {
      console.error('Error:', error.response ? error.response.data : error.message);
  });

    setShowMap(true);
  };

  return (
    <main className="min-h-screen bg-emerald-50">
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg p-10 mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 text-center mb-8">
            Request Blood for Emergency
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
              required
            >
              <option value="">Select Blood Type</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="requiredBloodAmount"
              value={formData.requiredBloodAmount}
              onChange={handleChange}
              placeholder="Required Amount (ml)"
              className="w-full px-4 py-3 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
              required
            />
            <select
              name="urgencyLevel"
              value={formData.urgencyLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
              required
            >
              <option value="">Select Urgency Level</option>
              <option value="immediate">Immediate</option>
              <option value="within6hours">Within 6 hours</option>
              <option value="within24hours">Within 24 hours</option>
            </select>
            <textarea
              name="additionalNote"
              value={formData.additionalNote}
              onChange={handleChange}
              placeholder="Additional Notes"
              className="w-full px-4 py-3 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 col-span-2 h-32"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="col-span-2 w-full py-3 bg-emerald-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>

        {showMap && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 w-full max-w-6xl flex mx-auto"
          >
            <div className="w-1/3 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Available Donors</h3>
              <ul className="space-y-4">
                {donorsData.map((donor) => (
                  <li
                    key={donor.id}
                    className="bg-white bg-opacity-50 rounded-lg p-3 shadow-sm"
                  >
                    <p className="font-semibold text-gray-700">{donor.name}</p>
                    <p className="text-sm text-gray-600">Blood Type: {donor.bloodType}</p>
                    <p className="text-sm text-gray-600">Distance: {donor.distance}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/3 h-96 rounded-lg overflow-hidden shadow-lg">
              <MapContainer
                center={[22.6885, 72.8612]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyrigxht">OpenStreetMap</a> contributors'
                />
                {donorsData.map((donor) => (
                  <Marker key={donor.id} position={[donor.lat, donor.lng]} icon={customIcon}>
                    <Popup>
                      <b>{donor.name}</b>
                      <br />
                      Blood Type: {donor.bloodType}
                      <br />
                      Distance: {donor.distance}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
