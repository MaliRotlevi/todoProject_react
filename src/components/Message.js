
import React, { Component } from 'react';
class Message extends Component {

    render() {
        return (<div className='container'>
            <h1 >{this.props.message.text}</h1>
            <p>{this.props.message.level}</p>
        </div>);
    }
}

export default Message;