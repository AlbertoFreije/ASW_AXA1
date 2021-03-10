import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import EmailForm from "./components/EmailForm";
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';

import * as qs from 'query-string';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './components/login';
import Profile from './components/profile';
import {StartPage} from './routing';


const AppHeader = withStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  login: {
    flexGrow: 1
  }
})(({classes}) => <header className={classes.root}>
  <AppBar position="static" color="default">
    <Toolbar>
      <div className={classes.grow}>
        <Button
            component={Link}
            to={"/"}>
          <Typography className={classes.grow} variant="h5" component="h2"
                      color="inherit">
            RADARIN
          </Typography>
        </Button>
      </div>
      <Login/>
    </Toolbar>
  </AppBar>
</header>);

class App extends React.Component{
  constructor(){
    super()
    this.state = {users:[]}
  }

  refreshUsers(users){
    this.setState({users:users})
  }

  render(){
    return(
      <div className="App">
	  <CssBaseline />
	  <Router>
        <header className="App-header">
		{/*<img src={logo} className="App-logo" alt="logo"/> <Welcome name="ASW students"/>*/}
          <AppHeader/>
        </header>
		<main>
              <Route exact path="/" component={StartPage}/>
              <Route path="/profile/" render={({location}) => {
                const params = qs.parse(location.search);
                return <Profile webId={params.webId}/>
              }}/>
            </main>
			{/*<div className="App-content">
          <EmailForm refreshUsers={this.refreshUsers.bind(this)}/>
          <UserList users={this.state.users}/>
          <a className="App-link"
            href="https://github.com/pglez82/radarin_0"
            target="_blank"
            rel="noopener noreferrer">Source code</a>
			</div>*/}
	  </Router>
      </div>
    )
  }
}

export default App;