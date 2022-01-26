const myurl = "https://api.sampleapis.com/coffee/hot";
const request = new XMLHttpRequest();
request.addEventListener("load", test);
request.open("GET", myurl);
request.send();
function test(event) {
let target = event.target;
let response = JSON.parse(target.response);
console.log(response[1]);
}