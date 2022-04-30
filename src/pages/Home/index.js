import { Container, Movie, MovieList } from './style'

function Home() {
  const movies = [
    {
      id: 1,
      title: 'A proposta',
      image_url:
        'https://br.web.img3.acsta.net/medias/nmedia/18/87/29/75/19874043.jpg'
    },

    {
      id: 2,
      title: 'Sherek',
      image_url:
        'https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg'
    },

    {
      id: 3,
      title: 'Jonh Wick',
      image_url:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/1/13/John_wick_ver3.jpg/250px-John_wick_ver3.jpg'
    }
  ]

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="https://google.com.br">
                <img src={movie.image_url} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}
export default Home
