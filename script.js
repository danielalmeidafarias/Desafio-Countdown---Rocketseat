let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds') 

function countDown() {
    
    if (seconds.textContent > 0) {
        seconds.textContent = seconds.textContent -1
    } else if (seconds.textContent == 0 && minutes.textContent > 0) {
        minutes.textContent = minutes.textContent -1
        seconds.textContent = 60
    } else if (minutes.textContent == 0 && hours.textContent > 0) {
        hours.textContent = hours.textContent -1
        minutes.textContent = 60
    } else if (hours.textContent == 0 && days.textContent >= 0) {
        days.textContent = days.textContent -1
        hours.textContent = 24
    }

    
}

setInterval(countDown, 1000)


