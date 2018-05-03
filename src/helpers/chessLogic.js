export default class ChessLogicHelper {
    checkWin = (id, list) => {
        return this.checkWinRow(id, list);
    }

    checkWinRow = (id, list) => {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].length; j++) {
                if (list[i][j].key == id) {
                    let start = j - 4 < 0 ? 0 : j - 4;
                    let end = j + 4 >= list[i].length ? list[i].length - 1 : j + 4;
                    for (let k = start; k < end - 5; k++) {
                        let value = list[i][k].value;
                        let listRow = [];
                        for (let m = k; m < k + 5; m++) {
                            if (list[i][m].value && list[i][m].value != value) {
                                return { result: false };
                            } else {
                                listRow.push([i, m]);
                            }
                        }

                        return {
                            result: true,
                            listRow: listRow
                        };
                    }
                }
            }
        }

        return { result: false };
    }

    checkWinCol = (id, list) => {

    }

    checkWinCrossLeft = (id, list) => {

    }

    checkWinCrossRight = (id, list) => {
        
    }
}