import http from 'k6/http'
import {Rate} from 'k6/metrics'

//Declare Rate
const failureRate = new Rate('failed requests')

export let options = {
    thresholds:{
        //Define Requirements
        'failed requests': ['rate<0.1'],
        'http_req_duration': ['p(95)<200', 'p(99)<400']

        //These above are metric of k6
    }
};

export default function () {
    let res = http.get('https://run.mocky.io/v3/8f37ab6f-2587-45c0-a24f-589223448abe')

    //Apply Thresholds
    failureRate.add(res.status !== 200)
}