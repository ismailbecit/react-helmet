import React from "react";
import { Helmet } from "react-helmet";

const User = () => {
    return (
        <div>
            <Helmet>
                <title>User Title</title>
                <meta name="description" content="User Description" />
            </Helmet>
            User
        </div>
    );
};

export default User;
