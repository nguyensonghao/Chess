import React, { Component } from 'react'

export default class Room extends Component {
    render() {
        const { room } = this.props;

        return (
            <li className="list-group-item">
                {room.name}
            </li>
        )
    }
}
