import { useState } from 'react';
import { animeList } from './data.tsx';
import './App.css'
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Collapse
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

export default function App() {
  const [index, setIndex] = useState(0);
  const hasNext = index < animeList.length - 1;
  const hasBack = index > 0;

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIndex(Number(event.target.value));
  }

  function handleNextClick() {
    setIndex((prevIndex) => (hasNext ? prevIndex + 1 : 0));
  }

  function handleBackClick() {
    setIndex((prevIndex) => (hasBack ? prevIndex - 1 : animeList.length - 1));
  }

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <FormLabel component="legend">Select an Anime</FormLabel>
      <RadioGroup row value={index} onChange={handleRadioChange}>
        {animeList.map((anime, i) => (
          <FormControlLabel key={i} value={i} control={<Radio />} label={anime.name} />
        ))}
      </RadioGroup>

      <AnimeCard index={index} />

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={handleBackClick} disabled={!hasBack} sx={{ marginRight: 1 }}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNextClick} disabled={!hasNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expand',
})<{ expand: boolean }>(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

function AnimeCard({ index }: { index: number }) {
  const [expanded, setExpanded] = useState(false);
  const anime = animeList[index];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 2 }}>
      <CardHeader
        title={anime.name}
        subheader={`by ${anime.artist}`}
      />
      <CardMedia component="img" height="194" className='anime-image'  image={anime.url} alt={anime.alt} />
      <CardActions disableSpacing>

        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          {expanded ? <ExpandLessOutlinedIcon /> : <ExpandMoreIcon />}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>More Info:</Typography>
          <Typography>{anime.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
