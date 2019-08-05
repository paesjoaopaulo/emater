import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Create />, document.getElementById('app'));
}
