

//30//11/2024
let diachiJson = {
  "regions": [
    {
      "city": "Hồ Chí Minh",
      "districts": [
        { "id": 1, "name": "Quận 1" },
        { "id": 2, "name": "Quận 2" },
        { "id": 3, "name": "Quận 3" },
        { "id": 3, "name": "Quận 4" },
        { "id": 3, "name": "Quận 5" },
        { "id": 3, "name": "Quận 6" },
        { "id": 3, "name": "Quận 7" },
        { "id": 3, "name": "Quận 8" },
        { "id": 3, "name": "Quận 9" },
        { "id": 3, "name": "Quận 10" },
        { "id": 3, "name": "Quận 11" },
        { "id": 3, "name": "Quận Tân Bình" }
      ]
    },
    {
      "city": "Hà Nội",
      "districts": [
        { "id": 4, "name": "Ba Đình" },
        { "id": 5, "name": "Hoàn Kiếm" },
        { "id": 6, "name": "Đống Đa" }
      ]
    },
    {
      "city": "Đà Nẵng",
      "districts": [
        { "id": 7, "name": "Hải Châu" },
        { "id": 8, "name": "Thanh Khê" },
        { "id": 9, "name": "Sơn Trà" }
      ]
    }
  ]
};





//30//11/2024
try {
  const citySelect = document.getElementById('city');
  
  // Thêm các thành phố vào combobox
  diachiJson.regions.forEach(region => {
    const option = document.createElement('option');
    option.value = region.city;
    option.textContent = region.city;
    citySelect.appendChild(option);
  });

  // Lắng nghe sự kiện thay đổi trên combobox thành phố
  citySelect.addEventListener('change', function () {
    loadDistricts(this.value);
  });
} catch (error) {
  console.error('Lỗi khi tải danh sách thành phố:', error);
}
//30//11/2024
function loadDistricts(selectedCity) {
try {
  const districtSelect = document.getElementById('district');
  districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>'; // Reset danh sách quận/huyện

  // Tìm thành phố được chọn
  const selectedRegion = diachiJson.regions.find(region => region.city === selectedCity);

  if (selectedRegion) {
    selectedRegion.districts.forEach(district => {
      const option = document.createElement('option');
      option.value = district.id;
      option.textContent = district.name;
      districtSelect.appendChild(option);
    });
  }
} catch (error) {
  console.error('Lỗi khi tải danh sách quận/huyện:', error);
}
}














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
    event.preventDefault();
    // Kiểm tra dữ liệu (đoạn này giữ nguyên)
    if (!usernameInput.value) {
      alert("Vui lòng nhập tên người dùng!");
      usernameInput.focus();
      return;
    }
    if (!addressInput.value) {
      alert("Vui lòng nhập địa chỉ!");
      addressInput.focus();
      return;
    }
    if (!phoneInput.value) {
      alert("Vui lòng nhập số điện thoại!");
      phoneInput.focus();
      return;
    }
    if (!emailInput.value) {
      alert("Vui lòng nhập email!");
      emailInput.focus();
      return;
    }
    if (!passwordInput.value) {
      alert("Vui lòng nhập mật khẩu!");
      passwordInput.focus();
      return;
    }
    if (!confirmPasswordInput.value) {
      alert("Vui lòng nhập xác nhận mật khẩu!");
      confirmPasswordInput.focus();
      return;
    }
    
    if (passwordInput.value.length < 5) {
      alert("Mật khẩu phải có ít nhất 5 ký tự.");
      passwordInput.focus();
      return;
    }
    
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Mật khẩu không khớp");
      confirmPasswordInput.focus();
      return;
    }
    
    if (!/^\d{10}$/.test(phoneInput.value)) {
      alert("Số điện thoại phải chứa đúng 10 chữ số.");
      phoneInput.focus();
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Email không đúng định dạng. Vui lòng nhập lại.");
      emailInput.focus();
      return;
    }
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    
    const selectedCity = citySelect.options[citySelect.selectedIndex].text;
    const selectedDistrict = districtSelect.options[districtSelect.selectedIndex].text;
    
    if (!selectedCity || selectedCity === "Chọn thành phố") {
      alert("Vui lòng chọn thành phố!");
      citySelect.focus();
      return;
    }
    
    if (!selectedDistrict || selectedDistrict === "Chọn quận/huyện") {
      alert("Vui lòng chọn quận/huyện!");
      districtSelect.focus();
      return;
    }
    
  
    // Ghép thành chuỗi
    const fullAddress = `${addressInput.value},${selectedDistrict}, ${selectedCity}`;
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
      diachi: fullAddress,
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
      loginUsernameInput.focus();
      return;
    }
    if (!loginPasswordInput.value) {
      alert("Vui lòng nhập mật khẩu");
      loginPasswordInput.focus();
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
btnSignup.addEventListener("click",  function() {
  logic.handleSignup()
});
btnLogin.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn trình duyệt gửi biểu mẫu
  logic.handleLogin();
});



