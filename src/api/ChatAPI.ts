import messageDTO from "./dto/MessageDTO";

class ChatAPI {
    static getMessages() {
        const url: string = "http://localhost:8080/game/play/getMove";
        const requestOptionGetMove: {} = {
            method: 'GET',
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
            let messages: messageDTO[] = [];
            console.log(data);
            if (data === null) {
                throw new Error("Data is null");
            }

            messages.push(new messageDTO("tetst", true));
            messages.push(new messageDTO("tetst", true));
            messages.push(new messageDTO("tetst", true));

            return messages;
        }).catch((error) => {
            console.error(error);

            return null;
        })

        return result;
    }

    static sendMessage(message: string): Promise<boolean> {
        const url: string = "http://localhost:8080/game/play/makeMove"; //makeMove
        const requestOptionMessage: {} = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            },
            body: JSON.stringify({
                text: message
            })
        };

        let result: Promise<boolean> = fetch(url, requestOptionMessage).then((response) => {
            if (!response.ok) {
                throw new Error("Response not ok");
            }

            return true;
        }).catch((error) => {
            console.error(error.message)
            return false;
        });

        return result;
    }

}

export default ChatAPI;