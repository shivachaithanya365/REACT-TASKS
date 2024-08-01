
import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import CardCounter from './Card-counter';

export default class Card extends Component {

    static maxCount = 5;

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
        const { title, image, price, description, category, rating } = this.props;
        // const { count } = this.state;
        const percentage = (rating / Card.maxCount) * 100;

        const styles = {
            width: "30%",
            height: "800px",
            border: "2px solid black",
            borderRadius: "20px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
            textAlign: "center",
            margin: "auto",
            marginTop: "20px",
        };

        const imgStyles = { width: "150px", height: "200px", margin: '10px' };

        return (
            <div style={styles}>
                <img alt={`${title} pic`} src={image} style={imgStyles} />
                <p><b>Title : </b>{title}</p>
                <p><b>Price : </b>{price}</p>
                <p><b>Category : </b>{category}</p>
                <p><b>Description : </b>{description}</p>
                <p><b>Rating : </b> {rating}</p>
                <ProgressBar animated now={percentage} />
                {/* <CardCounter
                    count={count}
                    onIncrementClick={this.handleIncrementClick}
                    onDecrementClick={this.handleDecrementClick}
                    onResetClick={this.handleResetClick}
                /> */}
            </div>
        );
    }
}
