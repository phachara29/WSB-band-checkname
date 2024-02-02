// script.js

function calculateDistance(coord1, coord2) {
  var R = 6371; // Radius of the Earth in kilometers
  var dLat = deg2rad(coord2.lat - coord1.lat);
  var dLng = deg2rad(coord2.lng - coord1.lng);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(coord1.lat)) * Math.cos(deg2rad(coord2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = R * c; // Distance in kilometers
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getCurrentCoordinates() {
  // Example: Replace this with your actual implementation to get user's coordinates
  // For testing purposes, return a fixed set of coordinates
  return { lat: 10.5, lng: 99.2 };
}

function isNearby(userCoordinates, specifiedCoordinates, radius) {
  var distance = calculateDistance(userCoordinates, specifiedCoordinates);
  return distance <= radius;
}

function redirectToPage() {
  // Get the selected values
  var selectedClass = document.getElementById('edu').value;
  var selectedRoom = document.getElementById('room').value;

  // Define the coordinates of the specified location
  var specifiedCoordinates = { lat: 10.454143429867239, lng: 99.23227715846424 };

  // Get the current coordinates of the user
  var userCoordinates = getCurrentCoordinates();

  // Check if the user is near the specified location with a radius of 100 meters
  if (isNearby(userCoordinates, specifiedCoordinates, 0.1)) {
    // Define URLs for each option
    var urlMap = {
      'ม.1': {
        'ห้อง1': 'https://docs.google.com/forms/d/e/1FAIpQLSdt_QkXki34nMnuGkPTfqacVh19bKUwwamcM5PUfGzosiryRQ/viewform',
        'ห้อง2': 'https://docs.google.com/forms/d/e/1FAIpQLSe_hubQtWq-joJXdJFCM2m5puNxazA7dgsWo0bo2ouWPJuOHg/viewform',
        'ห้อง3': 'https://docs.google.com/forms/d/e/1FAIpQLSfE30PRPP76qi0tA6av__UrrIQH783GdGV2dGLYAutDW9ySqw/viewform',
        'ห้อง4': 'https://docs.google.com/forms/d/e/1FAIpQLSd7UbWXrayAawk6iwK8ZB0a1v6S0eVKw9psudBsfZLdNxd14w/viewform',
        'ห้อง5': 'https://docs.google.com/forms/d/e/1FAIpQLSf0sdlwpZrdXpAEQ9rSdIJCN-ddYFdH7YPwS_bKKE_AXoZkSA/viewform'
      },
      'ม.2': {
        'ห้อง1': 'https://docs.google.com/forms/d/e/1FAIpQLSdwJBZEngB3p8JEuW4AfpOVgmMVzN1nmrg8AA_73Br0Fcl0ow/viewform',
        'ห้อง2': 'https://docs.google.com/forms/d/e/1FAIpQLSeGph3Kcx9QSdbJRDmxwvuc5EYfdNry9Fgw4yJaw-vjnUW7KA/viewform',
        'ห้อง3': 'https://docs.google.com/forms/d/e/1FAIpQLSfrh3yQeDVifOXIsWXCdpOm2F1PJe_B1djNuAz-T97kE3BD_g/viewform',
        'ห้อง4': 'https://docs.google.com/forms/d/e/1FAIpQLSfSTOptPasPE_HF1iRhMcLw2TtSgdcsWqzT8DgcdcDDlyj_Hw/viewform',
        'ห้อง5': 'https://docs.google.com/forms/d/e/1FAIpQLSeACnQR2vd8SqXvf7wLVYo2Aw1luw6SDGFCzwyTLaOf6UhbfA/viewform'
      },
      'ม.3': {
        'ห้อง1': 'https://docs.google.com/forms/d/e/1FAIpQLScS-vLXlSeqIYfCCWUKEJ5AFZIbUJs7NSjN_Bt_62Wlh8Qrow/viewform',
        'ห้อง2': 'https://docs.google.com/forms/d/e/1FAIpQLScygHhWjX3Z7Etv2JUbquMoJH9z2pVmc_ovtJnTbBTnurKl-A/viewform',
        'ห้อง3': 'https://docs.google.com/forms/d/e/1FAIpQLSf-WtbRP25_ECmzH3LuvxaO4hvnCGLmLdbRR2muZwGC_PPsQA/viewform',
        'ห้อง4': 'https://docs.google.com/forms/d/e/1FAIpQLSejAxcVT8g0493yCQvMVWADASvgb3VGZIrQDPNtLddq7vXZDg/viewform',
        'ห้อง5': 'https://docs.google.com/forms/d/e/1FAIpQLSfTKG_N-r1itE5DSEv5N5cksI3tcW7ytOhYPsGp9ipmbjsyGQ/viewform'
      },
      'ม.4': {
        'ห้อง1': 'https://docs.google.com/forms/d/e/1FAIpQLSeQ0x6pQ-n8Z5IAfaBqif2a7juLMCZuaKIywpPn1m42HFNUpA/viewform',
        'ห้อง2': 'https://docs.google.com/forms/d/e/1FAIpQLSflpB9HrlQyt1TFsV5XAIRNI5N4BHCMeMSoj4OXWmuKOMm04Q/viewform',
        'ห้อง3': 'https://docs.google.com/forms/d/e/1FAIpQLSe2gLp1eXE85khEf0qSixqT_i5kgodSK9KbLj9-jyC8k40rvQ/viewform',
      },
      'ม.5': {
        'ห้อง1': 'https://docs.google.com/forms/d/e/1FAIpQLSeX_ncGA7-SRUTl4nVWsEtooYt6q1xZFPT2l_mIAU_Cb-mQBw/viewform',
        'ห้อง2': 'https://docs.google.com/forms/d/e/1FAIpQLSekW1DeagXNvY77bH_9-Yh3gbVqmVvO9ZSVSi1cRpjaVtIRPw/viewform',
        'ห้อง3': 'https://docs.google.com/forms/d/e/1FAIpQLSdMK7CUfpmKM8GhItyKTVpv2CjRmhtiXWwtGwtsnAonrKRiuw/viewform',
      },
      'ม.6': {
        'ห้อง1': 'https://docs.google.com/forms/d/e/1FAIpQLSeR2cL9oDwwxcsyYxgldhqfRxK-X_mJQQD4yK__js3mlbCx8Q/viewform',
        'ห้อง2': 'https://docs.google.com/forms/d/e/1FAIpQLSe2uC2-plQy4oLoa35SZko-j-U0h7NShqWzyK0Qf1UL-rmTQw/viewform',
        'ห้อง3': 'https://docs.google.com/forms/d/e/1FAIpQLSeGS9kOkxtu2W9haGwaatipoaK4Y8c3sa4F8t9AjEW4N4Itbw/viewform',
      },
      // Add more options as needed
    };

    // Redirect to the selected URL
    var selectedUrl = urlMap[selectedClass]?.[selectedRoom];
    if (selectedUrl) {
      window.location.href = selectedUrl;
    } else {
      // Use specified coordinates if no URL is found
      var specifiedCoordinatesUrl = 'https://www.google.com/maps/@10.454149626221884,99.23227214888827,214m/data=!3m1!1e3?entry=ttu';
      window.location.href = specifiedCoordinatesUrl;
    }
  } else {
    alert('คุณต้องอยู่ในพื้นที่ใกล้เคียงเพื่อทำการส่งข้อมูล');
  }
}

function handleButtonClick() {
  redirectToPage();
}
