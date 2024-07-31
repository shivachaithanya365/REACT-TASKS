import React, { Component } from "react";

export default class SquareAdder extends Component {
    state = {
        squares: []
    }
    addSquare = () => {
        this.setState({
            squares: [...this.state.squares, this.state.squares.length + 1]
        })
    }

    render() {
        return (
            <>
                <button className="square-adder-button" onClick={this.addSquare}>Add Squares</button>
                <div className="div">
                    {this.state.squares.map((square, index) => {
                        return <div key={index} className={(index + 1) % 2 === 0 ? "square-adder" : "square-adder2"}>
                            {index + 1}
                        </div>
                    })}
                </div>
            </>
        )
    }
};