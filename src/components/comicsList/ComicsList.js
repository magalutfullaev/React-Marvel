import {useEffect, useState} from "react";

import useMarvelService from "../../services/MarvelServices";
import './comicsList.scss';
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";

const ComicsList = () => {
  const [charEnded, setCharEnded] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false)
  const [offset, setOffset] = useState(0);
  const [comics, setComics] = useState([]);
  const {loading, error, getComics} = useMarvelService();

  const onRequest = (offset, initial) => {
    setNewItemLoading(!initial);
    getComics(offset)
      .then(onCharLoaded);
  }

  const onCharLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 8) ended = true;

    setComics(items => [...items, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset => offset + 9);
    setCharEnded(ended);
  };

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      <ul className="comics__grid">
        {comics.map((comic, i) => {
          return (
            <li key={i} className="comics__item">
              <Link to={`/comics/${comic.id}`}>
                <img src={comic.thumbnail} alt="ultimate war" className="comics__item-img"/>
                <div className="comics__item-name">{comic.title}</div>
                <div className="comics__item-price">{comic.price}</div>
              </Link>
            </li>
          )
        })}
      </ul>
      <button
        onClick={() => onRequest(offset)}
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{'display': charEnded ? 'none' : 'block'}}>
        <div className="inner">load more</div>
      </button>
    </div>
  );
}

export default ComicsList;