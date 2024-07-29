import React, { Component } from 'react';

class Ifelse extends Component {
    render() {
        const Items = []; // You can change this to test with non-empty arrays

        if (Items.length > 0) {
            return (
                <>
                    <h1>Conditional List Rendering - If-else condition</h1>

                    <ul>
                        {Items.map((item, index) => (
                            <li key={index} >
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            );
        } else {
            return (
                <>
                    <h1>Conditional List Rendering - If-else condition</h1>
                    <h3 style={{ color: 'red' }}>No items available</h3>
                </>
            );
        }
    }
}

export default Ifelse;