import React from 'react';

class HelloWorld extends React.Component {
    constructor() {
        super(props)
        this.state = {
            who: 'World'
        }
    }

    handleButtonClick = () => {

    }

    render() {
        return(
            <div>
                <p>Hello, {this.props.who}</p>
                <button onClick={() => this.handleButtonClick}>

                </button>
                <button onClick={() => this.handleButtonClick}>

                </button>
                <button onClick={() => this.handleButtonClick}>

                </button>
            </div>
        )
    }
}

export default HelloWorld