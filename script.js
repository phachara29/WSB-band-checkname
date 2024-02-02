function handleButtonClick() {
  // Obtain user's current coordinates (replace with actual geolocation function)
  var userCoordinates = getCurrentCoordinates();

  // Target coordinates
  var targetCoordinates = { lat: 10.454122222726724, lng: 99.23227643597421 };

  // Check distance
  var distance = calculateDistance(userCoordinates, targetCoordinates);

  // Check if within 100 meters
  if (distance <= 100) {
    // Proceed with data submission
    submitData();
  } else {
    // Provide user feedback (adjust as needed)
    alert('You are not within the 100-meter range to submit data.');
  }
}

// Replace with actual geolocation function
function getCurrentCoordinates() {
  // Example: return { lat: 10.5, lng: 99.2 };
  // Replace with actual implementation
  return { lat: 0, lng: 0 };
}

// Replace with actual distance calculation function (Haversine formula, etc.)
function calculateDistance(coord1, coord2) {
  // Example: return distance in meters;
  // Replace with actual implementation
  return 0;
}

// Replace with actual data submission logic
function submitData() {
  // Example: Submit data to the server
  // Replace with actual implementation
  console.log('Data submitted successfully.');
}
