import { FaShieldAlt, FaUsers, FaStethoscope, FaHeart } from "react-icons/fa";

export default function ServicePage() {
  const services = [
    {
      title: "Blood Donation Camps",
      description: "Join our regular blood donation camps and help save lives in your community.",
      icon: <FaHeart className="h-6 w-6 text-rose-600" />,
    },
    {
      title: "Emergency Blood Requests",
      description: "Get instant access to emergency blood requests and help those in urgent need.",
      icon: <FaShieldAlt className="h-6 w-6 text-rose-600" />,
    },
    {
      title: "Real-Time Donor Tracking",
      description: "Track and connect with nearby donors anytime, anywhere for faster responses.",
      icon: <FaUsers className="h-6 w-6 text-rose-600" />,
    },
    {
      title: "Health Checkups for Donors",
      description: "We ensure every donor undergoes health screening for a safe donation process.",
      icon: <FaStethoscope className="h-6 w-6 text-rose-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-rose-600 mb-8 text-center">Our Blood Donation Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-rose-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
