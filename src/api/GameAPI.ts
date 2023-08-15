import LapDTO from "./dto/LapDTO";

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

    static cancel() {
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

    static start() {
        const url: string = "http://localhost:8080/game/check";
        const requestOptionStart: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            }
        };

        let result: Promise<boolean> = fetch(url, requestOptionStart).then((response) => {
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

    static getLap() {
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

    static setMove() {

    }

    static getMove() {

    }
}