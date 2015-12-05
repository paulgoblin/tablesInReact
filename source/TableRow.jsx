import React from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TableRow';
  }
  render() {
    return (
      <tr>
        { Object.keys(this.props).map((key) => {
          return <td key={key}>{this.props[key]}</td>
        }) }
      </tr>
    )
  }
}

export default TableRow;

