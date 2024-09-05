import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="mt-5 lg:mt-52 p-5">
      <h1 className="text-2xl lg:text-4xl font-bold text-black mb-8">
        Watch <span className="text-red-500 capitalize">{name}</span> exercise videos
      </h1>
      <div className="flex flex-wrap justify-start items-center gap-0 lg:gap-28">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img className="rounded-tl-lg" src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <h2 className="text-lg lg:text-2xl font-semibold text-black">
                {item.video.title}
              </h2>
              <p className="text-sm text-black">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
