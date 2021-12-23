export const LOAD_FOO_STARTED = "LOAD_FOO_STARTED";
export const LOAD_FOO_SUCCESS = "LOAD_FOO_SUCCESS";
export const LOAD_FOO_FAILED = "LOAD_FOO_FAILED";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_FOO_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOAD_FOO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case LOAD_FOO_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
}
export default reducer;
