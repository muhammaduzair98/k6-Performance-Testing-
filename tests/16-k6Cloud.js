import http from "k6/http";

import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";
export let errorRate = new Rate("errors");

export let options = {
  ext: {
    loadimpact: {
      projectID: 3641061,
      // Test runs with the same name groups test runs together
      name: "Learning k6 Cloud",
    },
  },

  vus: 10,
  duration: "2s",
  thresholds: {
    errors: ["rate<0.1"], //i.e 10% error
  },
};

export default function () {
  let response = http.get(
    "https://run.mocky.io/v3/59898ec5-d1e1-4539-b4d0-891988a87f74"
  );
  const check1 = check(response, {
    "is response status is 200 :": (r) => r.status === 200,
  });
  errorRate.add(!check1);

  let response1 = http.get(
    "https://run.mocky.io/v3/4715abe7-523a-4d56-8fb7-30ff56b09f3d"
  );
  const check2 = check(response, {
    "is response status is 200 :": (r) => r.status === 200,
  });
  errorRate.add(!check2);
}
