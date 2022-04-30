import { Container, Movie, MovieList } from './style'

function Home() {
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        <Movie>
          <a href="https://google.com.br">
            <img
              src="https://br.web.img3.acsta.net/medias/nmedia/18/87/29/75/19874043.jpg"
              alt="a proposta"
            />
          </a>
          <span>A proposta </span>
        </Movie>
        <Movie>
          <a href="https://google.com.br">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg"
              alt="Sherk"
            />
          </a>
          <span>Sherk</span>
        </Movie>
        <Movie>
          <a href="https://google.com.br">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/thumb/1/13/John_wick_ver3.jpg/250px-John_wick_ver3.jpg"
              alt="jonh wick"
            />
          </a>
          <span>Jonh Wick</span>
        </Movie>
      </MovieList>
    </Container>
  )
}

export default Home
