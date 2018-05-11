import React, { Component } from 'react'

export default class EmptyAlert extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                <strong>Thông báo!</strong> hiện tại đang không có phòng nào. Hãy tạo phòng mới để chơi!
            </div>
        )
    }
}
