import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/actions/movieAction';
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
    const dispatch = useDispatch();
    const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    // loading true (데이터 도착 전) -> show loading spinner
    // loading false (데이터 도착 후 or 에러 발생)-> show data

    if (loading) {
        return <ClipLoader
            color="#ffffff"
            loading={loading}
            size={150}
        />
    }
    return (
        <div>
            <Banner movie={popularMovies.results[0]} />

            <h1>Popular Movie</h1>
            <MovieSlide movies={popularMovies} />
            <h1>Top Rated Movie</h1>
            <MovieSlide movies={topRatedMovies} />
            <h1>Upcoming Movie</h1>
            <MovieSlide movies={upComingMovies} />
        </div>
    )
}

export default Home