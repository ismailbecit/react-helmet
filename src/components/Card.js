import React from "react";
import { Helmet } from "react-helmet";

const Card = () => {
    return (
        <div>
            <Helmet>
                <title>Card Title</title>
                <meta name="description" content="Card Description" />
            </Helmet>
            Card
        </div>
    );
};

export default Card;
