import http from 'k6/http'

import { check, group, sleep } from 'k6';
import {rate} from 'k6/metrics'
export let errorRate = new Rate('errors')

export let options = {
thresholds :{
  errors: ['rate<0.1'] //i.e 10% error
}
};

export default function() {
  let response = http.get('https://run.mocky.io/v3/840ec3bd-67a2-4e4d-a898-32ff7f48700e')
  const check1 = check(response, {
    'is response status is 200 :' : (r) => r.status === 200,
  })
  errorRate.add(!check1);
};

  