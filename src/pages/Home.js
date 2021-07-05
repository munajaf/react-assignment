import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import Autocomplete from "react-google-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setLatLong } from "../actions/DefaultActions";
import Map from "../components/Map";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    width: '100%',
    marginBottom: 12,
    marginTop: 12,
    padding: 10
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { defaultData } = useSelector(state => state)
  return (
    <Container component="main">
      <Header/>
      <Autocomplete
        className={classes.autocomplete}
        onPlaceSelected={(data) => {
          if (data.geometry) {
            dispatch(setLatLong(data))
          }
        }}
        debounce={10000}
        options={{
          types: ["(regions)"],
          componentRestrictions: { country: "my" },
        }}
        defaultValue="Penang"
      />

      <Map
        latitude={defaultData?.lat}
        longitude={defaultData?.long}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Container>
  );
}

export default Home;