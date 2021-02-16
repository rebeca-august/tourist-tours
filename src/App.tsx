import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

export type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}
export type RemoveTour = (id: string) => void

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState<Tour[]>([])

  const fetchData = async () => {
    setLoading(true)

    const response = await fetch(url)
    const tours = await response.json()

    setLoading(false)
    setTours(tours)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  const removeTour: RemoveTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchData}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
