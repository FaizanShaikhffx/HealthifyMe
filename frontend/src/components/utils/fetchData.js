

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY
  }
};
console.log(import.meta.env.REACT_APP_RAPID_API_KEY);
export const fetchData = async(url, options)=>{
  const response = await fetch(url, options ); 
  const data = await response.json(); 
  
  
  return data; 
}