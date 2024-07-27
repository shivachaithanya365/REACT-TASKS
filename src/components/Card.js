import React from 'react';
import CustomProgressBar from './ProgressBar'

const Card = ({ name, logo, trophies, seasons }) => {
    const styles = {
        width: "23%",
        height: "280px",
        border: "2px solid black",
        borderRadius: "20px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
        textAlign: "center",
        margin: "auto",
        marginTop: "20px",
    };
    const imgStyles = { width: "50%", height: "auto" };

    const percentage = (Number(trophies) / Number(seasons) * 100);

    return (
        <div style={styles}>
            <img
                alt={`${name} logo`}
                src={logo}
                style={imgStyles}
            />
            <h4>{name}</h4>
            <p>NO. OF TROPHIES: {trophies}/{seasons}</p>
            <CustomProgressBar scale={percentage} />
        </div>
    );
};

export default Card;