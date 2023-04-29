import "./charList.scss";
import {Component, useEffect, useState} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import useMarvelService from "../../services/MarvelServices";

const CharList = (props) => {
  const [items, setItems] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);
  const [activeElement, setActiveElement] = useState(0)
  const {loading, error, getAllCharacters} = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    setNewItemLoading(!initial);
    getAllCharacters(offset)
      .then(onCharLoaded);
  };

  const onCharLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) ended = true;

    setItems(items => [...items, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset => offset + 9);
    setCharEnded(ended);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      <ul className="char__grid">
        {items.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    props.onCharSelected(item.id);
                    setActiveElement(item.id)
                  }}
                  className={`char__item${activeElement === item.id ? ' char__item_selected' : ''}`}
                >
                  <img
                    src={item.thumbnail}
                    alt="abyss"
                    className={
                      item.thumbnail ===
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                        ? "not-found"
                        : ""
                    }
                  />
                  <div className="char__name">{item.name}</div>
                </li>
              );
            })
        }
      </ul>
      <button
        onClick={() => onRequest(offset)}
        disabled={newItemLoading}
        className="button button__main button__long"
        style={{'display': charEnded ? 'none' : 'block'}}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
}

export default CharList;
