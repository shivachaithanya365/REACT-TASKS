import React from 'react';

const Card = ({ name, logo, trophies }) => {
    const styles = {
        width: "400px",
        height: "350px",
        border: "2px solid black",
        borderRadius: "20px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
        textAlign: "center",
        margin: "auto",
        marginTop: "20px",
    };
    const imgStyles = { width: "200px", height: "200px" };

    return (
        <div style={styles}>
            <img
                alt={`${name} logo`}
                src={logo}
                style={imgStyles}
            />
            <h2>{name}</h2>
            <p>NO. OF TROPHIES: {trophies}</p>
        </div>
    );
};

export default Card;