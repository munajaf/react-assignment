import React from 'react';
import Header from "../components/Header";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Map from "../components/Map";
import {setHistoryLatLong} from "../actions/DefaultActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer'
  },
}));

const History = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    history,
    historyLat,
    historyLong
  } = useSelector(({defaultData}) => defaultData)

  return (
    <Container component="main">
      <Header/>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {!history.length && (
              <Paper
                className={classes.paper}
                key={0}
              >
                No History
              </Paper>
            )}

            {history.map((data, k) => (
                <Paper
                  className={classes.paper}
                  key={k}
                  onClick={() => dispatch(setHistoryLatLong(data))}
                >
                  {data?.formatted_address}
                </Paper>
              )
            )}
          </Grid>
          <Grid item xs={9}>
            <Map
              latitude={historyLat}
              longitude={historyLong}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default History;