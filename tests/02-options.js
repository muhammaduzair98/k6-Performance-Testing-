import http from 'k6/http'

import { check, group, sleep } from 'k6';

//Declaring Configuration
export let options = {
    vus : 10,
    duration: '10s' 
};

export default function() {
http.get('https://unlayer.com/');
};

