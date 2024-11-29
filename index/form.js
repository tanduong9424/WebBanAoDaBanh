
function closeform() {

  var arr = document.getElementById("user");
  if (arr) {
    arr.style.display = "none";
  }
}
function showSignup() {
  var loginform = document.getElementById("login");
  var signupform = document.getElementById("signup");

  if (loginform) {
    loginform.style.display = "none";
  }
  if (signupform) {
    signupform.style.display = "block";
  }
}
function showLogin() {
  var loginform = document.getElementById("login");
  var signupform = document.getElementById("signup");

  if (loginform) {
    loginform.style.display = "block";
  }
  if (signupform) {
    signupform.style.display = "none";
  }
}

// Lấy các phần tử cần thiết
const usernameInput = document.getElementById("fullname");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("mail");
const passwordInput = document.getElementById("password1");
const confirmPasswordInput = document.getElementById("password2");
const loginUsernameInput = document.getElementById("username1");
const loginPasswordInput = document.getElementById("password");

const btnSignup = document.getElementById("btnsignup");
const btnLogin = document.getElementById("btnlogin");

// Quản lý tài khoản
const logic = {
  accounts: JSON.parse(localStorage.getItem("accounts")) || [
    {
      ten: "hongtham",
      diachi: "hongtham",
      email: "hongtham",
      mk: "hongtham",
    },
  ],

  saveToLocalStorage() {
    localStorage.setItem("accounts", JSON.stringify(this.accounts));
  },

  clearSignupForm() {
    usernameInput.value = "";
    addressInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  },

  handleSignup() {
    // Kiểm tra dữ liệu (đoạn này giữ nguyên)
    if (!usernameInput.value) {
      alert("Vui lòng nhập tên người dùng!");
      return;
    }
    if (!addressInput.value) {
      alert("Vui lòng nhập địa chỉ!");
      return;
    }
    if (!phoneInput.value) {
      alert("Vui lòng nhập số điện thoại!");
      return;
    }
    if (!emailInput.value) {
      alert("Vui lòng nhập email!");
      return;
    }
    if (!passwordInput.value) {
      alert("Vui lòng nhập mật khẩu!");
      return;
    }
    if (!confirmPasswordInput.value) {
      alert("Vui lòng nhập xác nhận mật khẩu!");
      return;
    }

    if (passwordInput.value.length < 5) {
      alert("Mật khẩu phải có ít nhất 5 ký tự.");
      return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Mật khẩu không khớp");
      return;
    }

    if (!/^\d{10}$/.test(phoneInput.value)) {
      alert("Số điện thoại phải chứa đúng 10 chữ số.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Email không đúng định dạng. Vui lòng nhập lại.");
      return;
    }
    
    // Tạo tài khoản mới (giữ nguyên)
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const customers = JSON.parse(localStorage.getItem("customers")) || [];

    const newmakh = `KH${customers.length + 1}`;
    const newmaTK = `TK${accounts.length + 1}`;

    const newCus = {
      makh: newmakh,
      matk: newmaTK,
      tenkh: usernameInput.value,
      sdt: phoneInput.value,
      email: emailInput.value,
      diachi: addressInput.value,
    };

    const newAccount = {
      matk: newmaTK,
      username: usernameInput.value,
      password: passwordInput.value,
      status: "Hoạt động",
      role: "Khách Hàng",
      isHidden: false
    };
    
    accounts.push(newAccount);
    customers.push(newCus);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("customers", JSON.stringify(customers));

    alert("Đăng ký thành công");
    this.clearSignupForm();

    // Chuyển hướng sang màn hình đăng nhập
    showLogin(); // Gọi hàm chuyển sang giao diện đăng nhập
},


  handleLogin() {
   const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Kiểm tra dữ liệu
    if (!loginUsernameInput.value) {
      alert("Vui lòng nhập tài khoản");
      return;
    }
    if (!loginPasswordInput.value) {
      alert("Vui lòng nhập mật khẩu");
      return;
    }

    // Kiểm tra tài khoản
    const account = accounts.find(
      (acc) =>
        acc.username === loginUsernameInput.value &&
        acc.password === loginPasswordInput.value &&
        acc.role === 'Khách Hàng'
    );
    console.log(account);
    if (!account) {
      alert("Sai tên đăng nhập hoặc mật khẩu");
      return;
    }
    if(account.isHidden===true){
      alert("Sai tên đăng nhập hoặc mật khẩu");
      return;
    }
    if(account.status=="Không hợp lệ"){
      alert("Tài khoản đang bị khóa!");
      return;
    }
    if (account) {
      alert("Đăng nhập thành công");
      localStorage.setItem("currentuser", JSON.stringify(account));
      loginUsernameInput.value = "";
      loginPasswordInput.value = "";
      window.location.reload();
    } 
  },
};

// Bắt sự kiện cho nút
btnSignup.addEventListener("click", () => logic.handleSignup());
btnLogin.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn trình duyệt gửi biểu mẫu
  logic.handleLogin();
});
