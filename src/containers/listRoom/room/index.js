import React, { Component } from 'react';

import './style.css';

export default class Room extends Component {
	constructor(props) {
        super(props);
	}

	join = () => {
		if (this.props.room.listUser.length >= 2) {
			alert('Phòng đã đầy!');
		} else {
			this.props.goPage(this.props.room.id);
		}
	}

    render() {
        const { room } = this.props;

        return (
            <li className="list-group-item room">
                <b>{room.name}</b>
                <div className="gamer">
                	{room.listUser.length} người chơi
                </div>
                <button className="btn btn-danger btn-sm btn-join" onClick={() => this.join()}>Tham gia</button>
            </li>
        )
    }
}
