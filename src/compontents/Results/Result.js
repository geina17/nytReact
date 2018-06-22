import React from "react";
import "./Results.css";

class Results extends React.Compontent{
    render(){
        return (
            <div className="list-overflow-container">
                <ul className="list-group">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default Results;