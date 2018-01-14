
import * as React from 'react';
import ReactHighcharts from 'react-highcharts';
import { getDates, getValues } from '../data';

class HighchartsChart extends React.Component {
  render() {
    function getData() {

      const dates = getDates();
      const values = getValues();
      const data = [];
      for (let i = 0; i < dates.length; i++) {
        // tslint:disable-next-line:no-console
        console.log(dates[i]);
        data.push([dates[i].getTime(), values[i]]);
      }
      // tslint:disable-next-line:no-console
      console.log(data);
      return data;
    }

    var config = {
      chart: {
        zoomType: 'x'
      },
      rangeSelector: {
        selected: 1
      },
      xAxis: {
        type: 'datetime'
      },
      title: {
        text: 'AAPL Stock Price'
      },
      series: [
        {
          name: 'A',
          data: getData(),
          tooltip: {
            valueDecimals: 2
          }
        }, {
          name: 'B',
          data: getData(),
          tooltip: {
            valueDecimals: 2
          }
        }, {
          name: 'C',
          data: getData(),
          tooltip: {
            valueDecimals: 2
          }
        }, {
          name: 'D',
          data: getData(),
          tooltip: {
            valueDecimals: 2
          }
        },
        {
          name: 'E',
          data: getData(),
          tooltip: {
            valueDecimals: 2
          }
        }
      ]
    };

    return (
      <div>
        <ReactHighcharts
          config={config}
        />
      </div>
    );
  }

}

export default HighchartsChart;
