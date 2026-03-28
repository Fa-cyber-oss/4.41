// 1. Foydalanuvchidan ism va harfni so'rash
let ism = prompt("Ismingizni kiriting:");
let harf = prompt("Qidirmoqchi bo'lgan harfingizni kiriting:");

// 2. Katta-kichik harflarni bir xil ko'rinishga keltirish (muhim talab)
let kichikIsm = ism.toLowerCase();
let kichikHarf = harf.toLowerCase();

// 3. Tekshirish (if-else yordamida)
if (kichikIsm.includes(kichikHarf)) {
    alert("Ha, '" + harf + "' harfi ism ichida ishtirok etgan.");
} else {
    alert("Ism ichida '" + harf + "' harfi ishtirok etmagan.");
}
