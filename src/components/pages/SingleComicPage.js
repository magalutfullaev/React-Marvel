import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import useMarvelService from "../../services/MarvelServices";

import './singleComicPage.scss';

const SingleComicPage = () => {
  const {comicId} = useParams();
  const [comic, setComic] = useState(null);
  const {loading, error, getComic, clearError} = useMarvelService();


  useEffect(() => {
    updateComic();
  }, [comicId])

  const updateComic = () => {
    clearError();
    getComic(comicId)
      .then(comic => setComic(comic));
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {!(loading || error || !comic) && <div className="single-comic">
        <img src={comic.thumbnail} alt={comic.title} className="single-comic__img"/>
        <div className="single-comic__info">
          <h2 className="single-comic__name">{comic.title}</h2>
          <p className="single-comic__descr">{comic.description}</p>
          <p className="single-comic__descr">{comic.pageCount}</p>
          <p className="single-comic__descr">Language: {comic.language}</p>
          <div className="single-comic__price">{comic.price}</div>
        </div>
        <Link to="/comics" className="single-comic__back">Back to all</Link>
      </div>}
    </>
  )
}

export default SingleComicPage;