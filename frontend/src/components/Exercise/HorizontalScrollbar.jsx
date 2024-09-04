import React, { useRef } from 'react';

import BodyPart from './BodyPart.jsx'
import RightArrowIcon from "../../assets/icons/right-arrow.png"
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = useRef(null);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={scrollPrev}
      >
        <img src={LeftArrowIcon} alt="left-arrow" className="w-6 h-6" />
      </div>
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={scrollNext}
      >
        <img src={RightArrowIcon} alt="right-arrow" className="w-6 h-6" />
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-10 p-4"
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            className="flex-shrink-0"
            title={item.id || item}
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <p>nothing</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
