import React from 'react';
import { useLocation } from "react-router-dom";

const NewsDetail = () => {

    let location = useLocation();

    return ( <div>sonuç {JSON.stringify(location.state.news)} </div> );
}

export default NewsDetail;