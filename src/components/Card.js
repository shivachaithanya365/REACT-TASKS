import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
        const { title, image, price, description, category, rating, ratingCount } = this.props;
        const percentage = (rating / Card.maxCount) * 100;

        const styles = {
            border: '2px solid black',
            borderRadius: '30px',
            boxShadow: '3px 5px 10px rgba(0, 0, 0, 1)',
            width: '29%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'flexStart',
            alignItems: "center",
            flexDirection: 'column',
            padding: '15px',
            marginTop: '10px'
        };

        const imgStyles = { width: "150px", height: "auto", margin: '10px' };

        return (
            <div style={styles}>
                <img alt={`${title} pic`} src={image} style={imgStyles} />
                <p><b>Title : </b>{title}</p>
                <p><b>Price : </b>{price}</p>
                <p><b>Category : </b>{category}</p>
                <p><b>Description : </b>{description}</p>
                <p><b>Rating : </b> {rating} ({ratingCount} reviews)</p>
                <ProgressBar animated now={percentage} style={{ width: '100%' }} />
            </div>
        );
    }
}
