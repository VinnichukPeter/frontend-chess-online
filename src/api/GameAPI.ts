import lapDTO from "./dto/LapDTO";

export class GameAPI {
    static queue(): Promise<boolean> {
        const url: string = "http://localhost:8080/game/queue";
        const requestOptionTurn: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            }
        };

        let result: Promise<boolean> = fetch(url, requestOptionTurn).then((response) => {
            if (!response.ok) {
                throw new Error('Start game not ok!')
            }

            return true;
        }).catch((error) => {
            console.error(error.message)
            return false;
        });

        return result;
    }

    static cancel(): Promise<boolean> {
        const url: string = "http://localhost:8080/game/cancel";
        const requestOptionCancel: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            }
        };

        let result: Promise<boolean> = fetch(url, requestOptionCancel).then((response) => {
            console.log("======");

            if (!response.ok) {
                throw new Error('Canceled game not ok!')
            }

            console.log("======");

            return true;
        }).catch((error) => {
            console.error(error.message)
            return false;
        });

        return result;
    }

    static check(): Promise<boolean> {
        const url: string = "http://localhost:8080/game/check";
        const requestOptionCheck: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            }
        };

        let result: Promise<boolean> = fetch(url, requestOptionCheck).then((response) => {
            if (!response.ok) {
                return false;
            }

            return response.json();
        }).then((lapId) => {
            return lapId;
        }).catch((error) => {
            console.error(error.message)
            return false;
        });

        return result;
    }

    static getLap(): Promise<boolean> {
        const url: string = "http://localhost:8080/game/lap";
        const requestOptionGetLap: {} = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            }
        };

        let result: Promise<boolean> = fetch(url, requestOptionGetLap).then((response) => {
            if (!response.ok) {
                throw new Error("Response not ok");
            }

            return response.json();
        }).then((lap) => {
            if (!lap) {
                throw new Error("Not found lap");
            }

            if (lap.chessPiecesColor == null || lap.enemyName == null) {
                throw new Error("Not actual date");
            }

            sessionStorage.setItem('color', lap.chessPiecesColor);
            sessionStorage.setItem('enemy', lap.enemyName);
            return true;
        }).catch((error) => {
            console.error(error.message)
            return false;
        });

        return result;
    }

    static setMove(lapDTO: lapDTO): Promise<boolean> {
        const url: string = "http://localhost:8080/game/play/makeMove"; //makeMove
        const requestOptionMakeMove: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            },
            body: JSON.stringify({
                chessPieceMoveDTO: lapDTO
            })
        };

        let result: Promise<boolean> = fetch(url, requestOptionMakeMove).then((response) => {
            if (!response.ok) {
                return false;
            }

            return response.json();
        }).then((result) => {
            return result;
        }).catch((error) => {
            console.error(error.message)
            return false;
        });

        return result;
    }

    static checkMove() {
        const url: string = "http://localhost:8080/game/play/checkMove";
        const requestOptionCheck: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            }
        };

        let result: Promise<boolean> = fetch(url, requestOptionCheck).then((response) => {
            if (!response.ok) {
                throw new Error("Response not ok");
            }

            return true;
        }).catch((error) => {
            console.error(error);
            return false;
        })

        return result;
    }

    static getMove() {
        const url: string = "http://localhost:8080/game/play/getMove";
        const requestOptionGetMove: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            }
        };

        let result = fetch(url, requestOptionGetMove).then((response) => {
            if (!response.ok) {
                throw new Error("Response not ok");
            }
            return response.json();
        }).then((data) => {
            if (data === null) {
                throw new Error("Data is null");
            }
            if (!data.moveFromX || !data.moveFromY || !data.moveToX || !data.moveToY) {
                throw new Error("Fields is null");
            }

            return new lapDTO(data.moveFromX, data.moveFromY, data.moveToX, data.moveToY);
        }).catch((error) => {
            console.error(error);

            return null;
        })

        return result;
    }
}