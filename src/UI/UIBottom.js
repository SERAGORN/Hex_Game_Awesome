import React, { Component } from 'react';

import './UIBottom.css'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer class UIBottom extends Component {

    renderTools = () => {
        return (
            <div className="UIBottom-person-tools">
                
            </div>
        )
    }

    renderPerson = () => {
        return (
            <div className="UIBottom-person">
                <div>{this.props.store.currentMove}</div>
            </div>
        )
    }


    otherPersons = () => {
        if (this.props.store.users) {
            return (
                <div className="UIBottom-other-persons">
                        {this.props.store.users.map(row => {
                            return  (
                            <div>
                                {row.name}
                            </div>
                            )
                        })}
                </div>
            )
        }
    }


    render() {
        return (
            <div className="UIBottom-container">
                {this.renderTools()}
                {this.renderPerson()}
                {/* {this.otherPersons()} */}
            </div>
        );
    }
}

export default UIBottom;
