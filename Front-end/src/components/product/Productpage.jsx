import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage() {
  const products = [
    {
      title: "Blood Donation Kits",
      description: "Sterile and safe blood donation kits for efficient collection.",
      price: "$39.99",
      image: "/blood-donation-kit.svg",
    },
    {
      title: "Awareness Merchandise",
      description: "Support the cause with branded t-shirts, bands, and mugs.",
      price: "$24.99",
      image: "/awareness-merchandise.svg",
    },
    {
      title: "Health Supplements",
      description: "Essential vitamins and iron supplements for healthy donors.",
      price: "$14.99",
      image: "/health-supplements.svg",
    },
    {
      title: "Hydration Packs",
      description: "Stay hydrated before and after donation with our hydration packs.",
      price: "$9.99",
      image: "/hydration-pack.svg",
    },
    {
      title: "Blood Group ID Cards",
      description: "Customized ID cards displaying your blood group for emergencies.",
      price: "$4.99",
      image: "/blood-group-id-card.svg",
    },
    {
      title: "Donor Appreciation Certificates",
      description: "Get personalized certificates to celebrate your life-saving donation.",
      price: "$2.99",
      image: "/donor-certificate.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-rose-600 mb-8 text-center">Support Blood Donation</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-rose-600 text-center mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-center mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-rose-600">{product.price}</span>
                <button className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
