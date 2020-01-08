import React, {Component} from 'react';

class HelloWorld extends Component {
    state = {
        who: 'World',
    };

    render() {
        return(
            <div className="HelloWorld">
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.setState({who: 'world'})}>

                </button>
                <button onClick={() => this.setState({who: 'friend'})}>

                </button>
                <button onClick={() => this.setState({who: 'React'})}>

                </button>
            </div>
        )
    }
}

export default HelloWorld