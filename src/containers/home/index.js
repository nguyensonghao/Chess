import React, { Component } from 'react';

import Room from './room';
import EmptyAlert from './emptyAlert';
import SiderbarLeft from './siderbarLeft';
import './style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRoom: []
        }   
    }

    componentDidMount() {
        this.props.socket.on('getListRoom', (listRoom) => {
            this.setState({
                listRoom: listRoom
            })
        })    

    }

    createRoom = () => {
        console.log('test');
        this.props.socket.emit('createRoom', 'Phòng 1');
    }
    
    render() {
        const { listRoom } = this.state;
        const list = [];
        listRoom.map((room, index) => {
            list.push(<Room room={room} key={index}/>)
        })

        return (
            <div className="home-page col-md-8 col-md-offset-2">
                <SiderbarLeft createRoom={() => this.createRoom()}/>
                <div className="list-room col-md-8">
                    <ul className="list-group">
                        <li className="list-group-item list-title">Danh sách phòng</li>
                        {listRoom.length ? list : <EmptyAlert/>}
                    </ul>
                </div>
            </div>
        )
    }
}
