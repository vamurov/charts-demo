import * as React from 'react';
import * as ReactDataGrid from 'react-data-grid';
import FlipMove from 'react-flip-move';

interface State {
    // tslint:disable-next-line:no-any
    rows: any;
}
export class Excel extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            rows: [
                { date: new Date(2018, 0, 5).toDateString(), theta: 5 },
                { date: new Date(2018, 0, 2).toDateString(), theta: 10 },
                { date: new Date(2018, 0, 1).toDateString(), theta: 7 }
            ]
        };
    }

    rowGetter = (i: number) => {
        return this.state.rows[i];
    }

    // tslint:disable-next-line:no-any
    handleGridRowsUpdated = ({ fromRow, toRow, updated }: any) => {
        let rows = this.state.rows.slice();

        for (let i = fromRow; i <= toRow; i++) {
            let rowToUpdate = rows[i];
            let updatedRow = Object.assign(rowToUpdate, !!updated.date ? { date: new Date().toDateString() } : updated);
            rows[i] = updatedRow;
        }

        this.setState({ rows });
        // tslint:disable-next-line:no-any
        const comparer = (a: any, b: any) => {
            return (a.date > b.date) ? 1 : -1;
        };

        const rows2 = this.state.rows.sort(comparer);

        this.setState({ rows: rows2 });
    }

    handleGridSort = (sortColumn: string, sortDirection: string) => {
        // tslint:disable-next-line:no-any

    }
    render() {
        const columns = [
            {
                key: 'date',
                name: 'theta',
                width: 200,
                editable: true,
                sortable: true
            },
            {
                key: 'theta',
                name: 'Theta',
                editable: true
            }];

        return (

            <div>
                <FlipMove duration={750} easing="ease-out">
                    <ReactDataGrid
                        enableCellSelect={true}
                        columns={columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this.state.rows.length}
                        minHeight={500}
                        onGridRowsUpdated={this.handleGridRowsUpdated}
                        onGridSort={this.handleGridSort}
                        cellNavigationMode="changeRow"
                    />
                </FlipMove>
            </div>);
    }

}
