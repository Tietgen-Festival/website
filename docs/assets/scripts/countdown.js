// Create a countdown timer to the second of june 2023 at 10:00 AM
// The countdown timer will be displayed in the element with the id "countdown"
// The countdown timer will be updated every second
// The countdown timer will be displayed in the format "days:hours:minutes:seconds"

(() => {
// Create a variable for the date of the event
    let eventDate = new Date("June 2, 2023 10:00:00").getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();

        let distance = eventDate - now;

        // Create a variable for the number of seconds in a day
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // Create a variable for the number of seconds in an hour
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // Create a variable for the number of seconds in a minute
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // Create a variable for the number of seconds
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "TICKET SALE IS LIVE";
        }
    }, 1000);
})();
