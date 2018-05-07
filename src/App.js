import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonChess from './components/buttonChess';
import ChessLogicHelper from './helpers/chessLogic';
import socketIOClient from 'socket.io-client';

class App extends Component {
    socket = socketIOClient('http://localhost:3001');

    constructor(props) {
        super(props)
        this.chessLogicHelper = new ChessLogicHelper();
        this.state = {
            statusGame: 'start',
            status: 'o',
            listGrid: []
        }   
    }

    componentDidMount() {
        this.socket.on('createMatch', (listGrid) => {
            this.setState({
                listGrid: listGrid
            })
        })

        this.socket.on('pressButton', (id) => {
            let list = this.state.listGrid;
            let status = this.state.status == 'x' ? 'o' : 'x';
            list.map(items => {
                items.map(item => {
                    if (item.key == id) {
                        item.value = status;
                    }
                })
            })

            let check = this.chessLogicHelper.checkWin(id, list);
            if (check.result) {
                let listRow = check.listRow;
                listRow.map(row => {
                    list.map(items => {
                        items.map(item => {
                            if (item.key == row.key) {
                                item.isWin = true;
                            }
                        })
                    })
                })
                console.log("Win");
            } else {
                console.log("Not win");
            }

            this.setState({
                listGrid: list,
                status: status,
                statusGame: check.result ? 'end' : 'playing'
            })
        })
    }

    pressButton = (id) => {
        if (this.state.statusGame != 'end') {
            this.socket.emit('pressButton', id);
        } else {
            console.log("Game end!");
        }
    }

    render() {
        const { listGrid } = this.state;
        const list = [];

        listGrid.map((items, index) => {
            items.map((item, index) => {
                list.push(<ButtonChess value={item.value} id={item.key} key={item.key} press={(id) => this.pressButton(id)} isWin={item.isWin} />);
            })
        })

        return (
            <div className="App">
                <div className="content">
                    {list}
                </div>
            </div>
        );
    }
}

export default App;
