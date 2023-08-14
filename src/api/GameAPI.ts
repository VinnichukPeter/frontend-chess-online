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
        const url: string = "http://localhost:8080/game/cansel";
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
            },
            body: {}
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
    static getLap(){
        const url: string = "http://localhost:8080/game/create";
        const requestOptionGetLap: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            },
            body: {}
        };

        let result: Promise<LapDTO> = fetch(url, requestOptionGetLap).then((response) => {
            if (!response.ok) {
                return false;
            }

            return response.json();
        }).then((lap) => {
            if(lap){
                throw new Error("Not found lap");
            }

            return lap;
        }).catch((error) => {
            console.error(error.message)
            return null;
        });

        return result;
    }
    static setMove() {

    }

    static getMove() {

    }
}