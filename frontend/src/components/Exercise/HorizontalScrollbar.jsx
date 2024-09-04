import React from 'react'
import BodyPart from './BodyPart';


const HorizontalScrollbar = ({data}) => {
  console.log(data);
  return (
    <div>
      {data.map((item)=> (
        <div
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}

        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default HorizontalScrollbar
