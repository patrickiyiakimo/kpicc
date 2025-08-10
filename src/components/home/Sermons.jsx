import React from "react";
import SermonCard from "./SermonCard";
import sermons from "../common/sermonsData";

const Sermons = () => {
  return (
    <section id="sermons" className="bg-white py-24 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Sermon Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {sermons.map(({ id, title, speaker, date, summary }) => (
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
      </div>
    </section>
  );
};

export default Sermons;
