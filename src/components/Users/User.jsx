import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user-photo.png"
import {NavLink} from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={"/profile/" + props.user.id}>
            <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} className={styles.userPhoto} alt="photo"/>
          </NavLink>
        </div>
        <div>
          {props.user.followed
            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                      onClick={() => {
                        props.unfollow(props.user.id)
                      }}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                      onClick={() => {
                        props.follow(props.user.id)
                      }}>Follow</button>}
        </div>
      </div>
      <div>
        <div>
          <span>{props.user.name}</span>
          <span>{props.user.status}</span>
        </div>
      </div>
    </div>
  )
}

export default User;