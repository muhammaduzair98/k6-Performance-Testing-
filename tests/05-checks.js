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
http.get('https://run.mocky.io/v3/840ec3bd-67a2-4e4d-a898-32ff7f48700e');
};

