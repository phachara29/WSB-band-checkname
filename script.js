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
                // Display a message on the website
                var messageElement = document.getElementById("message");
                messageElement.innerText = "No URL found for the selected education and room";
            }
        } else {
            // Display a message on the website
            var messageElement = document.getElementById("message");
            messageElement.innerText = "คุณต้องอยู่ในระยะ 10 เมตรของตำแหน่งที่กำหนด";
        }
    });
}
