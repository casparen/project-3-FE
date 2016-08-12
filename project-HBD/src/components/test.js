import React, {Component} from 'react'
import {Link} from 'react-router'


class Test extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            console.log("I am Test", ...this.props);
        return (
            <div>
            <h1>I am a test</h1>
            </div>
        )
    }
}
export default Test
