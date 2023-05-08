import  http  from "k6/http";

export default function () {
    let response = http.get('https://run.mocky.io/v3/d87bf208-c016-4767-9b10-c554f327486c')

    let body = JSON.parse(response.body)
    body.forEach(element => {
        console.log(`color is ${element.value}`)
    });
}