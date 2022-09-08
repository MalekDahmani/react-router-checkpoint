import React from "react";
import "./Trailer.css";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types"

function Trailer({ newMovie, match }) {
    let Id = useParams().id;
    let targetMovie = newMovie.find((el) => el.id === Id);
    let nextMovieIndex = newMovie.indexOf(targetMovie) + 1;
    let nextMovie = newMovie[nextMovieIndex];
    let previousMovieIndex = newMovie.indexOf(targetMovie) - 1;
    let previousMovie = newMovie[previousMovieIndex];
    let navigate = useNavigate();

   

    return (
        console.log(useParams()),
        (
            <div className="trailer">
               
               <iframe width="560" height="315" src={targetMovie.TrailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <h1 style={{ color: "red" }}>{useParams().Title} </h1>
                <p> {targetMovie.Description} </p>
                <Link to="/">
                    <Button variant="danger">Home</Button>
                </Link>

                
            </div>
        )
    );
}
Trailer.propTypes = {
    TrailerUrl: PropTypes.string.isRequired
  };
export default Trailer;
