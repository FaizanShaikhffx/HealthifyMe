import React from 'react';
import Icon from '../../assets/icons/gym.png';


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  
  const isSelected = bodyPart === item;

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 m-2 bg-white rounded-bl-lg cursor-pointer transition-transform duration-200 ${
        isSelected ? 'border-t-4 border-red-500' : ''
      }`}
      style={{ width: '270px', height: '282px', gap: '47px' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" className="w-10 h-10" />
      <h3 className="text-2xl font-bold font-serif text-[#3A1212] capitalize">{item}</h3>
    </div>
  );
};

export default BodyPart;
