import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../resources/imgs/logo.png';

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="content">
                    <img className="logo" src={logo} alt="Logo" />
                    <div className="main-content">
                        <Link to="/list-room" className="btn btn-primary">Ngẫu nhiên</Link><br/>
                        <Link to="/list-room" className="btn btn-primary">Tạo phòng</Link><br/>
                        <Link to="/list-room" className="btn btn-primary">Danh sách phòng</Link>
                    </div>
                </div>
            </div>
        )
    }
}
