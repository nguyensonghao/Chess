import React, { Component } from 'react';

import './style.css';

export default class ButtonChess extends Component {
    pressButton = () => {
        if (!this.props.value) {
            this.props.press(this.props.id);
        }
    }

    render() {
        const { value, background, isWin } = this.props;
        const winStyle = {
            background: '#e64343',
            borderColor: '#e64343',
            color: 'white'
        }

        const style = isWin ? winStyle : {};

        return (
            <button className="button-chess" onClick={() => this.pressButton()} style={style}>
                {value}    
            </button>
        )
    }
}

ButtonChess.defaultProps = {
    isWin: false
};