import React, { useEffect, useState } from 'react';


const Exercise = ({ exercises, setExercise, bodyPart }) => {
  console.log(exercises);
  return (
    <div id='exercises' className='mt-12 p-5'>
      <h3>Showing results</h3>
      <div className='flex-wrap justify-center'>
        {exercises.map((exercise, index) => (
          <p key={index}>{exercise.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
