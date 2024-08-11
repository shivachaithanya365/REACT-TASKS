import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class ResponsiveTable extends Component {
    render() {
        const { columns, data } = this.props;

        const styles = {
            textAlign: 'left',
            verticalAlign: 'top'
        };

        return (
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} style={{ backgroundColor: 'grey' }}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex} style={styles}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>
                                    {item[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default ResponsiveTable;