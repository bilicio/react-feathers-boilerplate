import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class moderateHashs extends Component {
    constructor() {
        super();

    }

    componentDidMount(){
        this.props.get_photos();
    }

    render() {
        return(
            <div>
                <h1>MODERATE HASHS</h1>
            </div>
        )
    }
}

export default connect(null, actions)(moderateHashs);