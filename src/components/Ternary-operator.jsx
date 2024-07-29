import React, { Component } from 'react';

class Ternary extends Component {

    render() {
        const Items = ['tomato', 'onion', 'chilli'];

        return (
            <div>
                <h1>Conditional List Rendering-Ternary operator</h1>

                {Items.length > 0 ? (
                    <ul>
                        {Items.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No items available.</p>
                )}
            </div>
        );
    }
}
export default Ternary;