import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonChess from './components/buttonChess';
import ChessLogicHelper from './helpers/chessLogic';

class App extends Component {
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
        let listGrid = [];
        let index = 0;
        for (let i = 0; i < 600; i += 20) {
            let list = [];
            for (let j = 0; j < 600; j += 20) {
                list.push({
                    key: index,
                    value: '',
                    isWin: false
                });

                ++index;
            }
            
            listGrid.push(list);
        }   

        this.setState({
            listGrid: listGrid
        })
    }

    pressButton = (id) => {
        if (this.state.statusGame != 'end') {
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
                console.log("Win");
                check.listRow.map(row => {
                    list[row[0]][row[1]].isWin = true;
                }, list);
            } else {
                console.log("Not win");
            }

            this.setState({
                listGrid: list,
                status: status,
                statusGame: check.result ? 'end' : 'playing' 
            })
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
