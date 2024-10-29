const users = [
    { name: "zafarbek", pin: "1318621m" }, // Foydalanuvchilar ro'yxati
    { name: "hamma", pin: "hamma" },
    // Bu yerga boshqa foydalanuvchilar qo'shishingiz mumkin
];

function checkUser() {
    const nameInput = document.getElementById("name").value;
    const pinInput = document.getElementById("pin").value;
    const message = document.getElementById("message");

    // Foydalanuvchini qidiramiz
    const user = users.find(user => user.name === nameInput && user.pin === pinInput);

    if (user) {
        // Ma'lumotlar to'g'ri bo'lsa, boshqa sahifaga o'tamiz
        window.location.href = "./succes.html"; // O'tish uchun manzil
    } else {
        message.textContent = "Xato ism yoki PIN kod!";
        message.style.color = "red";
    }
}
