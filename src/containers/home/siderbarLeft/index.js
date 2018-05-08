import React, { Component } from 'react'

export default class SiderbarLeft extends Component {
    createRoom = () => {
        this.props.createRoom();
    }

    render() {
        return (
            <div className="sidebar-left col-md-4">
                <button className="btn btn-primary btn-sm" onClick={() => this.createRoom()}>Tạo phòng</button>
            </div>
        )
    }
}
