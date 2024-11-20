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


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const username = $("#fullname");
const password = $("#password1");
const confirmpw = $("#password2");
const email = $("#mail");
const address = $("#address");
const phone = $("#phone");
const btn_dk = $("#btnsignup");

const tk = $("#mail2");
const mk = $("#password");
const btn_dn = $("#btnlogin");

const logic = {
  accounts: JSON.parse(localStorage.getItem("accounts")) || [
    {
      ten: "hongtham",
      diachi: "hongtham",
      email: "hongtham@gmail.com",
      mk: "hongtham",
    },
  ],

  saveToLocalStorage() {
    localStorage.setItem("accounts", JSON.stringify(this.accounts));
  },

  clear() {
    username.value = "";
    confirmpw.value = "";
    address.value = "";
    password.value = "";
    email.value = "";
    phone.value = "";
  },

  deleteAccount(email) {
    const index = this.accounts.findIndex((account) => account.email === email);
    if (index !== -1) {
      this.accounts.splice(index, 1);
      this.saveToLocalStorage(); 
      alert(`Tài khoản với email "${email}" đã được xóa.`);
    } else {
      alert("Không tìm thấy tài khoản để xóa.");
    }
  },

  handle() {
    const _this = this;

    btn_dn.onclick = function () {
      if (tk.value === "" || mk.value === "") {
        alert("Vui lòng nhập đầy đủ email và password");
      } else {
        let isValid = false;

        _this.accounts.forEach((account) => {
          if (tk.value === account.email && mk.value === account.mk) {
            alert("Đăng nhập thành công");
            localStorage.setItem("currentuser",JSON.stringify(account));
            isValid = true;
          }
        });

        if (!isValid) {
          alert("Sai tên đăng nhập hoặc mật khẩu");
        }
      }
    };

    btn_dk.onclick = function () {
      if (
        username.value === "" ||
        confirmpw.value === "" ||
        address.value === "" ||
        password.value === "" ||
        email.value === "" ||
        phone.value === ""
      ) {
        alert("Vui lòng nhập đủ thông tin");
      } else {
        if (password.value === confirmpw.value) {
          alert("Bạn đã đăng kí thành công");
          const newAccount = {
            ten: username.value,
            diachi: address.value,
            email: email.value,
            mk: password.value,
          };

          _this.accounts.push(newAccount); 
          _this.saveToLocalStorage(); 
          _this.clear();
        } else {
          alert("Vui lòng kiểm tra lại mật khẩu");
        }
      }
    };
  },

  start() {
    this.handle();
  },
};

logic.start();

