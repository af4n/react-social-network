import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?"
                 render={() => <ProfileContainer/>}/>
          <Route path="/login"
                 render={() => <Login/>}/>
          <Route path="/dialogs"
                 render={() => <DialogsContainer/>}/>
          <Route path="/users"
                 render={() => <UsersContainer/>}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/friends" components={Friends}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
