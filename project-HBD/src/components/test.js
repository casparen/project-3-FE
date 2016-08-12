import React, {Component} from 'react'

class Test extends Component {
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
