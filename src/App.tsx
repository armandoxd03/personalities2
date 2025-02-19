import { useState } from 'react';
import { animeList } from './data.tsx';
import './App.css';
import { 
  Card, CardMedia, CardContent, CardActions, Collapse, 
  IconButton, Typography 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AnimeCard() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const hasNext = index < animeList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(hasBack ? index - 1 : animeList.length - 1);
  }

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  let anime = animeList[index];

  return (
    <div className="anime-box">
      <div className="anime-header">
      <IconButton aria-label="back" onClick={handleBackClick} sx={{ color: 'white' }}>
        <ArrowBackIcon />
      </IconButton>

        <Card sx={{ maxWidth: 345 }} className="anime-card">
          <CardContent>
            <Typography variant="h5" component="h2" className="anime-title">
              John Roy Ducut - C-PEITEL3
            </Typography>
            <Typography variant="h6" component="h3">
              My Anime List
              John Roy Ducut - C-PEITEL3
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {index + 1} of {animeList.length}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            image={anime.url}
            alt={anime.alt}
            className="anime-image"
          />

          <CardContent>
            <Typography variant="h6" className="anime-title">
              {anime.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              by {anime.artist}
            </Typography>
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

        <IconButton aria-label="next" onClick={handleNextClick} sx={{ color: 'white' }}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}
