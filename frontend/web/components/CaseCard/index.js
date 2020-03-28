import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
});

export default function CaseCard({caso, handleDelete, loading, handleOpen}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleOpen(caso)}>
        <CardMedia
          component="img"
          alt="Caso"
          height="140"
          image={`https://picsum.photos/id/1021/2048/1206`}
          title="Caso"
        />
        <CardContent style={{color: 'black'}}>
          <Typography gutterBottom variant="h5" component="h2">
            {caso.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: 'black', height: 60, overflow: 'hidden'}}>
            {caso.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography gutterBottom variant="body1" component="body1" style={{marginBottom: 0, marginLeft: 10, color: 'black'}}>
          Valor: <strong>R$ {caso.value}</strong>
        </Typography>
        <IconButton color="primary" aria-label="Deletar caso" onClick={() => handleDelete(caso.id)} disabled={loading} style={{marginLeft: 'auto'}}>
          <DeleteIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
