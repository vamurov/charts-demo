import * as React from 'react';
import { Button } from 'react-bootstrap';
export class EasyInput extends React.Component {
    render() {

        return (
            <div style={{ width: '100px' }}>
                <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-btn">
                        <Button
                            type="button"
                            bsSize="xsmall"
                            className="btn btn-danger btn-number"
                        >
                            <span className="glyphicon glyphicon-minus" />
                        </Button>
                    </span>
                    <input
                        type="text"
                        className="form-control input-number"
                        onChange={() => { /* dd */ }}
                        style={{ height: '22px' }}
                    />
                    <span className="input-group-btn">
                        <Button
                            type="button"
                            bsSize="xsmall"
                            className="btn btn-success btn-number"
                        >
                            <span className="glyphicon glyphicon-plus" />
                        </Button>
                    </span>
                </div >
            </div>);
    }

}
