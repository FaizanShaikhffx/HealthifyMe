

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '3f0b1b0090msh1a3eb926bc8e65ap13f6dajsn5d8cc18626c0',
  },
};
console.log(import.meta.env.VITE_REACT_APP_RAPID_API_KEY);
export const fetchData = async(url, options)=>{
  const response = await fetch(url, options ); 
  const data = await response.json(); 
  
  
  return data; 
}