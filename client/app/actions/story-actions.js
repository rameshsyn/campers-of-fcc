/*
 * Imports
 */
import axios from 'axios'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'
import { errorHandler } from './utils'
import {
  GET_COUNT,
  STORY_ERROR,
  FETCH_STORIES,
  FETCH_STORY
} from './types'

/*
 * Handle Post
 */
export function addNewStory (data) {
  let user = cookie.load('user')
  data.postedBy = user._id
  return dispatch => {
    return axios.post('/api/content/', data)
      .then( (resp) => {
        browserHistory.push('/')
      })
      .catch( (err) => {
        errorHandler(dispatch, err, STORY_ERROR)
      })
  }
}

export function createStoryValidationError(error) {
  return {
    type: STORY_ERROR,
    payload: error
  }
}

/*
 * Handle Get
 */
export function getContent (page=1, limit=20, status='Approved') {
  return dispatch => {
    return axios.get(`/api/content/?page=${page}&limit=${limit}&status=${status}`)
      .then( res => {
        dispatch({
          type: FETCH_STORIES,
          page: page,
          payload: res.data.content
        })
      } )
      .catch( err => err )

  }
}

/**
 *
 */
 export function getStory(storyId) {
   return dispatch => {
     return axios.get(`/api/content/${storyId}`)
      .then(res => {
        dispatch({
          type: FETCH_STORY,
          payload: res.data.story
        })
      })
   }
 }

/*
 * Get the number of stories in the DB
 */
 export function getCount() {
   return dispatch => {
     return axios.get('/api/content/count')
          .then((res) => {
            dispatch({
              type: GET_COUNT,
              count: res.data.count
            })
          })
   }
 }
