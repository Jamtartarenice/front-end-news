import { useState } from "react";

const Loading = (children) => {
    const loading = children.children.props.children.length

    if(loading === 0) 
    return <p>Loading...</p>
    else
    return children.children.props.children
};

export default Loading;