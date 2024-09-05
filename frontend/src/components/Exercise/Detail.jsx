import React from 'react';

import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '.../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-15 p-5 items-center">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="flex flex-col gap-9 lg:gap-5">
        <p className="text-4xl lg:text-8xl font-bold capitalize">
          {name}
        </p>
        <p className="text-lg lg:text-2xl text-gray-700">
          Exercises keep you strong.{' '}
          <span className="capitalize">{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </p>
        {extraDetail?.map((item) => (
          <div key={item.name} className="flex flex-row gap-6 items-center">
            <button className="bg-yellow-100 rounded-full w-25 h-25 flex items-center justify-center">
              <img src={item.icon} alt={bodyPart} className="w-12 h-12" />
            </button>
            <p className="text-2xl lg:text-3xl capitalize">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
