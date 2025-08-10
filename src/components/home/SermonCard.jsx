"use client";

import React, { useState } from "react";

const SermonCard = ({ id, title, speaker, date, summary }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-md mx-auto cursor-pointer">
      <div
        onClick={handlePlay}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handlePlay()}
        aria-label={`Play sermon video: ${title}`}
        className="relative w-full h-56 md:h-64 lg:h-72"
      >
        {!isPlaying ? (
          <>
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-xl">
              <button
                className="p-4 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400"
                aria-label="Play video"
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="42" cy="42" r="42" opacity="0.8" />
                  <path d="M33 28L55 42L33 56V28Z" fill="white" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-t-xl"
          />
        )}
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-purple-700 italic font-medium">By {speaker}</p>
        <time className="block text-sm text-gray-500">{date}</time>
        <p className="text-gray-700 leading-relaxed">{summary}</p>
        <button
          onClick={() => window.open(`https://www.youtube.com/watch?v=${id}`, "_blank")}
          className="mt-4 inline-block px-6 py-2 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-colors duration-300"
          aria-label={`Watch full sermon: ${title}`}
          type="button"
        >
          Watch Full Sermon
        </button>
      </div>
    </div>
  );
};

export default SermonCard;
