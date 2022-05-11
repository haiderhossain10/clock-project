const secondBar = document.querySelector(".circle-second");
const minuteBar = document.querySelector(".circle-minute");
const hourBar = document.querySelector(".circle-hour");

setInterval(() => {
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();

    secondBar.style.transform = `rotate(${second * 6}deg)`;
    minuteBar.style.transform = `rotate(${minute * 6}deg)`;
    hourBar.style.transform = `rotate(${hour * 30}deg)`;
});
