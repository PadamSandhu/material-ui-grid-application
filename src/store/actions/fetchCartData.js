import axios from 'axios';
import * as Types from './types';

const fetching = () => (dispatch) => {
  dispatch({
    type: Types.FETCHING_CHART_DATA,
  });
};

const fetched = () => (dispatch) => {
  dispatch({
    type: Types.FETCHED_CHART_DATA,
  });
};

const error = (payload) => (dispatch) => {
  dispatch({
    type: Types.ERROR_CHART_DATA,
    payload,
  });
};

export const fetchChartData = () => async (dispatch) => {
  try {
    dispatch(fetching());
    const data = await axios.get(
      'https://api.jsonbin.io/b/5e976f462940c704e1d8c750'
    );
    dispatch({
      type: Types.FETCH_CHART_DATA,
      payload: data.data,
    });
    dispatch(fetched());
  } catch (data) {
    dispatch(error(data));
  }
};
