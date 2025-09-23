"use client";

import React, { useState } from "react";

const SermonCard = ({ id, title, speaker, date, summary }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full cursor-pointer transform hover:-translate-y-1">
      {/* Video Thumbnail */}
      <div
        onClick={handlePlay}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handlePlay()}
        aria-label={`Play sermon video: ${title}`}
        className="relative w-full h-60 lg:h-72"
      >
        {!isPlaying ? (
          <>
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-center justify-center">
              <button
                className="p-4 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400"
                aria-label="Play video"
              >
                <svg
                  className="w-12 h-12 text-white"
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
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-purple-700 italic font-medium mt-1">By {speaker}</p>
        <time className="block text-sm text-gray-500 mt-1">{date}</time>
        <p className="text-gray-700 leading-relaxed mt-3">{summary}</p>

        {/* Buttons on same line */}
        <div className="flex gap-4 mt-4 flex-wrap">
          <button
            onClick={() =>
              window.open(`https://www.youtube.com/watch?v=${id}`, "_blank")
            }
            className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-colors duration-300 text-center"
            aria-label={`Watch full sermon: ${title}`}
            type="button"
          >
            Watch Full Sermon
          </button>
          {isPlaying && (
            <button
              onClick={() => setIsPlaying(false)}
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-semibold shadow-md hover:bg-gray-300 transition-colors duration-300 text-center"
            >
              Close Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SermonCard;
