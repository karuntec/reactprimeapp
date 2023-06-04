// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMovieList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-image"
      />
      <div className="video-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movieList={actionMovieList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
