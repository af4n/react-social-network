import React from "react";
import Users from "./Users";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator, setUsersTotalCountActionCreator,
  unfollowActionCreator
} from "../../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followActionCreator(usersId));
    },
    unfollow: (usersId) => {
      dispatch(unfollowActionCreator(usersId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);