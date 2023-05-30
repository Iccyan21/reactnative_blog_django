import {
  // ブログ取得
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,

  // ブログ詳細取得
  GET_BLOG_DETAIL_SUCCESS,
  GET_BLOG_DETAIL_FAIL,

  // 読み込み中
  SET_BLOG_LOADING,
  REMOVE_BLOG_LOADING,
} from './types'

import { API_URL } from '../../config'

// ブログ取得
export const get_blog = () => async (dispatch) => {
  dispatch({
    type: SET_BLOG_LOADING,
  })

  try {
    const res = await fetch(`${API_URL}/api/blog/`, {
      method: 'GET',
    })

    const data = await res.json()

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_SUCCESS,
        payload: data,
      })
    } else {
      dispatch({
        type: GET_BLOG_FAIL,
      })
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_FAIL,
    })
  }

  dispatch({
    type: REMOVE_BLOG_LOADING,
  })
}

// ブログ詳細取得
export const get_blog_detail = (id) => async (dispatch) => {
  dispatch({
    type: SET_BLOG_LOADING,
  })

  try {
    const res = await fetch(`${API_URL}/api/blog/${id}/`, {
      method: 'GET',
    })

    const data = await res.json()

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_DETAIL_SUCCESS,
        payload: data,
      })
    } else {
      dispatch({
        type: GET_BLOG_DETAIL_FAIL,
      })
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_DETAIL_FAIL,
    })
  }

  dispatch({
    type: REMOVE_BLOG_LOADING,
  })
}