// Function to calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
}

// Function to convert degrees to radians
function toRad(degrees) {
    return (degrees * Math.PI) / 180;
}

// Function to get current location using Geolocation API
function getCurrentLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var userLatitude = position.coords.latitude;
                var userLongitude = position.coords.longitude;
                callback(userLatitude, userLongitude);
            },
            function (error) {
                console.error("Error getting user's location:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser");
    }
}

// handleButtonClick function
function handleButtonClick() {
    var selectedEdu = document.getElementById("edu").value;
    var selectedRoom = document.getElementById("room").value;
    var maxDistance = 10;

    var targetLatitude = 10.490934700770444;
    var targetLongitude = 99.17583935691049;

    // Get current location of the user
    getCurrentLocation(function (userLatitude, userLongitude) {
        // Calculate distance
        var distance = calculateDistance(userLatitude, userLongitude, targetLatitude, targetLongitude);

        // Check if the user is within the specified distance
        if (distance <= maxDistance) {
            // Proceed with form submission or other actions
            // ...

            // If within the specified distance, open Google Form
            var formUrl;

            // Set the URL of the Google Form based on the selected education and room
            if (selectedEdu === "ม.1" && selectedRoom === "ห้อง1") {
                formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdt_QkXki34nMnuGkPTfqacVh19bKUwwamcM5PUfGzosiryRQ/viewform";
            }
            // ... (Add more conditions based on your Google Form)

            // Check if formUrl is not undefined
            if (formUrl !== undefined) {
                // Create the URL to open the Google Form
                var openFormUrl = formUrl + "?entry.1234567890=" + selectedEdu + "&entry.0987654321=" + selectedRoom;

                // Open the Google Form
                window.location.href = openFormUrl;
            } else {
                // Display an alert window
                alert("No URL found for the selected education and room");
            }
        } else {
            // Display alert if the user is not within the specified distance
            alert("You must be within 10 meters of the specified location");
        }
    });
}
