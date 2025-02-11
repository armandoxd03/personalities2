import { useState } from 'react';
import { animeList } from './data.tsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < animeList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasBack) {
      setIndex(index - 1);
    } else {
      setIndex(animeList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let anime = animeList[index];
  return (
    <>
    <h1>John Roy C. Ducut</h1>
    <h3>
        {index + 1} of {animeList.length}
      </h3>
      <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{anime.name} </i>
        by {anime.artist}
      </h2>
      {showMore && <p>{anime.description}</p>}
      <img
        src={anime.url}
        alt={anime.alt}
      />
            <div>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      </div>
    </>
  );
}





