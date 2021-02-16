import React, { useState } from 'react'
import { RemoveTour, Tour as TourType } from './App'

type Props = {
  tour: TourType
  removeTour: RemoveTour
}

const Tour = ({ tour, removeTour }: Props) => {
  const [readMore, setReadMore] = useState(false)
  const { id, image, info, price, name } = tour

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore)
            }}
          >
            {!readMore ? 'See More' : 'Show Less'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
