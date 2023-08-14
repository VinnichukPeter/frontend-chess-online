export class AuthorizationAPI {
    static signIn(username: string, password: string): Promise<boolean> {
        const url: string = "http://localhost:8080/api/auth/signin";
        const requestOptionIn: {} = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        };

        let result: Promise<boolean> = fetch(url, requestOptionIn).then((response) => {
            if (!response.ok) {
                throw new Error('Network response not ok');
            }

            return response.json();
        }).then(data => {
            if (!data.token) {
                throw new Error('token undefined');
            }

            sessionStorage.setItem('token', data.token);
            return true;
        }).catch((error) => {
            console.error(error.message);
            return false;
        })

        return result;
    }

    static signUp(username: string, password: string): Promise<boolean> {
        const url: string = "http://localhost:8080/api/auth/signup";
        const requestOptionUp: {} = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        };
        let result: Promise<boolean> = fetch(url, requestOptionUp).then((response) => {
            if (!response.ok) {
                throw new Error('Network response not ok');
            }

            return true;
        }).catch((error) => {
            console.error(error.message);
            return false;
        })

        return result;
    }
}