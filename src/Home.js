import React from "react";
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <div style={{margin: "10px"}}>
                    <Link to="/comp-one">Component One</Link>
                </div>
                <div style={{margin: "10px"}}>
                    <Link to="/comp-two">Component Two</Link>
                </div>
            </div>
        )
    }

}