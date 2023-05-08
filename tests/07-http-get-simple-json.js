// HTTP API IS: https://run.mocky.io/v3/8f37ab6f-2587-45c0-a24f-589223448abe
// HTTP Header application.json

import http from 'k6/http'
import {check} from 'k6'

export default function(){
    var url = 'https://run.mocky.io/v3/8f37ab6f-2587-45c0-a24f-589223448abe'

    var headerParam = {
        headers: {
            'Content-Type':'appkication/json',
        }
    }
    const response = http.get(url, headerParam)
    
        check(response, {
            'is status code 200': (r) => r.status === 200
        });

        let body = JSON.parse(response.body)
        console.log(`response body is ${JSON.stringify(body)}`)
        console.log(`message is ${body.Message}`)

        //lets check this message inside check()

            check(response, {
                'is Message is success': (r) => JSON.parse(r.body).Message== "Data Fetched Successfully",
            });

            //This how we can Parse JSON Body and check()
}