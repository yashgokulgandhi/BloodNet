// import React from "react";
import PropTypes from "prop-types"; // Import prop-types
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand text-primary fw-bold" href="#">
          LifeStream Connect
        </a>
      </div>
    </nav>
  );
}

function ActionCard({ title, description, buttonText, iconClass, href }) {
  return (
    <div className="card bg-light shadow-sm border-0">
      <div className="card-body text-center">
        <i className={`${iconClass} display-4 text-primary mb-3`}></i>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <a href={href} className="btn btn-primary w-100">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

// ✅ Prop validation for ActionCard
ActionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default function Home() {
  return (
    <div className="min-vh-100 bg-primary bg-gradient text-white">
      <NavBar />
      <header className="text-center py-5">
        <h1 className="display-4 fw-bold">LifeStream Connect</h1>
        <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
          Bridging the gap between blood donors and hospitals. Making blood donation accessible and efficient through
          our innovative platform.
        </p>
      </header>

      <section className="container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <ActionCard
              title="For Blood Donors"
              description="Register as a donor and help save lives. Quick and easy donation process."
              buttonText="Start Donating"
              iconClass="bi bi-droplet-half"
              href="/donor/home"
            />
          </div>
          <div className="col-md-5">
            <ActionCard
              title="For Hospitals"
              description="Access a network of verified donors and manage blood inventory efficiently."
              buttonText="Hospital Portal"
              iconClass="bi bi-hospital"
              href="/hospital/home"
            />
          </div>
        </div>
      </section>

      <footer className="text-center py-4 bg-light text-primary">
        <p className="mb-0">&copy; 2025 LifeStream Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}
