import * as Types from '../actions/types';

const initialChartState = {
  chartData: {},
  error: {
    data: null,
    state: false,
  },
  fetched: false,
  fetching: false,
};

export const chartData = (state = { ...initialChartState }, action) => {
  switch (action.type) {
    case Types.FETCH_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
      };
    case Types.FETCHING_CHART_DATA:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCHED_CHART_DATA:
      return {
        ...state,
        fetched: true,
        fetching: false,
      };
    case Types.ERROR_CHART_DATA:
      return {
        ...state,
        fetched: true,
        fetching: false,
        error: {
          data: action.payload,
          state: true,
        },
      };
    default:
      return state;
  }
};
