import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class showHashs extends Component {
    constructor() {
        super();

    }

    componentDidMount(){
        this.props.get_photos();
    }

    render() {
        return(
            <div>
                <h1>SHOW HASHS</h1>
            </div>
        )
    }
}

export default connect(null, actions)(showHashs);