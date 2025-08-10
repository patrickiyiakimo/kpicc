import React from "react";

const ContactCTA = () => {
  return (
    <section className="bg-purple-900 text-white py-24 px-6 md:px-16 lg:px-32 text-center rounded-t-lg">
      <h2 className="text-4xl font-bold mb-6">Get in Touch with Us</h2>
      <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        Whether you have questions, prayer requests, or want to get involved, we are here to listen
        and support you. Please don&apos;t hesitate to reach out, our community is ready to welcome
        you with open arms.
      </p>
      <a
        href="/contact"
        className="inline-block bg-yellow-400 text-purple-900 px-10 py-4 rounded-md font-semibold text-lg hover:bg-yellow-300 transition shadow-lg"
      >
        Contact Us
      </a>
    </section>
  );
};

export default ContactCTA;
