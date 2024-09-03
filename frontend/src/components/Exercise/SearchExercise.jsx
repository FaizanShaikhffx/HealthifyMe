import React from 'react';
import { useState } from 'react';
import { exerciseOptions, fetchData} from '../utils/fetchData';
import { CloudCog } from 'lucide-react';


const SearchExercise = () => {

  const [search, setSearch] = useState(''); 
  const [exercise, setExercise] = useState([])

  const handleSearch = async() =>{
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exerciseData.filter(
           (exercise)=> exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch(""); 
      setExercise(searchedExercises)
    }
  }
  
  return (
    <div className="flex flex-col items-center p-3 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Awesome Exercises You Should Know</h2>
      </div>
      <div className="flex items-center w-[60%] ">
        <input
          type="text"
          className="flex-grow p-3 text-lg border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
        />
        <button className="p-3 ml-1 text-lg font-semibold text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearch}
        
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchExercise;
