import React from 'react'
import Tour from './Tour'
import { Tour as TourType, RemoveTour } from './App'

type Props = {
  tours: TourType[]
  removeTour: RemoveTour
}

const Tours = ({ tours, removeTour }: Props) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
