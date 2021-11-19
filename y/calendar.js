/* import{index}
 */
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

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

    document.querySelector(".date h1").innerHTML = month[date.getMonth()];

    let days = "";
    let firstDayIndex = date.getDay();
    let lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let nextDays = 7 - lastDayIndex - 1;

    for(let j = firstDayIndex; j > 0; j--){
        days += `<div class="prev-date">${prevLastDay - j + 1}</div>`;
    }

    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        }
        else{
        days += `<div>${i}</div>`;
        }
    }

    for(let k = 1; k <= nextDays; k++){
        days += `<div class="next-date">${k}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () =>{
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () =>{
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

/*--------------------------- Event Placeholder ---------------------------*/
