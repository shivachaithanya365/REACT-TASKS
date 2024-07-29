import React, { Component } from 'react';

class ShortCircuit extends Component {

    render() {
        const Items = ['tomato', 'onion', 'chilli'];

        return (
            <div>
                <h1>Conditional List Rendering-Logical AND(&&)/short-circuit operator</h1>

                {Items.length > 0 && (
                    <ol>
                        {Items.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ol>
                )
                }
            </div>
        );
    }
}
export default ShortCircuit;