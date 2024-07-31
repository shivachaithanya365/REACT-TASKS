import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: 0,
        reset: 0
    }

    handleClickIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    handleClickDecrement = () => {
        if (this.state.count > 0)
            this.setState({
                count: this.state.count - 1
            })
    };

    handleClickReset = () => {
        this.setState({
            count: this.state.reset
        })
    };

    render() {
        return (
            <div style={{ textAlign: 'center', margin: '30px', border: '5px solid red' }}>
                <h3>click on count to increase count & click reset for resetting count value</h3>
                <button className='counter'>Count : {this.state.count}</button>
                <button onClick={this.handleClickIncrement} className='counter' >+</button>
                <button onClick={this.handleClickDecrement} className='counter' >-</button>
                <button onClick={this.handleClickReset} className='counter'>Reset</button>
            </div>
        )
    }
};