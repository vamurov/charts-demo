
import * as React from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);
import { getDates, getValues } from '../data';

class PlotlyChart extends React.Component {
  render() {
    const dates = [...getDates()];

    var trace1 = {
      type: 'scatter',
      mode: 'lines+markers',
      name: 'AAPL High',
      x: dates,
      y: [...getValues()],
      line: { color: '#17BECF' },
      marker: { size: 5 }
    };

    var trace2 = {
      type: 'scatter',
      mode: 'lines',
      name: 'AAPL Low',
      x: dates,
      y: [...getValues()],
      line: { color: '#7F7F7F' }
    };

    var trace3 = {
      type: 'scatter',
      mode: 'lines',
      name: 'AAPL Avg',
      x: dates,
      y: [...getValues()],
      line: { color: 'pink' }
    };
    var trace4 = {
      type: 'scatter',
      mode: 'lines',
      name: 'XYZ',
      x: dates,
      y: [...getValues()],
      line: { color: 'black' }
    };
    var trace5 = {
      type: 'scatter',
      mode: 'lines',
      name: 'ABC Avg',
      x: dates,
      y: [...getValues()],
      line: { color: 'magenta' }
    };

    var data = [trace1, trace2, trace3, trace4, trace5];

    var layout = {
      title: 'Basic Time Series',
      showlegend: true,
      autosize: true,
      // yaxis: {
      //   fixedrange: true
      // },
      // xaxis: {
      //   fixedrange: true
      // }
    };

    let config = {
      showLink: false,
      displayModeBar: true,
      scrollZoom: true,
    };

    return (
      <PlotlyComponent
        className="whatever"
        data={data}
        layout={layout}
        config={config}
      />
    );
  }

}

export default PlotlyChart;
