import React from 'react';
import Classes from './PokeCard.module.css';
import Type from '../Types/Types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: '30%',
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const PokeCard = (props) => {
  let types = null;
  let stats = null;
  if (props.data.types.length > 0) {
    types = props.data.types.map((type, index) => {
      return <Type label={type} key={index} />;
    });
  }
  if (props.data.statName.length > 0) {
    stats = props.data.statName.map((stat, index) => {
      return (
        <ListItem key={index}>
          {stat} : &nbsp;
          <BorderLinearProgress
            variant="determinate"
            value={(props.data.baseStats[index] / 255) * 100}
          />
          &nbsp; {props.data.baseStats[index]}
        </ListItem>
      );
    });
  }

  return (
    <Card className={Classes.PokeCard}>
      <CardContent>
        <Typography
          color="textPrimary"
          variant="h3"
          className={Classes.heading}
        >
          {props.data.name.toUpperCase()}
        </Typography>
        <Grid container spacing={0} className={Classes.grid}>
          <Grid item xs={12} sm={6}>
            <img
              className={Classes.img}
              alt="complex"
              src={`https://pokeres.bastionbot.org/images/pokemon/${props.data.id}.png`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={Classes.listdata}>
              <List>
                <ListItem button>
                  <ListItemText>Name : {props.data.name}</ListItemText>
                  {types}
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>PID : #{props.data.id}</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    Height : {props.data.height / 10} metres
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    Weight : {props.data.weight / 10} kgs
                  </ListItemText>
                </ListItem>
                <Divider />
                {stats}
              </List>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokeCard;
