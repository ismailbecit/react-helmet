import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog Title</title>
                <meta name="description" content="Blog Description" />
            </Helmet>
            Blog
        </div>
    );
};

export default Blog;
