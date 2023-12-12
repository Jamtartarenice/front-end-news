import { useState } from "react";

const Loading = ({children}) => {
    const loading = children.length

    if(loading === 0) 
    return <p>Loading...</p>
    else
    return children
};

export default Loading;