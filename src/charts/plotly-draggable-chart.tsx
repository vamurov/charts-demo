
import * as React from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
import { getDates, getValues } from '../data';

const PlotlyComponent = createPlotlyComponent(Plotly);
class PlotlyDraggableChart extends React.Component {
  render() {
    const dates = [...getDates()];

    var trace1 = {
      type: 'scatter',
      mode: 'lines+markers',
      name: 'AAPL High',
      x: dates,
      y: [...getValues()],
      line: { color: '#17BECF' },
      marker: {
        symbol: 'circle-open-dot',
        size: 25
      }
    };

    var trace5 = {
      x: dates,
      y: [...getValues()],
      type: 'scatter',
      cliponaxis: false,
      mode: 'markers',
      marker: {
        size: 20,
        symbol: 'circle-open-dot',
        color: '#b00',
        line: {
          width: 2
        }
      },
      hoverinfo: 'none'
    };

    var data = [trace1, trace5];

    var layout = {
      title: 'Plotly draggable points',
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
        id="figurecontainer"
        data={data}
        layout={layout}
        config={config}
      />
    );
  }

  componentDidMount() {
    var d3 = Plotly.d3;
    var drag = d3.behavior.drag();
    drag.origin(function () {
      var transform = d3.select(this).attr('transform');
      var translate = transform.substring(10, transform.length - 1).split(',');
      return { x: translate[0], y: translate[1] };
    });
    // tslint:disable-next-line:no-any
    drag.on('dragstart', function (this: any) {
      // tslint:disable-next-line:no-console
      console.log('dragstart');
      // if (this.handle.type !== 'spawn') {
      //   // destroyHandle(points[0].handle);
      // }
    });
    drag.on('drag', function () {
      // tslint:disable-next-line:no-console
      console.log('drag');
      var xmouse = d3.event.x, ymouse = d3.event.y;
      // tslint:disable-next-line:no-console
      console.log(`mouse: ${xmouse}-${ymouse}`);
      // d3.select(this).attr('transform', 'translate(' + [xmouse, ymouse] + ')');
      // var xaxis = figurecontainer._fullLayout.xaxis;
      // var yaxis = figurecontainer._fullLayout.yaxis;
      // var handle = this.handle;
      // // if (handle.type != 'endpoint') handle.x = clamp(xaxis.p2l(xmouse), xaxis.range[0], xaxis.range[1] - 1e-9);
      // if (handle.type === 'spawn' && handle.x > handles[1].x) {
      //   handle.type = 'normal';
      // }
      // handle.y = clamp(yaxis.p2l(ymouse), yaxis.range[0], yaxis.range[1]);
      // // if (handle.x < firstx) {    // release from the interpolation if dragged beyond the leftmost breakpoint
      // //     handle.type = 'spawn';
      // //     trash.style.fill = "#a00";
      // // }
      // updateFigure();
    });
    drag.on('dragend', function () {
      // tslint:disable-next-line:no-console
      console.log('dragend');
      // if (this.handle.x < firstx) { destroyHandle(this.handle); }
      // addHandle('spawn');
      // updateFigure();
      // updatePointHandles();
      // d3.select('.scatterlayer .trace:last-of-type .points path:last-of-type').call(drag);
    });
    d3.selectAll('.scatterlayer .trace:last-of-type .points path').call(drag);

  }

}

export default PlotlyDraggableChart;
