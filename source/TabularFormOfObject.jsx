import React from 'react';
import TableRow from './TableRow.jsx';

class TabularFormOfObject extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TabularFormOfObject';
  }
  render() {
    let columnTitles = Object.keys(this.props.dataArray[0]);
    let headCells = columnTitles.map((title,i) => <th key={title+"title"}>{title}</th>);
    let tableRows = this.props.dataArray.map( (rowEntry,i) => {
          rowEntry.key = i;
          return <TableRow {...rowEntry} />
        })
    return (
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {headCells}
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TabularFormOfObject;
