import React from "react";
import Home from "./Home";

export default class ComponentTwo extends React.Component {
    render() {
        return (
            <div>
                <Home />
                <div>Component Two</div>
                <div>Component Two</div>
            </div>
        )
    }
}