import "./charInfo.scss";
import {useState, useEffect} from "react";
import PropTypes from "prop-types";

import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import useMarvelService from "../../services/MarvelServices";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const {loading, error, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [])

  useEffect(() => {
    updateChar();
  }, [props.charId])

  const updateChar = () => {
    const { charId } = props;
    if (!charId) return;
    clearError();
    getCharacter(charId)
      .then(char => setChar(char));
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View {...char} /> : null;
  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

const View = ({ name, description, thumbnail, homepage, wiki, comics }) => {

  comics = comics.length > 10 ? comics.slice(10) : comics;

  return (
    <>
      <div className="char__basics">
        <img
          src={thumbnail}
          className={
            thumbnail ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
              ? " not-found"
              : ""
          }
          alt="abyss"
        />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length ? (
          comics.map((item, i) => (
            <li key={i} className="char__comics-item">
              {item.name}
            </li>
          ))
        ) : (
          <p>There is no comics with this character</p>
        )}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number
}

export default CharInfo;
