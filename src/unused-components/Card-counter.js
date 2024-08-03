import React, { Component } from 'react';

export default class CardCounter extends Component {
    render() {
        const { onIncrementClick, onDecrementClick, onResetClick } = this.props;

        return (
            <div>
                <button onClick={onIncrementClick} className='button'>
                    +
                </button>
                <button onClick={onDecrementClick} className='button'>
                    -
                </button>
                <button onClick={onResetClick} className='reset-button'>
                    Reset
                </button>
            </div>
        );
    }
}
