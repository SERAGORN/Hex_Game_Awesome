import React, { Component } from 'react';

import './UIBottom.css'


class UIBottom extends Component {

    renderTools = () => {
        return (
            <div className="UIBottom-person-tools">
                
            </div>
        )
    }

    renderPerson = () => {
        return (
            <div className="UIBottom-person">
                <div></div>
            </div>
        )
    }

    otherPersons = () => {
        return (
            <div className="UIBottom-other-persons">

            </div>
        )
    }


    render() {
        return (
            <div className="UIBottom-container">
                {this.renderTools()}
                {this.renderPerson()}
                {this.otherPersons()}
            </div>
        );
    }
}

export default UIBottom;
