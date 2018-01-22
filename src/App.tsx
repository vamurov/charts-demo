import HighchartsChart from './charts/highcharts-chart';
import PlotlyChart from './charts/plotly-chart';
import PlottyDraggableChart from './charts/plotly-draggable-chart';
import { EasyInput } from './easy-input.component';

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" component={PlotlyChart} />
            <Route path="/plotly" component={PlotlyChart} />
            <Route path="/plotlydraggable" component={PlottyDraggableChart} />
            <Route path="/highcharts" component={HighchartsChart} />
            <Route path="/input" component={EasyInput} />

          </Switch>
        </div>

      </BrowserRouter>
    );
  }

}

export default App;
