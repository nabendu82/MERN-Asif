import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, children } = this.props;

        return (
            <>
                <h4>Welcome to {name}</h4>
                <p>{children}</p>
            </>
        )
    }
}

export default Welcome
