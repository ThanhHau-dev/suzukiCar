const btns = document.querySelectorAll(".btn"); // NodeList chứa các phần tử có class .btn
const a = document.querySelectorAll("a");
console.log(btns);

// Lặp qua từng nút và thêm sự kiện click
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Đây là bản demo giao diện, chưa có chức năng, vui lòng không bấm gì thêm!");
  });
});


a.forEach((a) => {
    a.addEventListener("click", () => {
      alert("Đây là bản demo giao diện, chưa có chức năng, vui lòng không bấm gì thêm!");
    });
  });
  