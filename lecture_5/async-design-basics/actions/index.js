// Action creators can have side-effects
let nextId = 1;

export const addComment = (author, text) => {
  return {
    type: "ADD_COMMENT",
    payload: { author: author, text: text, id: nextId++}
  }
}

export const setAuthor = (author) => {
  return {
    type: "SET_AUTHOR",
    payload: author
  }
}

export const setText = (text) => {
  return {
    type: "SET_TEXT",
    payload: text
  }
}

export const setAuthorFilter = (author) => {
  return {
    type: "SET_AUTHOR_FILTER",
    payload: author
  }
}

let timer;
export const fetchPost = () => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(addComment('Server', 'Said so'));
      dispatch(stopCommentFetch())
    }, 1000)
  }
}

export const commentFetchRequested = () => {
  return {
    type: "COMMENT_FETCH_REQUESTED",
    payload: {}
  }
}

export const stopCommentFetch = () => {
  clearTimeout(timer)
  return {
    type: "COMMENT_FETCH_STOPPED",
    payload: {}
  }
}
