const date = new Date();


const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


document.querySelector(".month").innerHTML = month[date.getMonth()];
document.querySelector(".day").innerHTML = date.getDate();
document.querySelector(".year").innerHTML = date.getFullYear();