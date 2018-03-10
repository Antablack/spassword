import React, { Component } from 'react';
import Grid from "material-ui/Grid";
import { Switch, Route, IndexRoute } from "react-router-dom";
import Login from "./login";
import Main from "./components/main";
import Account from "./components/account";
import './App.css';

class App extends Component {

  isSignIn = true;
  render() {
    let content;
    if (this.isSignIn) {
      content = (
        <Switch>
          <Route exact path="/" component={Main} />
          <Main>
              <Route path="/account" component={Account} />
          </Main>
        </Switch>
      );
    } else {
      content = <Login />;
    }
    return (
      <Grid container className="main-container" spacing={0} alignItems="center" direction="row" justify="center" >
        <Grid item className="main-item" xs={12} sm={8} >
          {content}
        </Grid>
      </Grid>
    );
  }
}

export default App;
