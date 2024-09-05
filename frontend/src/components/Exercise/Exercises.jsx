import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { exerciseOptions, fetchData } from '../utils/fetchData.js';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-12 lg:mt-28 p-5">
      <h4 className="text-2xl lg:text-4xl font-bold mb-12">Showing Results</h4>
      <div className="flex flex-wrap justify-center gap-12 lg:gap-28">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </div>
      <div className="mt-16 lg:mt-28 flex justify-center">
        {exercises.length > 9 && (
          <div className="flex">
            {Array.from({ length: Math.ceil(exercises.length / exercisesPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(null, index + 1)}
                className={`px-4 py-2 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
