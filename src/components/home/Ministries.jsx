import React from "react";

const ministries = [
  {
    title: "Youth Ministry",
    description:
      "Empowering young people through relevant teachings, mentorship, and community events to become future leaders rooted in faith.",
    image: "/images/youth-ministry.avif",
  },
  {
    title: "Women’s Ministry",
    description:
      "A nurturing environment where women can grow spiritually, connect deeply, and serve actively through various programs and fellowship.",
    image: "/images/women-ministry.webp",
  },
  {
    title: "Prayer Ministry",
    description:
      "Dedicated to intercession and lifting the needs of the church and community in fervent, faith-filled prayer.",
    image: "/images/prayer-ministry.avif",
  },
  {
    title: "Men’s Ministry",
    description:
      "Building strong, godly men through discipleship, fellowship, and purposeful outreach activities.",
    image: "/images/men-ministry.webp",
  },
  {
    title: "Children’s Ministry",
    description:
      "Providing a safe, fun, and spiritually enriching environment for children to learn about God's love and grow in faith.",
    image: "/images/children-ministry.avif",
  },
];

const Ministries = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-purple-600 text-center mb-14">
          Our Ministries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ministries.map(({ title, description, image }) => (
            <div
              key={title}
              className="relative rounded-3xl overflow-hidden shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-500 opacity-30"></div>

              {/* Image */}
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />

              {/* Text Content */}
              <div className="p-6 bg-white relative rounded-b-3xl">
                <h3 className="text-2xl font-semibold mb-3 text-purple-600">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
