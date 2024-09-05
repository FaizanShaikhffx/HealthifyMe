import React from 'react';
import Icon from '../../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    role="button"
    className={`flex flex-col items-center justify-center cursor-pointer gap-12 w-68 h-70 rounded-bl-2xl ${bodyPart === item ? 'border-t-4 border-red-600 bg-white' : 'bg-white'}`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" className="w-10 h-10" />
    <p className="text-2xl font-bold font-serif text-red-900 capitalize">{item}</p>
  </div>
);

export default BodyPart;
