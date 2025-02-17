let intervalId = null;
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
    if (intervalId) {
      // Nếu đang chạy thì dừng lại
      clearInterval(intervalId);
      intervalId = null;
      document.getElementById("startButton").innerText = "Bắt đầu";
    } else {
      // Bắt đầu hiển thị trái tim
      intervalId = setInterval(createRandomHeart, 500);
      document.getElementById("startButton").innerText = "Dừng lại";
    }
  });
