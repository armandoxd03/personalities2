import { useState } from 'react';
import { animeList } from './data.tsx';
import './App.css';
import { Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AnimeCard() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
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

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  let anime = animeList[index];

  return (
    <div className="anime-box">
      <div className="anime-header">
        <IconButton aria-label="back" onClick={handleBackClick}>
          <ArrowBackIcon />
        </IconButton>

        <Card sx={{ maxWidth: 345 }} className="anime-card">
        <h2>John Roy Ducut - C-PEITEL3</h2>
        <h3>My Anime List</h3>
        <h3>
        {index + 1} of {animeList.length}
      </h3>
      
          <CardMedia
            component="img"
            image={anime.url}
            alt={anime.alt}
            className="anime-image"
          />

          <CardContent>
            <Typography variant="h6" className="anime-title">{anime.name}</Typography>
            <Typography variant="body2" color="text.secondary">by {anime.artist}</Typography>
          </CardContent>

          <CardActions className="card-actions" disableSpacing>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>{anime.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <IconButton aria-label="next" onClick={handleNextClick}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}
