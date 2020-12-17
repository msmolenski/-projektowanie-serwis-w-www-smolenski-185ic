import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container>
      <br />
      <Tooltip title="Ta strona ciągle się ładuje"><CircularProgress /></Tooltip>
      <br />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/logo_raw.svg"
            title="material-ui"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              MATERIAL-UI
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Komponenty Reacta dla szybszego i łatwiejszego tworzenia stron internetowych.
              Zbuduj własny system projektowania lub zacznij od Material Design.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="https://material-ui.com/getting-started/installation/" size="small" color="primary">
            Dowiedz się więcej
        </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
