import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="w-full h-auto" />
    <div className="flex flex-row mt-2">
      <button className="ml-5 text-white bg-red-300 text-sm rounded-full px-4 py-1 capitalize">
        {exercise.bodyPart}
      </button>
      <button className="ml-5 text-white bg-yellow-400 text-sm rounded-full px-4 py-1 capitalize">
        {exercise.target}
      </button>
    </div>
    <p className="ml-5 text-black font-bold mt-3 pb-2 capitalize text-lg lg:text-xl">
      {exercise.name}
    </p>
  </Link>
);

export default ExerciseCard;
