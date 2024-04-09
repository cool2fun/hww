// File: call_index.js

// Sử dụng đối tượng XMLHttpRequest để gửi yêu cầu HTTP GET đến index.html
var xhttp = new XMLHttpRequest();

// Thiết lập hàm xử lý cho sự kiện nhận phản hồi từ server
xhttp.onreadystatechange = function() {
  // Nếu yêu cầu đã hoàn thành và phản hồi đã được nhận thành công
  if (this.readyState == 4 && this.status == 200) {
    // In nội dung của index.html trong console
    console.log(this.responseText);
  }
};

// Mở kết nối tới index.html sử dụng phương thức GET
xhttp.open("GET", "index.html", true);

// Gửi yêu cầu tới server
xhttp.send();