import * as React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';

export interface Global {
    // tslint:disable-next-line:no-any
    localStorage: any;
}

declare var global: Global;

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS('layouts') || {};

interface State {
    layouts: {};
}

export class Layout extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            layouts: JSON.parse(JSON.stringify(originalLayouts))
        };
    }

    static get defaultProps() {
        return {
            className: 'layout',
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
            rowHeight: 30
        };
    }

    resetLayout() {
        this.setState({ layouts: {} });
    }

    onLayoutChange(layout: {}, layouts: {}) {
        saveToLS('layouts', layouts);
        this.setState({ layouts });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.resetLayout()}>Reset Layout</button>
                <ResponsiveReactGridLayout
                    className="layout"
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={30}
                    layouts={this.state.layouts}
                    onLayoutChange={(layout, layouts) =>
                        this.onLayoutChange(layout, layouts)
                    }
                >
                    <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <span className="text">1</span>
                    </div>
                    <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
                        <span className="text">2</span>
                    </div>
                    <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
                        <span className="text">3</span>
                    </div>
                    <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
                        <span className="text">4</span>
                    </div>
                    <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }}>
                        <span className="text">5</span>
                    </div>
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

function getFromLS(key: string) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
}

function saveToLS(key: string, value: Object) {
    if (global.localStorage) {
        global.localStorage.setItem(
            'rgl-8',
            JSON.stringify({
                [key]: value
            })
        );
    }
}