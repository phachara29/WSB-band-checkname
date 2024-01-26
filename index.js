// เลือก Element ที่คุณต้องการตรวจสอบการเปลี่ยนแปลง
const targetNode = document.getElementById('your-target-element-id');

// สร้าง instance ของ MutationObserver และระบุ callback function
const observer = new MutationObserver((mutationsList, observer) => {
  // ทำสิ่งที่คุณต้องการเมื่อมีการเปลี่ยนแปลงใน DOM
  console.log('DOM changed!');
});

// ตั้งค่า configuration ของ MutationObserver
const config = { attributes: true, childList: true, subtree: true };

// เริ่มต้นตัวตรวจสอบด้วยการให้ observer observe ที่ target และกำหนด configuration
observer.observe(targetNode, config);

// หากคุณต้องการหยุดการตรวจสอบ ให้ใช้ method disconnect
// observer.disconnect();
