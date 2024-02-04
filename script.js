function handleButtonClick() {var targetLatitude = 10.454151078680168;
  // var targetLongitude = 99.23227978109529;
  // ดึงค่าที่เลือกจากเลือกชั้น (edu) และห้อง (room)
  var selectedEdu = document.getElementById("edu").value;
  var selectedRoom = document.getElementById("room").value;

  // ตรวจสอบว่าอยู่ในพิกัดที่กำหนดหรือไม่
  var userLatitude = 10.454150542033535;
  var userLongitude = 99.23227983513722;
  var targetLatitude = 10.454151078680168;
  var targetLongitude = 99.23227978109529;
  var maxDistance = 10;


  // คำนวณระยะทาง
  var distance = calculateDistance(userLatitude, userLongitude, targetLatitude, targetLongitude);

  // ถ้าอยู่ในระยะที่กำหนด
  if (distance <= maxDistance) {
      // สร้าง URL ของ Google Form
      var formUrl;

      if (selectedEdu === 'ม.1' && selectedRoom === 'ห้อง1') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdt_QkXki34nMnuGkPTfqacVh19bKUwwamcM5PUfGzosiryRQ/viewform';
      } else if (selectedEdu === 'ม.1' && selectedRoom === 'ห้อง2') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe_hubQtWq-joJXdJFCM2m5puNxazA7dgsWo0bo2ouWPJuOHg/viewform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง1') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdwJBZEngB3p8JEuW4AfpOVgmMVzN1nmrg8AA_73Br0Fcl0ow/viewform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง2') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeGph3Kcx9QSdbJRDmxwvuc5EYfdNry9Fgw4yJaw-vjnUW7KA/viewform';
      }

      // ตรวจสอบว่า formUrl ไม่เป็น undefined
      if (formUrl !== undefined) {
          // สร้าง URL ที่จะเปิด Google Form
          var openFormUrl = formUrl + '?entry.1234567890=' + selectedEdu + '&entry.0987654321=' + selectedRoom;

          // เปิด Google Form
          window.location.href = openFormUrl;
      } else {
          // แสดงหน้าต่างแจ้งเตือน
          alert("ไม่พบ URL สำหรับเลือกชั้นและห้องที่เลือก");
      }
  } else {
      // แสดงข้อความหรือทำอย่างอื่นตามต้องการ
      alert("คุณต้องเข้าไปห้องวงโยเพื่อเช็คชื่อ");
  }
}

// ฟังก์ชันคำนวณระยะทางระหว่างสองพิกัด
function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // รัศมีของโลก (เป็นกิโลเมตร)
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = R * c; // ระยะทางในเครื่องหมายกิโลเมตร
  return distance * 1000; // แปลงเป็นเมตร
}

// ฟังก์ชันแปลงองศาเป็นเรเดียน
function toRad(degrees) {
  return degrees * (Math.PI / 180);
}
