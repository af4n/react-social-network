import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user-photo.png"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>

      <div className={styles.pagination}>
        {pages.map(p => {
          return <span className={props.currentPage === p && styles.selectedPage}
                       onClick={(e) => {
                         props.onPageChanged(p)
                       }}>{p}</span>
        })}
      </div>

      {
        props.users.map(u => <div key={u.id}>
            <div>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="photo"/>
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.follow(u.id)}}>Follow</button>}
              </div>
            </div>
            <div>
              <div>
                <span>{u.name}</span>
                <span>{u.status}</span>
              </div>
              <div>
                <span>{"u.location.country"}</span>
                <span>{"u.location.city"}</span>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}


export default Users;