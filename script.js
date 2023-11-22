let ism = "Ism";
let familiya = "Familiya";
let tugilganYil = 2000;
let instagramUsername = "instagram_username";
let telegramUsername = "telegram_username";
let githubUsername = "github_username";

// HTML elementlarni tanlash
let ismFamiliyaElement = document.getElementById('ism-familiya');
let tugilganYilElement = document.getElementById('tugilgan-yil');
let instagramElement = document.getElementById('instagram');
let telegramElement = document.getElementById('telegram');
let githubElement = document.getElementById('github');

// Ma'lumotlarni HTML ga joylash
ismFamiliyaElement.textContent = `${ism} ${familiya}`;
tugilganYilElement.textContent += ` ${tugilganYil}`;

// Havolalar uchun atributlarni joylash
instagramElement.href = `https://www.instagram.com/${instagramUsername}`;
telegramElement.href = `https://t.me/${telegramUsername}`;
githubElement.href = `https://github.com/${githubUsername}`;