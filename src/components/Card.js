
import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardCounter from './Card-counter';

export default class Card extends Component {

    static maxCount = 20;

    state = {
        count: 0
    };

    handleIncrementClick = () => {
        if (this.state.count < Card.maxCount) {
            this.setState({
                count: this.state.count + 1
            });
        }
    };

    handleDecrementClick = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
    };

    handleResetClick = () => {
        this.setState({
            count: 0
        });
    };


    render() {
        const { name, logo, trophies, seasons } = this.props;
        const { count } = this.state;
        const percentage = (count / Card.maxCount) * 100;

        const styles = {
            width: "23%",
            height: "auto",
            border: "2px solid black",
            borderRadius: "20px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
            textAlign: "center",
            margin: "auto",
            marginTop: "20px",
        };

        const imgStyles = { width: "50%", height: "auto" };

        return (
            <div style={styles}>
                <img alt={`${name} logo`} src={logo} style={imgStyles} />
                <h4>{name}</h4>
                <p>NO. OF TROPHIES: {trophies}/{seasons}</p>
                <ProgressBar animated now={percentage} />
                <CardCounter
                    count={count}
                    onIncrementClick={this.handleIncrementClick}
                    onDecrementClick={this.handleDecrementClick}
                    onResetClick={this.handleResetClick}
                />
            </div>
        );
    }
}
