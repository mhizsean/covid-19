//importing packages starts here
import React, { useState, useEffect, Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
//importing packages ends here

//component styling starts here
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: 'white',
    height: '70px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(8),
    backgroundColor: '#01579b',
  },
  icon: {
    marginRight: theme.spacing(2),
  },

  card: {
    maxHeight: '200%',
    display: 'block',
    flexDirection: 'column',
    minWidth: '300px',
    marginLeft: '13.5px',
    marginRight: '13.5px',
    float: 'right',
    width: '100px',
    position: 'center',
    borderRadius: '7px',
    justifyContent: 'space-evenly',
    boxSizing: 'border-box',


  },
  cardMedia: {
    paddingTop: '6.25%', // 16:9
    paddingButtom: '6.25%'
  },
  cardContent: {
    flexGrow: 1,
  },

}));
//component styling ends here

//function starts here
class Cards extends Component {
  state = {
    totalCase: "",
    totalDeath: "",
    totalRecover: ""
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then(data => this.setState({
        totalCase: data.data.confirmed.value,
        totalDeath: data.data.deaths.value,
        totalRecover: data.data.recovered.value
      }))
      .catch(err => {
        console.log(err);
        return null;
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Card starts here */}
          <Container className={classes.cardGrid} maxWidth="600px">
            <br /><br />
            <Grid container spacing={0} justify="space-evenly">

              <Card className={classes.card} variant="outlined" elevation={3}>
                <CardContent className={classes.cardContent}>
                  <CardMedia className={classes.cardMedia} align="center" >
                    <Typography color="secondary" style={{ fontSize: 25 }}>
                      TOTAL CASES
                      </Typography>
                    <Divider />
                    <Typography color="primary" style={{ fontSize: 40 }}>
                      {this.state.totalCase}
                    </Typography>
                  </CardMedia>
                </CardContent>
              </Card>
              <Card className={classes.card} variant="outlined">
                <CardContent className={classes.cardContent}>
                  <CardMedia className={classes.cardMedia} align="center" >
                    <Typography color="secondary" style={{ fontSize: 25 }}>
                      TOTAL DEATHS
                      </Typography>
                    <Divider />
                    <Typography color="primary" style={{ fontSize: 40 }}>
                      {this.state.totalDeath}
                    </Typography>
                  </CardMedia>
                </CardContent>
              </Card>

              <Card className={classes.card} variant="outlined">
                <CardContent className={classes.cardContent}>
                  <CardMedia className={classes.cardMedia} align="center" >
                    <Typography color="secondary" style={{ fontSize: 25 }}>
                      TOTAL RECOVERED
                      </Typography>
                    <Divider />
                    <Typography color="primary" style={{ fontSize: 40 }}>
                      {this.state.totalRecover}
                    </Typography>
                  </CardMedia>
                </CardContent>
              </Card>
            </Grid>
            <br />
            <Grid container spacing={0} justify="space-evenly">
            </Grid>
            <br /><br />
          </Container>
          {/* Card ends here */}
        </main>
      </React.Fragment>

    )
  }
}

export default withStyles(useStyles)(Cards);