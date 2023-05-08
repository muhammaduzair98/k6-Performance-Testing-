import {Counter} from 'k6/metrics'

var retryCounter = new Counter('GetAPI_Max_retry')

import http from 'k6/http'
import {sleep} from 'k6'

export default function () {

    retryCounter.add(1)
    for(var retries =5; retries>0;retries--){

    const response = http.get('https://run.mocky.io/v3/8f37ab6f-2587-45c0-a24f-589223448abe');


    if (response.status !== 404){
        retryCounter.add(1)
        console.log(`response isn't correct, attempt is ${retries}`);
        sleep(1)
    }
    else{
            retries==0;
    }
}
    
}