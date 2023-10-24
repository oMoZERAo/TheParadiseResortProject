function formatInput(input) {
    let value = input.value.replace(/-/g, ''); // ลบ "-" ที่มีอยู่
    let formattedValue = value.replace(/(\d{3})/g, '$1-'); // แบ่งตัวเลขเป็นกลุ่ม 3 ตัวและเพิ่ม "-"
    // ลบ "-" ที่เหลือ ณ ตำแหน่งสุดท้าย (ถ้ามี)
    formattedValue = formattedValue.replace(/-$/, '');
    input.value = formattedValue;

    if (input.value.length > 11) {
        formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // แบ่งตัวเลขเป็นกลุ่ม 3 ตัว และ 1-4 ตัว และเพิ่ม "-"
        input.value = formattedValue;
    }
}

function validateInput(input) {
    input.value = input.value.replace(/[^0-9,-]/g, ''); // ลบตัวอักษรที่ไม่ใช่ตัวเลข
}

function todayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;


    document.getElementById("datePicker").value = formattedDate;
}

function todayTime() {
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    document.getElementById("timePicker").value = formattedTime;
}