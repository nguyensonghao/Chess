import React, { Component } from 'react';

import './style.css';
import Room from '../room';

export default class ListRoom extends Component {
    render() {
        const { listRoom } = this.props;

        const list = [];
        listRoom.map((item, index) => {
            list.push(<Room room={item} key={index}/>)
        })

        return (
            <div className="list-room">
                <button className="btn-create-room" onClick={() => this.props.createRoom()}>Tạo phòng</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
