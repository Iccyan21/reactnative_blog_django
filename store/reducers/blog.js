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
} from '../actions/types'

const initialState = {
  loading: false,
  blog: null,
  blog_detail: null,
}

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    // ブログ取得
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        blog: payload,
      }
    case GET_BLOG_FAIL:
      return {
        ...state,
      }

    // ブログ詳細取得
    case GET_BLOG_DETAIL_SUCCESS:
      return {
        ...state,
        blog_detail: payload,
      }
    case GET_BLOG_DETAIL_FAIL:
      return {
        ...state,
      }

    // 読み込み中
    case SET_BLOG_LOADING:
      return {
        ...state,
        loading: true,
      }
    case REMOVE_BLOG_LOADING:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}

export default blogReducer