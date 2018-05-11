import React, { Component } from 'react'

export default class Chess extends Component {
	constructor(props) {
	  	super(props);
	  	this.roomId = this.props.match.params.roomId;
	}

	componentDidMount() {
		// Join room socket
	  	this.props.socket.emit('joinRoom', this.roomId);
	  	this.props.socket.on('createGame', (game) => {
	  		console.log(game);
	  	})
	}

    render() {
        return (
            <div className="chess-page">
                this is chess page
            </div>
        )
    }
}
