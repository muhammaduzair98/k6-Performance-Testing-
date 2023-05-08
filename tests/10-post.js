//POST JSON Body to the Rest API
// API is https://run.mocky.io/v3/6117a36f-b3cf-4277-9679-d9374b494ded
// It accepts Email & Password
// Return 200


import http from 'k6/http'

export default function () {
    var url = 'https://run.mocky.io/v3/6117a36f-b3cf-4277-9679-d9374b494ded'

    var param = {
        headers : {
            'Content-Type':'application/json'
        }
    }

    var payload = JSON.stringify({
        email: "uzair@unlayer.com",
        password: "abcde"
    })

    let response = http.post(url,param, payload)
    console.log(response);
}