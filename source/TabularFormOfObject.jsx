import React from 'react';

import TableRow from './TableRow.jsx';

class TabularFormOfObject extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TabularFormOfObject';
  }
  render() {
    let columnTitles = Object.keys(this.props.dataArray[0]);
    return (
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              { columnTitles.map((title,i) => <th key={title+"title"}>{title}</th>) }
            </tr>
          </thead>
          <tbody>
            {
              this.props.dataArray.map( (rowEntry,i) => {
                rowEntry.key = i;
                return (
                  <TableRow {...rowEntry} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TabularFormOfObject;
