/** @format */

let intervalId = null;
let isMusicPlaying = false;
const music = document.getElementById("backgroundMusic");
music.volume = 0.5;
document.getElementById("startButton").hidden = true;
function createRandomHeart() {
  // Tạo thẻ div trái tim
  const heart = document.createElement("div");
  heart.className = "heart";

  // Thêm chữ "haha" vào trái tim
  const text = document.createElement("div");
  text.className = "text";
  text.innerText = "❤️I Miss You❤️";
  heart.appendChild(text);

  // Tính toán vị trí ngẫu nhiên
  const x = Math.random() * (window.innerWidth - 100); // Chiều rộng
  const y = Math.random() * (window.innerHeight - 100); // Chiều cao

  // Đặt vị trí cho thẻ trái tim
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Thêm trái tim vào trang
  document.body.appendChild(heart);
}

document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("startButton").hidden = true;
  document.getElementById("input").readOnly = true;
  setInterval(createRandomHeart, 1000);
});

// Theo dõi thay đổi dữ liệu trong input
input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      // Khi input có dữ liệu, nút trở về vị trí cũ
      document.getElementById("startButton").hidden = true;
    }
    else{
        // Khi input trống, nút bắt đầu hiện lên
        document.getElementById("startButton").hidden = false
    }
  });

  // Phát nhạc nền
function startMusic() {
  isMusicPlaying = true;
  music.play().catch((error) => console.log(error));
}
// Bắt đầu phát nhạc khi tương tác
window.addEventListener("click", startMusic, { once: true });