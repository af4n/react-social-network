const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    { id: 1, followed: false,  fullName: 'Alexey', status: 'I am a boss!', location: {city: 'Kiev', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/8tVV8AE9ZydHcHauEm3mh-VhTFai5gEdy_YOz9EHx2b4Rjdclu34u_xhC5x4B69L50-J5rah_4IBAk2KxIwaYwVEWE_K-6aYRjhvsHOfZu9GuFArx4k9_R2vbwi2Gs5GiYUtXJ40AjPI79-CaSZXw3Dz-0A' },
    { id: 2, followed: true, fullName: 'Ilona', status: 'I am a boss too!', location: {city: 'Poltava', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/QAqVGbdZuQ-lwh88NVJIrkcnEv2aVQD_UseQoXzoAmktD1Yv5PTRDgw4ESDcp1hE-uSqo4U70thKqLmONdU5Bwkp7s79093LL8yI83q0M3xy' },
    { id: 3, followed: false, fullName: 'Dmitriy', status: 'I am a boss too!', location: {city: 'Mykolaiv', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/8tVV8AE9ZydHcHauEm3mh-VhTFai5gEdy_YOz9EHx2b4Rjdclu34u_xhC5x4B69L50-J5rah_4IBAk2KxIwaYwVEWE_K-6aYRjhvsHOfZu9GuFArx4k9_R2vbwi2Gs5GiYUtXJ40AjPI79-CaSZXw3Dz-0A' },
    { id: 4, followed: true, fullName: 'Nata', status: 'I am a boss too!', location: {city: 'Odessa', country: 'Ukraine'},
        photoUrl: 'https://lh3.googleusercontent.com/proxy/QAqVGbdZuQ-lwh88NVJIrkcnEv2aVQD_UseQoXzoAmktD1Yv5PTRDgw4ESDcp1hE-uSqo4U70thKqLmONdU5Bwkp7s79093LL8yI83q0M3xy' }
  ]
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})


export default usersReducer;