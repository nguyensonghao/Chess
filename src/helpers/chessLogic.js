export default class ChessLogicHelper {
    checkWin = (id, list) => {
        let position = this.getIndexOfItem(id, list);
        let checkRow = this.checkWinRow(id, list, position);
        let checkCol = this.checkWinCol(id, list, position);
        let checkLeft = this.checkWinCrossLeft(id, list, position);
        let checkRight = this.checkWinCrossRight(id, list, position);
        if (checkRow.result) {
            return checkRow;
        } else if (checkCol.result) {
            return checkCol;
        } else if (checkLeft.result) {
            return checkLeft;
        } else if (checkRight.result) {
            return checkRight;
        } else {
            return {result: false};
        }
    }

    checkWinRow = (id, list, position) => {
        let data = list[position.i];
        return this.checkWinList(data);
    }

    checkWinCol = (id, list, position) => {
        let x = position.i;
        let y = position.j;
        let data = [];
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].length; j++) {
                if (j == y) {
                    data.push(list[i][j]);
                }
            }
        }

        return this.checkWinList(data);
    }

    checkWinCrossLeft = (id, list, position) => {
        let x = position.i;
        let y = position.j;
        let data = [];
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].length; j++) {
                if (j - i == y - x) {
                    try {
                        data.push(list[i][j]);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }

        return this.checkWinList(data);
    }

    checkWinCrossRight = (id, list, position) => {
        let x = position.i;
        let y = position.j;
        let data = [];
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].length; j++) {
                if (j + i == x + y) {
                    try {
                        data.push(list[i][j]);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }

        return this.checkWinList(data);
    }

    checkWinList = (list) => {
        if (list.length > 5) {
            for (let i = 0; i < list.length - 5; i++) {
                let listRow = [];
                let value = list[i].value;
                for (let j = i; j < i + 5; j++) {
                    if (list[j].value && list[j].value == value) {
                        listRow.push(list[j]);
                    }
                }

                if (listRow.length == 5) {
                    return {
                        result: true,
                        listRow: listRow
                    }
                }
            }

            return { result: false };
        } else {
            return {result: false};
        }
    }

    getIndexOfItem = (id, list) => {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].length; j++) {
                if (id == list[i][j].key) {
                    return {i: i, j: j};
                }
            }
        }

        return { i: 0, j: 0};
    }
}