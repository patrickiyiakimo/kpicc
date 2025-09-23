"use client";

import { events } from "@/components/common/eventsData";
import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventsPage = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-purple-600 pb-16">
          All KPICC Events
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {events.map(({ title, date, time, location, description, image }, idx) => (
            <article
              key={idx}
              className="bg-white text-gray-800 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden rounded-xl"
            >
              {/* Event Image */}
              {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover" />
              )}

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>

                <div className="space-y-2 mb-4 text-gray-600">
                  {date && (
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-purple-500" />
                      <time>{date}</time>
                    </div>
                  )}
                  {time && (
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-purple-500" />
                      <span>{time}</span>
                    </div>
                  )}
                  {location && (
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-purple-500" />
                      <span>{location}</span>
                    </div>
                  )}
                </div>

                {description && <p className="text-gray-700 leading-relaxed">{description}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
