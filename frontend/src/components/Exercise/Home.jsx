import React, { useState } from 'react';


import Exercise from './Exercise';
import SearchExercises from './SearchExercise';



const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercise setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  );
};

export default Home;