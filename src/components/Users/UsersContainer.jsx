import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
  follow, requestUsers,
  setCurrentPage,
  unfollow, toggleFollowingProgress,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getCurrentPage, getUsers, getTotalItemsCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalItemsCount={this.props.totalItemsCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             followingInProgress={this.props.followingInProgress}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: requestUsers, requestUsers
  }),
  withAuthRedirect
)(UsersContainer);