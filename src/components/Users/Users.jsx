import React from "react";
import styles from "./Users.module.css"

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: false,  fullName: 'Alexey', status: 'I am a boss!', location: {city: 'Kiev', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/8tVV8AE9ZydHcHauEm3mh-VhTFai5gEdy_YOz9EHx2b4Rjdclu34u_xhC5x4B69L50-J5rah_4IBAk2KxIwaYwVEWE_K-6aYRjhvsHOfZu9GuFArx4k9_R2vbwi2Gs5GiYUtXJ40AjPI79-CaSZXw3Dz-0A' },
      { id: 2, followed: true, fullName: 'Ilona', status: 'I am a boss too!', location: {city: 'Poltava', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/QAqVGbdZuQ-lwh88NVJIrkcnEv2aVQD_UseQoXzoAmktD1Yv5PTRDgw4ESDcp1hE-uSqo4U70thKqLmONdU5Bwkp7s79093LL8yI83q0M3xy' },
      { id: 3, followed: false, fullName: 'Dmitriy', status: 'I am a boss too!', location: {city: 'Mykolaiv', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/8tVV8AE9ZydHcHauEm3mh-VhTFai5gEdy_YOz9EHx2b4Rjdclu34u_xhC5x4B69L50-J5rah_4IBAk2KxIwaYwVEWE_K-6aYRjhvsHOfZu9GuFArx4k9_R2vbwi2Gs5GiYUtXJ40AjPI79-CaSZXw3Dz-0A' },
      { id: 4, followed: true, fullName: 'Nata', status: 'I am a boss too!', location: {city: 'Odessa', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/QAqVGbdZuQ-lwh88NVJIrkcnEv2aVQD_UseQoXzoAmktD1Yv5PTRDgw4ESDcp1hE-uSqo4U70thKqLmONdU5Bwkp7s79093LL8yI83q0M3xy' }
    ])
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
            <div>
              <div>
                <img src={u.photoUrl} className={styles.userPhoto} alt="photo"/>
              </div>
              <div>
                { u.followed
                  ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                  : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
              </div>
            </div>
            <div>
              <div>
                <span>{u.fullName}</span>
                <span>{u.status}</span>
              </div>
              <div>
                <span>{u.location.country}</span>
                <span>{u.location.city}</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users;