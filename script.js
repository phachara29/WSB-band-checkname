function handleButtonClick() {var targetLatitude = 10.454151078680168;
  // var targetLongitude = 99.23227978109529;
  // ดึงค่าที่เลือกจากเลือกชั้น (edu) และห้อง (room)
  var selectedEdu = document.getElementById("edu").value;
  var selectedRoom = document.getElementById("room").value;

  // ตรวจสอบว่าอยู่ในพิกัดที่กำหนดหรือไม่
//   var userLatitude = 10.490934700770444;
//   var userLongitude = 99.17583935691049;
//   var targetLatitude = 10.454151078680168;
//   var targetLongitude = 99.23227978109529;
//   var maxDistance = 10;


  // คำนวณระยะทาง
//   var distance = calculateDistance(userLatitude, userLongitude, targetLatitude, targetLongitude);

  // ถ้าอยู่ในระยะที่กำหนด
  if (distance <= maxDistance) {
      // สร้าง URL ของ Google Form
      var formUrl;

      if (selectedEdu === 'ม.1' && selectedRoom === 'ห้อง1') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdt_QkXki34nMnuGkPTfqacVh19bKUwwamcM5PUfGzosiryRQ/viewform';
      } else if (selectedEdu === 'ม.1' && selectedRoom === 'ห้อง2') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe_hubQtWq-joJXdJFCM2m5puNxazA7dgsWo0bo2ouWPJuOHg/viewform';
      } else if (selectedEdu === 'ม.1' && selectedRoom === 'ห้อง3') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfE30PRPP76qi0tA6av__UrrIQH783GdGV2dGLYAutDW9ySqw/viewform';
      } else if (selectedEdu === 'ม.1' && selectedRoom === 'ห้อง4') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd7UbWXrayAawk6iwK8ZB0a1v6S0eVKw9psudBsfZLdNxd14w/closedform';
      } else if (selectedEdu === 'ม.1' && selectedRoom === 'ห้อง5') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf0sdlwpZrdXpAEQ9rSdIJCN-ddYFdH7YPwS_bKKE_AXoZkSA/viewform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง1') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdwJBZEngB3p8JEuW4AfpOVgmMVzN1nmrg8AA_73Br0Fcl0ow/viewform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง2') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdwJBZEngB3p8JEuW4AfpOVgmMVzN1nmrg8AA_73Br0Fcl0ow/viewform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง3') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeGph3Kcx9QSdbJRDmxwvuc5EYfdNry9Fgw4yJaw-vjnUW7KA/closedform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง3') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfrh3yQeDVifOXIsWXCdpOm2F1PJe_B1djNuAz-T97kE3BD_g/closedform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง4') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfSTOptPasPE_HF1iRhMcLw2TtSgdcsWqzT8DgcdcDDlyj_Hw/closedform';
      } else if (selectedEdu === 'ม.2' && selectedRoom === 'ห้อง5') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeACnQR2vd8SqXvf7wLVYo2Aw1luw6SDGFCzwyTLaOf6UhbfA/closedform';
      } else if (selectedEdu === 'ม.3' && selectedRoom === 'ห้อง1') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScS-vLXlSeqIYfCCWUKEJ5AFZIbUJs7NSjN_Bt_62Wlh8Qrow/viewform'
      } else if (selectedEdu === 'ม.3' && selectedRoom === 'ห้อง2') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScygHhWjX3Z7Etv2JUbquMoJH9z2pVmc_ovtJnTbBTnurKl-A/closedform';
      } else if (selectedEdu === 'ม.3' && selectedRoom === 'ห้อง3') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf-WtbRP25_ECmzH3LuvxaO4hvnCGLmLdbRR2muZwGC_PPsQA/closedform';
      } else if (selectedEdu === 'ม.3' && selectedRoom === 'ห้อง4') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSejAxcVT8g0493yCQvMVWADASvgb3VGZIrQDPNtLddq7vXZDg/viewform';
      } else if (selectedEdu === 'ม.3' && selectedRoom === 'ห้อง5') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfTKG_N-r1itE5DSEv5N5cksI3tcW7ytOhYPsGp9ipmbjsyGQ/viewform';
      } else if (selectedEdu === 'ม.4' && selectedRoom === 'ห้อง1') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeQ0x6pQ-n8Z5IAfaBqif2a7juLMCZuaKIywpPn1m42HFNUpA/closedform';
      } else if (selectedEdu === 'ม.4' && selectedRoom === 'ห้อง2') {
          formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSflpB9HrlQyt1TFsV5XAIRNI5N4BHCMeMSoj4OXWmuKOMm04Q/viewform';
      } else if (selectedEdu === 'ม.4' && selectedRoom === 'ห้อง3') {
        formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe2gLp1eXE85khEf0qSixqT_i5kgodSK9KbLj9-jyC8k40rvQ/closedform';
      } else if (selectedEdu === 'ม.5' && selectedRoom === 'ห้อง1') {
        formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeX_ncGA7-SRUTl4nVWsEtooYt6q1xZFPT2l_mIAU_Cb-mQBw/closedform';
      } else if (selectedEdu === 'ม.5' && selectedRoom === 'ห้อง2') {
        formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSekW1DeagXNvY77bH_9-Yh3gbVqmVvO9ZSVSi1cRpjaVtIRPw/viewform';
      } else if (selectedEdu === 'ม.5' && selectedRoom === 'ห้อง3') {
        formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdMK7CUfpmKM8GhItyKTVpv2CjRmhtiXWwtGwtsnAonrKRiuw/closedform';
      } else if (selectedEdu === 'ม.6' && selectedRoom === 'ห้อง1') {
        formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeR2cL9oDwwxcsyYxgldhqfRxK-X_mJQQD4yK__js3mlbCx8Q/closedform';
      } else if (selectedEdu === 'ม.6' && selectedRoom === 'ห้อง2') {
        formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe2uC2-plQy4oLoa35SZko-j-U0h7NShqWzyK0Qf1UL-rmTQw/viewform';
      } else if (selectedEdu === 'ม.6' && selectedRoom === 'ห้อง3') {
        formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeGS9kOkxtu2W9haGwaatipoaK4Y8c3sa4F8t9AjEW4N4Itbw/closedform';
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
