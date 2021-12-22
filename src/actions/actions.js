import axios from "axios";

export const setCountries = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,11&appid=cd612f536b150f426748d4d015893383"
    );
    dispatch({
      type: "SET_COUNTRIES",
      payload: { counties: response.data.list },
    });
  };
};
