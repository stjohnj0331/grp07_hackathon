export function getEmployee(url){
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch(url, myInit);
    return promise.then((response) => {
        console.log(response);
        return response.json();
    });
}

export function getAllEmployee(url){
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch(url, myInit);
    return promise.then((response) => {
        console.log(response);
        return response.json();
    });
}