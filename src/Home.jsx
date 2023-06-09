import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Features from './components/Features';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Features />
    </div>
  );
}


