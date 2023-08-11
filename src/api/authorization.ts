export default function authorization(username: string, password: string) : boolean {
    const url: string = "http://localhost:8080/api/auth/test";
    const requestOption: {} = {
        method: 'Get',
        header: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({username: username, password: password})
    };

    fetch(url)
        .then(response => {
            //let result = response.json();

            console.log(response);
        })/*.catch(error => {
        console.log(error.name + "\n" + error.message + "\n" + error.subscribe);
        return false;
    })*/

    return false;
}