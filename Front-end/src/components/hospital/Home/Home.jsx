// import React from "react";
// import NavbarofHospital from '../NavBarHospital';

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-50">
      {/* NavBar
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-emerald-600 text-2xl font-bold">Healthcare</h1>
        </div>
      </nav> */}
      {/* <NavbarofHospital/> */}

      {/* Main Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 bg-emerald-200 rounded-full p-4">
              <span className="text-emerald-600 font-medium">
                24/7
                <br />
                CARE
              </span>
            </div>
            <div className="bg-emerald-500 rounded-full p-8">
              <img
                src="../public/hospital_blood.jpg"
                alt="Hospital staff"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-600 leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="text-gray-600 text-lg">
              We provide comprehensive healthcare services with state-of-the-art facilities and experienced medical
              professionals. Your well-being is at the heart of everything we do.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg rounded-lg py-2 px-8 transition-colors">
              Request for Blood
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="fixed bottom-8 left-8 flex gap-4">
          <a
            href="#"
            className="p-2 bg-emerald-500 rounded-full text-white hover:bg-emerald-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.98 5C5.68 7.63 7.45 9.91 10.19 10.86C7.69 11.61 5.82 10.98 4.82 9.75C4.35 10.65 4.75 12.58 5.57 13.46C6.65 14.58 8.21 14.65 9.68 14.09C12.28 13.18 14.62 11.5 16.41 9.36C18.22 7.19 19.12 4.94 18.81 2.5C17.75 4.02 16.02 4.99 13.98 4.97C13.47 4.73 12.78 4.72 12.3 4.36C11.58 3.81 11.67 2.98 11.25 2.25C9.85 3.61 8.61 5.36 7.98 7.46C6.55 4.93 4.68 2.9 2 1"></path>
            </svg>
          </a>
          {/* Additional links for other icons */}
        </div>
      </section>
    </main>
  );
}
