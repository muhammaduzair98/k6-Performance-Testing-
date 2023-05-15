import http from "k6/http";
import { check, group, sleep } from "k6";

export default function () {
  let res = http.get(
    "https://run.mocky.io/v3/8f37ab6f-2587-45c0-a24f-589223448abe"
  );
}
