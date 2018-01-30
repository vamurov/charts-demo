import HighchartsChart from './charts/highcharts-chart';
import PlotlyChart from './charts/plotly-chart';
import PlottyDraggableChart from './charts/plotly-draggable-chart';
import { EasyInput } from './easy-input.component';
import { Excel } from './excel.component';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './layout-component';

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
            <Route path="/excel" component={Excel} />
            <Route path="/layout" component={Layout} />

          </Switch>
        </div>

      </BrowserRouter>
    );
  }

}

export default App;
