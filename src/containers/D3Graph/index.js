import React from 'react';
import { connect } from 'react-redux';
import { D3Graph } from './D3Graph';
import { fetchChartData } from '../../store/actions';

const D3GraphContainer = (props) => {
  return <D3Graph {...props} />;
};

const mapStateToProps = ({ chartData }) => ({
  chartData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchChartData: (incomingProps) => dispatch(fetchChartData(incomingProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(D3GraphContainer);
