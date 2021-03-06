export const SearchSerialReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SHOWS":
      return {
        loading: true,
        data: [],
        error: "",
      };
    case "GET_SHOWS_SUCCESS":
      let data = action.payload;
      if (action.payload.length > 0 && action.payload[0].show) {
        data = action.payload.map((entry) => entry.show);
      }
      return {
        loading: false,
        data: data,
        error: "",
      };
    case "GET_SHOWS_FAILURE":
      return {
        loading: false,
        data: [],
        error: "error",
      };
    default:
      return state;
  }
};

export const ShowDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SHOW_DETAIL":
      return {
        loading: true,
        data: [],
        error: "",
      };
    case "GET_SHOW_DETAIL_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "GET_SHOW_DETAIL_FAILURE":
      return {
        loading: false,
        data: [],
        error: "error",
      };
    default:
      return state;
  }
};
