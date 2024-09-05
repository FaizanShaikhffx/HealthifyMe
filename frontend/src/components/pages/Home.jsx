import React, { useState } from 'react';

import Exercises from '../Exercise/Exercises'
import SearchExercises from '../Exercise/SearchExercise';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div className="container mx-auto p-4">
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  );
};

export default Home;
