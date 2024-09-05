import React, { useContext } from 'react';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';


const LeftArrow = ({ scrollPrev }) => (
  <div onClick={scrollPrev} className="cursor-pointer">
    <img src={LeftArrowIcon} alt="left-arrow" />
  </div>
);

const RightArrow = ({ scrollNext }) => (
  <div onClick={scrollNext} className="cursor-pointer">
    <img src={RightArrowIcon} alt="right-arrow" />
  </div>
);

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = React.useRef(null);

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
      <LeftArrow scrollPrev={scrollPrev} />
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-10"
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            className="flex-shrink-0 mx-10"
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </div>
      <RightArrow scrollNext={scrollNext} />
    </div>
  );
};

export default HorizontalScrollbar;
