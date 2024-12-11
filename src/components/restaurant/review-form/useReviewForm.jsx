import { useEffect, useReducer } from "react";

const MIN_RATING = 0;
const MAX_RATING = 5;

const DEFAULT_REVIEW = {
  text: '',
  rating: 0,
};

const SET_NAME = "SET_NAME";
const SET_TEXT = "SET_TEXT";
const SET_RATING = "SET_RATING";
const RESET_FORM = "RESET_FORM";

const reviewReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME: return {...state, name: payload};
    case SET_TEXT: return {...state, text: payload};
    case SET_RATING: return {...state, rating: payload};
    case RESET_FORM: return DEFAULT_REVIEW;
    default: return state;
  }
}

export const useReviewForm = (value) => {
  const [state, dispatch] = useReducer(reviewReducer, {...DEFAULT_REVIEW});

  useEffect(() => {
    if (value) {
      setText(value.text);
      setRating(value.rating);
    }
  }, [value]);

  const setText = (text) => {
    dispatch({ type: SET_TEXT, payload: text });
  };
  const setRating = (rating) => {
    if (rating >= MIN_RATING && rating <= MAX_RATING) {
      dispatch({ type: SET_RATING, payload: rating });
    }
  };
  const resetForm = () => {
    dispatch({ type: RESET_FORM });
  }

  return {
    state,
    setText,
    setRating,
    resetForm,
  }
}