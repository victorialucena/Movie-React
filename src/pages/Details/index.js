import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIkey } from '../../config/key'
import { Container } from './style'
import { Link } from 'react-router-dom'

function Details() {
  const { id } = useParams()

  const images_path = 'https://image.tmdb.org/t/p/w500'

  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US&page=1
 `)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date } = data
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${images_path}${poster_path}`,
          releaseDate: release_date
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span> Sinopse: {movie.sinopse}</span>
          <span className="realease-date">
            Realease data: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Details
