import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";

export let options = {
  vus: 10,
  duration: "10s",
  thresholds: {
    checks: ["rate>0.95"],
  },
};

export default function () {
  const response = http.get(
    "https://run.mocky.io/v3/8f37ab6f-2587-45c0-a24f-589223448abe"
  );

  check(response, {
    "is status code 200": (r) => r.status === 200,
  });
}
