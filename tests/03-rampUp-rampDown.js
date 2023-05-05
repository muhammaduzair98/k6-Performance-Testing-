import http from 'k6/http'

import { check, group, sleep } from 'k6';

//Declaring Configuration
export let options = {
  stages:[
    {duration: '10s', target: '5'}, //5 vus for 10 sec
    {duration: '20s', target: '3'}, //again, 3 vus for 20 sec
  ]
};

//Entry Point
export default function() {
http.get('https://unlayer.com/');
};

