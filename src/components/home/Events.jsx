import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import events from "../common/eventsData";

const Events = () => {
  return (
    <section id="events" className="bg-white py-14 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-7xl mx-auto pb-20">
        <h2 className="text-5xl font-extrabold text-center pb-20 text-gray-900">Upcoming Events</h2>

        <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {events.map(({ title, date, time, location, description }) => (
            <article
              key={title}
              className="relative mt-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Top Gradient Bar */}
              <div className="h-8 mt-10 bg-gradient-to-r from-purple-600 to-pink-500"></div>

              <div className="p-8 mt-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-snug">{title}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-3 text-purple-600" />
                    <time className="font-medium">{date}</time>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-3 text-purple-600" />
                    <span className="font-medium">{time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-3 text-purple-600" />
                    <span className="font-medium">{location}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed flex-grow pb-10">{description}</p>

                {/* Call-to-action button */}
                <div className="mt-12">
                  <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors w-full font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
