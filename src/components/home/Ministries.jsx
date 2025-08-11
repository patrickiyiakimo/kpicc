import React from "react";

const ministries = [
  {
    title: "Youth Ministry",
    description:
      "Empowering young people through relevant teachings, mentorship, and community events to become future leaders rooted in faith.",
    icon: (
      <svg
        className="w-12 h-12 text-purple-700 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 20h12"
        />
      </svg>
    ),
  },
  {
    title: "Women’s Ministry",
    description:
      "A nurturing environment where women can grow spiritually, connect deeply, and serve actively through various programs and fellowship.",
    icon: (
      <svg
        className="w-12 h-12 text-purple-700 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a7 7 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    title: "Prayer Ministry",
    description:
      "Dedicated to intercession and lifting the needs of the church and community in fervent, faith-filled prayer.",
    icon: (
      <svg
        className="w-12 h-12 text-purple-700 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22s8-4.5 8-10a8 8 0 0 0-16 0c0 5.5 8 10 8 10z"
        />
      </svg>
    ),
  },
  {
    title: "Men’s Ministry",
    description:
      "Building strong, godly men through discipleship, fellowship, and purposeful outreach activities.",
    icon: (
      <svg
        className="w-12 h-12 text-purple-700 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 14l-2-2m0 0l2-2m-2 2h8m4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
        />
      </svg>
    ),
  },
  {
    title: "Children’s Ministry",
    description:
      "Providing a safe, fun, and spiritually enriching environment for children to learn about God's love and grow in faith.",
    icon: (
      <svg
        className="w-12 h-12 text-purple-700 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
      </svg>
    ),
  },
];

const Ministries = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Our Ministries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ministries.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-purple-50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
              <p className="text-gray-600 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
