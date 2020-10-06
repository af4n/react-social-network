const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    { id: 1, likesCount: 15, message: "Hi, how are yuo?" },
    { id: 2, likesCount: 21, message: "It's my first post!" },
    { id: 3, likesCount: 9, message: "Hello." }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 4, likesCount: 0, message: state.newPostText}],
        newPostText: ''
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;