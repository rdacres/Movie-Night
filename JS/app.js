
console.log("Movie Night app loaded.");

const movies = [
    {
        id: 1,
        title: "Jumanji",
        genre: "Adventure",
        description: "A magical board game unleashes a world of adventure and wild jungle chaos.",
        showtime: "Saturday, 6:00 p.m.",
        seatsAvailable: 12
    },
    {
        id: 2,
        title: "The BFG",
        genre: "Fantasy",
        description: "An extraordinary journey of a young girl and a friendly giant dream-catcher.",
        showtime: "Saturday, 8:30 p.m.",
        seatsAvailable: 3
    },
    {
        id: 3,
        title: "A Bug's Life",
        genre: "Animation",
        description: "An inventive ant gathers a misfit crew of warrior bugs to save his colony.",
        showtime: "Sunday, 4:00 p.m.",
        seatsAvailable: 0
    },
    {
        id: 4,
        title: "The Nightmare Before Christmas",
        genre: "Holiday",
        description: "Jack Skellington, Halloween Town's pumpkin king, stumbles upon Christmas Town.",
        showtime: "Sunday, 7:00 p.m.",
        seatsAvailable: 6
    }
];

function getSeatStatus(seats) {
    if (seats >= 5) {
        return "Seats Available";
    }
    if (seats > 0) {
        return "Almost Full";
    }
    return "Sold Out";
}

for (const currentMovie of movies) {
    const status = getSeatStatus(currentMovie.seatsAvailable);
    console.log(`${currentMovie.title}: ${status}`);
}


$(document).ready(function() {
    
    
    $('#ticketForm').on('submit', function(event) {
        
        event.preventDefault();

        
        let customerName = $('#fullName').val();
        let customerEmail = $('#email').val();
        let selectedMovie = $('#movieSelect').val();
        let ticketCount = $('#ticketCount').val();

        
        if (customerName === "" || customerEmail === "" || selectedMovie === null || ticketCount < 1) {
            alert("Please complete all fields before confirming your reservation.");
            return;
        }

        
        alert("Success! Thank you, " + customerName + ". Your reservation for " + ticketCount + " ticket(s) has been confirmed.");

        
        $('#ticketForm')[0].reset();
    });

    
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        let name = $('#contactName').val();
        let email = $('#contactEmail').val();
        let message = $('#contactMessage').val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all required fields in the contact form.");
            return;
        }

        alert("Thank you for reaching out, " + name + "! We have received your message and will get back to you shortly.");
        $('#contactForm')[0].reset();
    });

});
