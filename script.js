function redirectToPage() {
  // Get the selected values
  var selectedClass = document.getElementById('edu').value;
  var selectedRoom = document.getElementById('room').value;

  // Define the coordinates of the specified location
  var specifiedCoordinates = { lat: 10.454143429867239, lng: 99.23227715846424 };

  // Get the current coordinates of the user (assuming you have a function to retrieve it)
  var userCoordinates = getCurrentCoordinates(); // Replace this with your actual function

  // Check if the user is near the specified location or within 20 meters
  if (isNearby(userCoordinates, specifiedCoordinates, 20)) {
    // Define URLs for each option
    var urlMap = {
      'ม.1': { 'ห้อง1': 'URL_ม1ห1', 'ห้อง2': 'URL_ม1ห2', 'ห้อง3': 'URL_ม1ห3' },
      'ม.2': { 'ห้อง1': 'URL_ม2ห1', 'ห้อง2': 'URL_ม2ห2', 'ห้อง3': 'URL_ม2ห3' },
      // เพิ่มเติมตามความต้องการ
    };

    // Redirect to the selected URL
    var selectedUrl = urlMap[selectedClass]?.[selectedRoom];
    if (selectedUrl) {
      window.location.href = selectedUrl;
    } else {
      // Use specified coordinates URL if no URL is found
      var specifiedCoordinatesUrl = 'https://www.google.com/maps/@10.454143429867239,99.23227715846424,20m/data=!3m1!1e3?entry=ttu';
      window.location.href = specifiedCoordinatesUrl;
    }
  } else {
    alert('คุณต้องอยู่ในพื้นที่ใกล้เคียงเพื่อทำการส่งข้อมูล');
  }
}

// Replace this function with your actual function to get the user's current coordinates
function getCurrentCoordinates() {
  // Example: return { lat: 10.5, lng: 99.2 };
  // Replace with actual implementation
  return { lat: 0, lng: 0 };
}

// Replace this function with your actual function to check if the user is nearby
function isNearby(userCoordinates, specifiedCoordinates, radius) {
  // Example: return true if the user is within a certain radius of the specified location
  // Replace with actual implementation
  return true;
}

function handleButtonClick() {
  redirectToPage();
}
