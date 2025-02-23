import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50">
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 bg-rose-200 rounded-full p-4">
              <span className="text-rose-600 font-medium">
                DONATE
                <br />
                TODAY
              </span>
            </div>
            <div className="bg-red-500 rounded-full p-8">
              <img
                src="./public/blood-donation-concept-illustration-vector.jpg"
                alt="Blood donation awareness"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-600 leading-tight">
              Be a hero, donate blood—save lives today!
            </h1>
            <p className="text-gray-600 text-lg">
              Your blood can give someone another chance at life. Our real-time tracking system connects patients with nearby donors instantly. Join the movement and make a difference—because every drop counts.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-2 rounded-lg">
              Find Donors Near You
            </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="fixed bottom-8 left-8 flex gap-4">
          <a href="#" className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600">
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600">
            <FaWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
