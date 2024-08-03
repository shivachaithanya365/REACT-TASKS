import React, { Component } from 'react';

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '20px',
    gap: "20px"
};

const divStyle = {
    border: '2px solid black',
    width: '150px',
    height: '150px',
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
};

const addButtonStyle = {
    margin: '20px auto',
    display: 'block',
    textAlign: 'center'
};

export default class Square extends Component {
    state = {
        numbers: []
    };

    handleAddition = () => {
        const nextNumber = this.state.numbers.length + 1;
        this.setState({
            numbers: [...this.state.numbers, nextNumber]
        });
    };

    render() {
        return (
            <>
                <button style={addButtonStyle} onClick={this.handleAddition} className="square-adder-button">
                    Add Sq
                </button>

                <div style={containerStyle}>
                    {this.state.numbers.map((num, index) => (
                        <div key={index} style={divStyle}>
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: num % 2 === 0 ? 'blue' : 'red',
                                    opacity: 0.5
                                }}
                            ></div>
                            <h3>{num} is {num % 2 === 0 ? 'even' : 'odd'}</h3>
                        </div>
                    ))}
                </div>
            </>
        );
    }
};