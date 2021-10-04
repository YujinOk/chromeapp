const clock = document.querySelector("#clock");
// clock.innerText = "hello";

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:  ${minutes}: ${seconds}`;
    // clock.innerText = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);
