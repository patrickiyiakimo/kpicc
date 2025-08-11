// import React from "react";
// import SermonCard from "./SermonCard";
// import sermons from "../common/sermonsData";

// const Sermons = () => {
//   return (
//     <section id="sermons" className="bg-white py-24 px-6 md:px-16 lg:px-32 text-gray-800">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-14">Sermon Highlights</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
//           {sermons.map(({ id, title, speaker, date, summary }) => (
//             <SermonCard
//               key={id}
//               id={id}
//               title={title}
//               speaker={speaker}
//               date={date}
//               summary={summary}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sermons;



"use client";
import React, { useState } from "react";
import SermonCard from "./SermonCard";
import sermons from "../common/sermonsData";

const Sermons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sermonsPerPage = 6;

  // Calculate indexes for pagination
  const indexOfLastSermon = currentPage * sermonsPerPage;
  const indexOfFirstSermon = indexOfLastSermon - sermonsPerPage;
  const currentSermons = sermons.slice(indexOfFirstSermon, indexOfLastSermon);

  const totalPages = Math.ceil(sermons.length / sermonsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section id="sermons" className="bg-white py-24 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Sermon Highlights</h2>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {currentSermons.map(({ id, title, speaker, date, summary }) => (
            <SermonCard
              key={id}
              id={id}
              title={title}
              speaker={speaker}
              date={date}
              summary={summary}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Previous
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sermons;
