
import * as React from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
import { getDates, getValues } from '../data';

const PlotlyComponent = createPlotlyComponent(Plotly);
class PlotlyDraggableChart extends React.Component {
  // tslint:disable-next-line:no-any
  data: any;
  render() {
    const dates = [...getDates()];
    const values = [...getValues()];

    var trace1 = {
      type: 'scatter',
      mode: 'lines',
      name: 'AAPL High',
      x: dates,
      y: values,
      line: { color: '#17BECF' },
    };

    var trace5 = {
      x: dates,
      y: values,
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

    this.data = [trace1, trace5];
    let data = this.data;

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
    // tslint:disable-next-line:no-any
    var figurecontainer = document.getElementById('figurecontainer') as any;
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

    function clamp(x: number, lower: number, upper: number) {
      return Math.max(lower, Math.min(x, upper));
    }

    let that = this;
    // tslint:disable-next-line:no-any
    drag.on('drag', function (t: any) {
      // tslint:disable-next-line:no-console
      // console.log('drag');
      var xmouse = d3.event.x, ymouse = d3.event.y;
      // tslint:disable-next-line:no-console
      // console.log(`mouse: ${xmouse}-${ymouse}`);
      // d3.select(this).attr('transform', 'translate(' + [xmouse, ymouse] + ')');
      // var xaxis = figurecontainer._fullLayout.xaxis;
      var yaxis = figurecontainer!._fullLayout!.yaxis;
      // var handle = this.handle;
      // // if (handle.type != 'endpoint') handle.x = clamp(xaxis.p2l(xmouse), xaxis.range[0], xaxis.range[1] - 1e-9);
      // if (handle.type === 'spawn' && handle.x > handles[1].x) {
      //   handle.type = 'normal';
      // }
      const y = clamp(yaxis.p2l(ymouse), yaxis.range[0], yaxis.range[1]);
      // // if (handle.x < firstx) {    // release from the interpolation if dragged beyond the leftmost breakpoint
      // //     handle.type = 'spawn';
      // //     trash.style.fill = "#a00";
      // // }
      // updateFigure();
      // tslint:disable-next-line:no-console
      // tslint:disable-next-line:no-console

      // tslint:disable-next-line:no-console
      console.log(t);

      const newY = [...that.data[0].y];
      newY[1] = y;

      // tslint:disable-next-line:no-console
      console.log(newY[1]);

      Plotly.restyle(
        figurecontainer,
        {
          'x': [that.data[0].x, that.data[0].x],
          'y': [that.data[0].y, newY]
        });

      that.data[0].y = newY;
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
