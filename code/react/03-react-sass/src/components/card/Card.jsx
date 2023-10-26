import React from 'react'

import "./Card.scss"

const Card = ({ data }) => {
  // console.log(data);
  return (
    <div className='konteynir' >
      {data.map(({ name, job, comment, img, id }) => {
        return <div className='kart' key={id}>
          <h1>{name}</h1>
          <h2>{job}</h2>
          <p>{comment}</p>

          <img src={img} alt="" />
          <div>
            <button className='small'>Small</button>
            <button className='large'>Large</button>
          </div>
        </div>
      })}
    </div>
  )
}

export default Card