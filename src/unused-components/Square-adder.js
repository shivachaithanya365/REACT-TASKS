import React, { Component } from "react";

export default class SquareAdder extends Component {
    state = {
        squares: [],
        colors: []
    }

    addSquare = () => {
        const newIndex = this.state.squares.length;
        const newColor = newIndex % 2 === 0 ? '#e2001a' : '#565bf3';

        this.setState({
            squares: [...this.state.squares, newIndex + 1],
            colors: [...this.state.colors, newColor]
        });
    }

    changeColor = (index) => {
        const newColors = [...this.state.colors];
        newColors[index] = newColors[index] === '#565bf3' ? '#e2001a' : '#565bf3';
        this.setState({
            colors: newColors
        });
    }

    render() {
        return (
            <>
                <h3 style={{ textAlign: 'center', margin: "20px" }}>Click on "Add Squares" to add a square and "click on square" to change colour</h3>
                <button className="square-adder-button"
                    onClick={this.addSquare}>
                    Add Squares
                </button>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '10px'
                    }}>
                    {this.state.squares.map((square, index) => (
                        <div
                            key={index}
                            onClick={() => this.changeColor(index)}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: this.state.colors[index]
                            }}
                            className={(index + 1) % 2 === 0 ? "square-adder" : "square-adder2"}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </>
        );
    }
}