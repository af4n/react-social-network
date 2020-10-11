import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user-photo.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                  ? <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "74a5532c-9406-4acb-a75c-f9f31ea020a6"
                      }
                    })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                      })
                  }}>Unfollow</button>
                  : <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "74a5532c-9406-4acb-a75c-f9f31ea020a6"
                      }
                    })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      })
                  }}>Follow</button>}
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