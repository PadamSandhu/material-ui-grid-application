import * as Types from './types';

export const fetchChartData = () => (dispatch) => {
  dispatch({
    type: Types.FETCH_CHART_DATA,
    payload: {
      sample: [12, 2, 3, 4, 5, 6],
    },
  });
};
