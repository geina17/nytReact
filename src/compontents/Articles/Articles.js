import React from "react";
import "./Articles.css";

class Articles extends React.Component{
    render(){
        return(
            <div className="list-over-flow-container">
                <ul className="list-group">
                    {this.props.child}
                </ul>
            </div>

        );
    }
}

export default Articles;