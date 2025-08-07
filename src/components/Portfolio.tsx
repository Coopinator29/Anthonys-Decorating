import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-custom-blue text-offwhite py-12 px-6">
      <h2 className="text-white text-2xl font-bold mb-6">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Video: Room Overview */}
        <div className="bg-custom-silver rounded p-4 text-navy shadow-md">
          <h3 className="text-lg font-bold mb-2">Before Painting: Room Overview</h3>
          <video
            className="w-full h-auto rounded mb-2"
            controls
            poster="/thumbnails/room-overview.jpg" // Optional placeholder image
          >
            <source src="/media/room-overview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Get a look at the rooms before the painting process began.</p>
        </div>

        {/* Video: Spray Painting Process */}
        <div className="bg-custom-silver rounded p-4 text-navy shadow-md">
          <h3 className="text-lg font-bold mb-2">Spray Painting in Action</h3>
          <video
            className="w-full h-auto rounded mb-2"
            controls
            poster="/thumbnails/spray-painting.jpg"
          >
            <source src="/media/spray-painting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Watch the transformation as I spray paint the walls for a smooth, even finish.</p>
        </div>

        {/* Image: Tools Used */}
        <div className="bg-custom-silver rounded p-4 text-navy shadow-md">
          <h3 className="text-lg font-bold mb-2">Tools & Equipment</h3>
          <img
            src="/media/painting-gear.jpg"
            alt="Spray painting equipment and tools"
            className="w-full h-auto rounded mb-2"
          />
          <p>High-quality gear I use to ensure a professional finish every time.</p>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
