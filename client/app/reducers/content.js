import * as actions from '../actions/types'

let initialState = {
  current: [],
  submitted: [],
  adminUsers: [],
  adminStories: [],
  page: 1,
  count: 0,
  error: null
}

export default function stories_reducer(state = initialState, action) {
  switch(action.type) {
    case actions.FETCH_STORIES:
      return {
        ...state,
        page: action.page,
        current: action.payload
      }
    case actions.GET_COUNT:
      return {
        ...state,
        count: action.count
      }
    case actions.STORY_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actions.GET_MY_STORIES:
      return {
        ...state,
        submitted: [...action.payload]
      }
    default:
      return state;
  }
}