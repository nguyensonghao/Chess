import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './containers/home';
import ListRoom from './containers/listRoom';
import Chess from './containers/chess';

import ButtonChess from './components/buttonChess';
import ChessLogicHelper from './helpers/chessLogic';

class App extends Component {

    constructor(props) {
        super(props)
        this.chessLogicHelper = new ChessLogicHelper();
        this.state = {
            socket: socketIOClient('http://localhost:3001')
        }   
    }

    componentDidMount() {
        // this.socket.on('getListRoom', (listRoom) => {
        //     this.setState({
        //         listRoom: listRoom
        //     })
        // })

        // this.socket.on('createMatch', (listGrid) => {
        //     this.setState({
        //         listGrid: listGrid
        //     })
        // })

        // this.socket.on('pressButton', (data) => {
        //     this.setState({
        //         listGrid: data.chessboard,
        //         status: 1,
        //         statusGame: data.statusGame
        //     })
        // })
    }

    pressButton = (id) => {
        if (this.state.statusGame != 'end') {
            this.socket.emit('pressButton', id);
        } else {
            console.log("Game end!");
        }
    }

    createRoom = () => {
        this.socket.emit('createRoom', null);
    }

    render() {
        // const { listGrid, listRoom } = this.state;
        // const list = [];

        // listGrid.map((items, index) => {
        //     items.map((item, index) => {
        //         list.push(<ButtonChess value={item.value} id={item.key} key={item.key} press={(id) => this.pressButton(id)} isWin={item.isWin} />);
        //     })
        // })

        const { socket } = this.state;

        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={(props) => <Home {...props} socket={socket} />} />
                        <Route 
                            exact 
                            path='/list-room'
                            render={(props) => <ListRoom {...props} socket={socket} />} />
                        <Route
                            exact
                            path='/chess/:roomId'
                            render={(props) => <Chess {...props} socket={socket} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
