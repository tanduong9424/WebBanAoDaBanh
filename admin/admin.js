/*let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let employee = JSON.parse(localStorage.getItem("employee")) || [];
let customer = JSON.parse(localStorage.getItem("customer")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || [];
*/

//import dữ liệu
let accounts = [
    { id: "TK1", username: "admin", password: "admin", role: "admin", status: "Hợp lế" },
    { id: "TK2", username: "emp1", password: "pass123", role: "Nhân viên", status: "Hợp lệ" },
    { id: "TK3", username: "emp2", password: "pass123", role: "Nhân viên", status: "Không hợp lệ" },
    { id: "TK4", username: "cust1", password: "custpass", role: "Khách hàng", status: "Hợp lệ" },
    { id: "TK5", username: "cust2", password: "custpass", role: "Khách hàng", status: "Hợp lệ" },
    { id: "TK6", username: "cust3", password: "custpass", role: "Khách hàng", status: "Hợp lệ" },
    { id: "TK7", username: "cust4", password: "custpass", role: "Khách hàng", status: "Hợp lệ" },
    { id: "TK8", username: "cust5", password: "custpass", role: "Khách hàng", status: "Hợp lệ" },
    { id: "TK9", username: "cust6", password: "custpass", role: "Khách hàng", status: "Hợp lệ" },
    { id: "TK10", username: "cust7", password: "custpass", role: "Khách hàng", status: "Hợp lệ" }
  ];
  let employee = [
    { manv: "NV1", matk: "TK2", tennv: "Nguyen Van A", sdt: "0123456789", email: "a@gmail.com", luong: 10000000 },
    { manv: "NV2", matk: "TK3", tennv: "Le Thi B", sdt: "0987654321", email: "b@gmail.com", luong: 12000000 }
  ];
  let customer = [
    { makh: "KH1", matk: "TK4", tenkh: "Pham Van C", sdt: "0901234567", email: "c@gmail.com", diachi: "Ha Noi" },
    { makh: "KH2", matk: "TK5", tenkh: "Tran Thi D", sdt: "0912345678", email: "d@gmail.com", diachi: "Ho Chi Minh" },
    { makh: "KH3", matk: "TK6", tenkh: "Hoang Van E", sdt: "0923456789", email: "e@gmail.com", diachi: "Da Nang" },
    { makh: "KH4", matk: "TK7", tenkh: "Nguyen Thi F", sdt: "0934567890", email: "f@gmail.com", diachi: "Hai Phong" },
    { makh: "KH5", matk: "TK8", tenkh: "Le Van G", sdt: "0945678901", email: "g@gmail.com", diachi: "Can Tho" },
    { makh: "KH6", matk: "TK9", tenkh: "Nguyen Thi H", sdt: "0956789012", email: "h@gmail.com", diachi: "Vung Tau" },
    { makh: "KH7", matk: "TK10", tenkh: "Pham Van I", sdt: "0967890123", email: "i@gmail.com", diachi: "Hue" }
  ];
  let products = [
    { masp: "SP1", tensp: "Burger", description: "Delicious burger", size: "M", price: 50000, stock: 100, team: "Local", national: "VN", date_added: "2024-11-10", image_url: "burger.jpg", status: "available" },
    { masp: "SP2", tensp: "Pizza", description: "Cheesy pizza", size: "L", price: 120000, stock: 50, team: "Local", national: "VN", date_added: "2024-11-10", image_url: "pizza.jpg", status: "available" },
    { masp: "SP3", tensp: "Pepsi", description: "Pessi", size: "L", price: 120000, stock: 50, team: "Local", national: "VN", date_added: "2024-11-10", image_url: "pizza.jpg", status: "available" },
    { masp: "SP4", tensp: "Fries", description: "Crispy fries", size: "M", price: 30000, stock: 150, team: "Local", national: "VN", date_added: "2024-11-12", image_url: "fries.jpg", status: "available" },
    { masp: "SP5", tensp: "Coke", description: "Refreshing coke", size: "M", price: 15000, stock: 200, team: "Local", national: "VN", date_added: "2024-11-12", image_url: "coke.jpg", status: "available" },
    { masp: "SP6", tensp: "Chicken Wings", description: "Spicy chicken wings", size: "L", price: 80000, stock: 80, team: "Local", national: "VN", date_added: "2024-11-13", image_url: "wings.jpg", status: "available" },
    { masp: "SP7", tensp: "Salad", description: "Healthy salad", size: "M", price: 40000, stock: 120, team: "Local", national: "VN", date_added: "2024-11-13", image_url: "salad.jpg", status: "available" },
    { masp: "SP8", tensp: "Ice Cream", description: "Creamy dessert", size: "S", price: 25000, stock: 100, team: "Local", national: "VN", date_added: "2024-11-14", image_url: "icecream.jpg", status: "available" },

    // Add more as needed
  ];
  let orders = [
    { madonhang: "DH1", makh: "KH1", thoigianmua: "2024-11-16T04:21:54.645Z", tongtien: 150000, makhuyenmai: "KM1", tthd: "đã giao" },
    { madonhang: "DH2", makh: "KH1", thoigianmua: "2024-11-1", tongtien: 50000, makhuyenmai: "KM2", tthd: "đã giao" },
    { madonhang: "DH3", makh: "KH2", thoigianmua: "2024-11-2", tongtien: 360000, makhuyenmai: null, tthd: "đã hủy" },
    { madonhang: "DH4", makh: "KH2", thoigianmua: "2024-11-3", tongtien: 230000, makhuyenmai: "KM1", tthd: "chưa xử lý" },
    { madonhang: "DH5", makh: "KH3", thoigianmua: "2024-11-4", tongtien: 105000, makhuyenmai: "KM1", tthd: "xác nhận" },
    { madonhang: "DH6", makh: "KH4", thoigianmua: "2024-11-5", tongtien: 125000, makhuyenmai: null, tthd: "đã giao" },
    { madonhang: "DH7", makh: "KH5", thoigianmua: "2024-11-6", tongtien: 155000, makhuyenmai: "KM2", tthd: "đã giao" },
    { madonhang: "DH8", makh: "KH6", thoigianmua: "2024-11-6", tongtien: 165000, makhuyenmai: null, tthd: "đã giao" },
    { madonhang: "DH9", makh: "KH7", thoigianmua: "2024-11-8", tongtien: 180000, makhuyenmai: "KM1", tthd: "đã giao" },
    { madonhang: "DH10", makh: "KH1", thoigianmua: "2024-11-8", tongtien: 100000, makhuyenmai: "KM2", tthd: "đã giao" },
    { madonhang: "DH11", makh: "KH2", thoigianmua: "2024-11-9", tongtien: 200000, makhuyenmai: null, tthd: "chưa xử lý" },
    { madonhang: "DH12", makh: "KH3", thoigianmua: "2024-11-9", tongtien: 150000, makhuyenmai: "KM2", tthd: "chưa xử lý" },
    { madonhang: "DH13", makh: "KH4", thoigianmua: "2024-11-11", tongtien: 220000, makhuyenmai: "KM1", tthd: "đã giao" },
    { madonhang: "DH14", makh: "KH5", thoigianmua: "2024-11-12", tongtien: 180000, makhuyenmai: null, tthd: "đã giao" },
    { madonhang: "DH15", makh: "KH3", thoigianmua: "2024-11-9", tongtien: 150000, makhuyenmai: "KM2", tthd: "đã giao" },
    { madonhang: "DH16", makh: "KH4", thoigianmua: "2024-11-11", tongtien: 220000, makhuyenmai: "KM1", tthd: "đã giao" },
    { madonhang: "DH17", makh: "KH5", thoigianmua: "2024-11-12", tongtien: 180000, makhuyenmai: null, tthd: "đã giao" },
    { madonhang: "DH18", makh: "KH7", thoigianmua: "2024-11-8", tongtien: 180000, makhuyenmai: "KM1", tthd: "đã giao" },
    { madonhang: "DH19", makh: "KH1", thoigianmua: "2024-11-8", tongtien: 100000, makhuyenmai: "KM2", tthd: "đã giao" },
    { madonhang: "DH20", makh: "KH2", thoigianmua: "2024-11-9", tongtien: 200000, makhuyenmai: "", tthd: "đã giao" },
    { madonhang: "DH21", makh: "KH3", thoigianmua: "2024-11-9", tongtien: 150000, makhuyenmai: "KM2", tthd: "đã giao" },

    // Add more to reach 20 orders
];
  let orderDetails = [
    { madonhang: 'DH1', masp: 'SP1', soluong: 2, dongia: 50000, thanhtien: 100000 },
    { madonhang: 'DH1', masp: 'SP2', soluong: 1, dongia: 50000, thanhtien: 50000 },

    { madonhang: 'DH2', masp: 'SP1', soluong: 1, dongia: 50000, thanhtien: 50000 },

    { madonhang: 'DH3', masp: 'SP2', soluong: 3, dongia: 120000, thanhtien: 360000 },

    { madonhang: 'DH4', masp: 'SP1', soluong: 1, dongia: 50000, thanhtien: 50000 },
    { madonhang: 'DH4', masp: 'SP3', soluong: 2, dongia: 90000, thanhtien: 180000 },

    { madonhang: "DH5", masp: "SP4", soluong: 2, dongia: 30000, thanhtien: 60000 },
    { madonhang: "DH5", masp: "SP5", soluong: 3, dongia: 15000, thanhtien: 45000 },

    { madonhang: "DH6", masp: "SP6", soluong: 1, dongia: 80000, thanhtien: 80000 },
    { madonhang: "DH6", masp: "SP7", soluong: 1, dongia: 40000, thanhtien: 40000 },

    { madonhang: "DH7", masp: "SP8", soluong: 2, dongia: 25000, thanhtien: 50000 },
    { madonhang: "DH7", masp: "SP1", soluong: 2, dongia: 50000, thanhtien: 100000 },

    { madonhang: "DH8", masp: "SP2", soluong: 1, dongia: 120000, thanhtien: 120000 },
    { madonhang: "DH8", masp: "SP3", soluong: 1, dongia: 45000, thanhtien: 45000 },

    { madonhang: "DH9", masp: "SP4", soluong: 3, dongia: 30000, thanhtien: 90000 },
    { madonhang: "DH9", masp: "SP5", soluong: 2, dongia: 15000, thanhtien: 30000 },

    { madonhang: "DH10", masp: "SP6", soluong: 2, dongia: 80000, thanhtien: 160000 },
    { madonhang: "DH10", masp: "SP7", soluong: 1, dongia: 40000, thanhtien: 40000 },

    { madonhang: "DH11", masp: "SP8", soluong: 3, dongia: 25000, thanhtien: 75000 },
    { madonhang: "DH11", masp: "SP1", soluong: 2, dongia: 50000, thanhtien: 100000 },

    { madonhang: "DH12", masp: "SP2", soluong: 1, dongia: 120000, thanhtien: 120000 },
    { madonhang: "DH12", masp: "SP3", soluong: 2, dongia: 45000, thanhtien: 90000 },

    { madonhang: "DH13", masp: "SP4", soluong: 2, dongia: 30000, thanhtien: 60000 },
    { madonhang: "DH13", masp: "SP6", soluong: 1, dongia: 80000, thanhtien: 80000 },

    { madonhang: "DH14", masp: "SP7", soluong: 2, dongia: 40000, thanhtien: 80000 },
    { madonhang: "DH14", masp: "SP8", soluong: 2, dongia: 25000, thanhtien: 50000 },

    // Add more details based on orders
  ];
            
  
  
//Định dạng giờ
function formatDateVietnam(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return "Ngày không hợp lệ";

    return date.toLocaleDateString("vi-VN"); // Định dạng ngày kiểu Việt Nam
}

// Sử dụng password default nếu như chưa có thông tin trong local storage
if (!localStorage.getItem("adminCredentials")) {
    const defaultCredentials = {
        username: "admin",
        password: "admin"
    };
    localStorage.setItem("adminCredentials", JSON.stringify(defaultCredentials));
}


//Đổi pass admin
function updateAdminPassword(newPassword) {
    let storedCredentials = JSON.parse(localStorage.getItem("adminCredentials")) || {};
    storedCredentials.password = newPassword;
    localStorage.setItem("adminCredentials", JSON.stringify(storedCredentials));
    console.log("Updated admin credentials:", storedCredentials);
    alert("Password updated successfully!");
}


function changePassword() {
    const newPassword = document.getElementById("newAdminPassword").value;
    if (newPassword) {
        updateAdminPassword(newPassword);  // Call update function to save the new password
        document.getElementById("changePasswordForm").style.display = "none";  // Hide form after update
    } else {
        alert("Please enter a new password.");
    }
}


//Đăng nhập
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const userAccount = accounts.find(account => account.username === username && account.password === password);

    if (!userAccount) {
        alert("Thông tin đăng nhập không đúng!");
        return;
    }

    if (userAccount.role === "admin") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInRole", "admin");
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("tab_menu").style.display = "block";
        document.getElementById("main_content").style.display = "block";
        document.getElementById("logoutButton").style.display = "block";
    } else if (userAccount.role === "Nhân viên" && userAccount.status === "Hợp lệ") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInRole", "Nhân viên");
        window.location.href = "http://127.0.0.1:5501/employee/"; // Chuyển sang giao diện nhân viên
    } else if (userAccount.role === "Khách hàng") {
        alert("Đây là form đăng nhập dành cho Admin/Nhân viên!");
    } else if (userAccount.status === "Không hợp lệ"){
        alert("Tài khoản bị khóa!")
    }
}



// Đảm bảo đúng ID của form đăng nhập
document.getElementById("loginPage").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        login(); // Gọi hàm đăng nhập
    }
});


window.onload = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loggedInRole = localStorage.getItem("loggedInRole"); // Lấy vai trò đăng nhập từ localStorage

    console.log("isLoggedIn:", isLoggedIn); // Kiểm tra trạng thái đăng nhập
    console.log("loggedInRole:", loggedInRole); // Kiểm tra vai trò đã lưu

    if (!isLoggedIn || loggedInRole !== "admin") {
        console.log("Hiển thị form đăng nhập");
        document.getElementById("loginPage").style.display = "flex";
        document.getElementById("tab_menu").style.display = "none";
        document.getElementById("main_content").style.display = "none";
        document.getElementById("logoutButton").style.display = "none";
    } else {
        console.log("Hiển thị giao diện admin");
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("tab_menu").style.display = "block";
        document.getElementById("main_content").style.display = "block";
        document.getElementById("logoutButton").style.display = "block";
        renderAccounts();
    }
};




function logout() {
    localStorage.setItem("isLoggedIn", "false");  // Reset login status
    location.reload();  // Reload to show the login screen
}



// Hiển thị danh sách tài khoản
function renderAccounts() {
    const container = document.getElementById("accounts_container");
    container.innerHTML = '';
    accounts.forEach((account, index) => {
        if (!account.isHidden) {  // Only render accounts that are not hidden
            const accountEl = createAccountElement(account, index);
            container.appendChild(accountEl);
        }
    });
}


//Lọc tài khoản
function applyFilters() {
    const searchQuery = document.getElementById("searchAccount").value.toLowerCase();
    const selectedType = document.getElementById("accountTypeFilter").value;
    const showLocked = document.getElementById("showLockedAccounts").checked;

    // Lọc tài khoản
    const filteredAccounts = accounts.filter(account => {
        const matchesSearch = account.username.toLowerCase().includes(searchQuery);
        const matchesType = selectedType ? account.role === selectedType : true;
        const matchesStatus = showLocked ? account.status === "Không hợp lệ" : true;

        return matchesSearch && matchesType && matchesStatus && !account.isHidden;
    });

    renderFilteredAccounts(filteredAccounts);
}



//Xem thông tin chi tiết của tài khoản
function viewAccountDetails(index) {
    const account = accounts[index];
    let detailContent = '';

    if (account.role === 'Nhân viên') {
        const emp = employee.find(e => e.matk === account.id);  // So sánh với account.id
        if (emp) {
            detailContent = `
                <p><strong>Mã nhân viên:</strong> ${emp.manv}</p>
                <p><strong>Tên nhân viên:</strong> ${emp.tennv}</p>
                <p><strong>SĐT:</strong> ${emp.sdt}</p>
                <p><strong>Email:</strong> ${emp.email}</p>
                <p><strong>Lương:</strong> ${emp.luong}</p>
            `;
        } else {
            detailContent = `<p>Thông tin nhân viên không tìm thấy.</p>`;
        }
    } else if (account.role === 'Khách hàng') {
        const cust = customer.find(c => c.matk === account.id);  // So sánh với account.id
        if (cust) {
            detailContent = `
                <p><strong>Mã khách hàng:</strong> ${cust.makh}</p>
                <p><strong>Tên khách hàng:</strong> ${cust.tenkh}</p>
                <p><strong>SĐT:</strong> ${cust.sdt}</p>
                <p><strong>Email:</strong> ${cust.email}</p>
                <p><strong>Địa chỉ:</strong> ${cust.diachi}</p>
            `;
        } else {
            detailContent = `<p>Thông tin khách hàng không tìm thấy.</p>`;
        }
    }

    document.getElementById("detailContent").innerHTML = detailContent;
    document.getElementById("detailModal").style.display = "block";
}



//Nút đóng bảng thông tin chi tiết
function closeModal() {
    document.getElementById("detailModal").style.display = "none";
}


// Tạo phần tử hiển thị tài khoản
// Cập nhật nút trong hàm tạo phần tử tài khoản
function createAccountElement(account, originalIndex) {
    const actionButtons = account.role === 'admin'
        ? `<button class="edit" onclick="editAccount(${originalIndex})">Sửa</button>`
        : `
            <button class="view-detail" onclick="viewAccountDetails(${originalIndex})">Xem chi tiết</button>
            <button class="edit" onclick="editAccount(${originalIndex})">Sửa</button>
            <button class="delete" onclick="deleteAccount(${originalIndex})">Xóa</button>
        `;

    const accountEl = document.createElement("div");
    accountEl.className = "account";
    accountEl.innerHTML = `
        <span>Mã tài khoản: ${account.id}</span>
        <span>Tên đăng nhập: ${account.username}</span>
        <span>Loại: ${account.role}</span>
        <span>Trạng thái: ${account.status}</span>
        <div>
            ${actionButtons}
        </div>
    `;

    return accountEl;
}




// Hiển thị form thêm tài khoản
function showAddAccountForm() {
    // Đặt tiêu đề form và hiện form
    document.getElementById("formTitle").innerText = "Thêm Tài Khoản Nhân Viên";
    document.getElementById("accountForm").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("status").value = "Hợp lệ";
}

// Lưu tài khoản mới
function saveAccount() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const salary = document.getElementById("salary").value;
    const status = document.getElementById("status").value;

    if (!isUniqueUsername(username)) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
    }
    if (!isValidPhone(phone)) {
        alert("Số điện thoại phải gồm 10 số và bắt đầu bằng số 0!");
        return;
    }
    if (!isValidEmail(email)) {
        alert("Email không hợp lệ!");
        return;
    }

    const accountId = `TK${accounts.length + 1}`;
    const newAccount = { id: accountId, username, password, role: "Nhân viên", status, isHidden: false };
    accounts.push(newAccount);

    const empId = `NV${employee.length + 1}`;
    employee.push({ matk: accountId, manv: empId, tennv: name, sdt: phone, email, luong: salary, isHidden: false });

    saveData();
    renderAccounts();
    cancelForm();
}

// Hủy form thêm hoặc sửa tài khoản
function cancelForm() {
    // Ẩn form và đưa các trường về trạng thái ban đầu
    document.getElementById("accountForm").style.display = "none";
    document.getElementById("editAdminForm").style.display = "none";
    document.getElementById("editEmployeeForm").style.display = "none";
    document.getElementById("editCustomerForm").style.display = "none";
}

// Hiển thị form sửa tài khoản
function showEditAccountForm(index) {
    const account = accounts[index];
    const emp = employee.find(e => e.matk === account.id);
    const cust = customer.find(c => c.matk === account.id);

    // Ẩn tất cả form trước khi hiển thị form phù hợp
    document.getElementById("editAdminForm").style.display = "none";
    document.getElementById("editEmployeeForm").style.display = "none";
    document.getElementById("editCustomerForm").style.display = "none";

    if (account.role === "admin") {
        // Hiển thị form sửa Admin
        document.getElementById("editAdminForm").style.display = "block";
        document.getElementById("adminPassword").value = account.password;
    } else if (account.role === "Nhân viên") {
        // Hiển thị form sửa Nhân viên
        document.getElementById("editEmployeeForm").style.display = "block";
        document.getElementById("empUsername").value = account.username;
        document.getElementById("empPassword").value = account.password;
        document.getElementById("empStatus").value = account.status;

        if (emp) {
            document.getElementById("empName").value = emp.tennv;
            document.getElementById("empPhone").value = emp.sdt;
            document.getElementById("empEmail").value = emp.email;
            document.getElementById("empSalary").value = emp.luong;
        }
    } else if (account.role === "Khách hàng") {
        // Hiển thị form sửa Khách hàng
        document.getElementById("editCustomerForm").style.display = "block";
        document.getElementById("custUsername").value = account.username;
        document.getElementById("custPassword").value = account.password;

        if (cust) {
            document.getElementById("custName").value = cust.tenkh;
            document.getElementById("custPhone").value = cust.sdt;
            document.getElementById("custEmail").value = cust.email;
            document.getElementById("custAddress").value = cust.diachi;
        }
    }

    // Lưu lại chỉ số tài khoản đang chỉnh sửa
    editAccountIndex = index;
}



// Cập nhật tài khoản
function updateAccount(index) {
    const account = accounts[index];
    const password = document.getElementById("password").value;
    const status = document.getElementById("status").value;

    // Cập nhật thông tin cơ bản của tài khoản
    account.password = password;
    account.status = status;

    // Nếu tài khoản là nhân viên, cập nhật thông tin nhân viên
    if (account.role === "Nhân viên") {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const salary = document.getElementById("salary").value;

        const emp = employee.find(e => e.matk === account.id);
        if (emp) {
            emp.tennv = name;
            emp.sdt = phone;
            emp.email = email;
            emp.luong = salary;
        }
    }

    // Nếu tài khoản là khách hàng, cập nhật thông tin khách hàng
    if (account.role === "Khách hàng") {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        const cust = customer.find(c => c.matk === account.id);
        if (cust) {
            cust.tenkh = name;
            cust.sdt = phone;
            cust.email = email;
            cust.diachi = address;
        }
    }

    saveData();
    renderAccounts();
    cancelForm();
}

function updateAdminAccount() {
    const newPassword = document.getElementById("adminPassword").value;

    // Update the password in adminCredentials in localStorage
    updateAdminPassword(newPassword);

    // Find the admin account in the accounts array
    const adminAccount = accounts.find(account => account.role === "admin");
    if (adminAccount) {
        adminAccount.password = newPassword;  // Update the password in accounts array
    }

    // Save the updated accounts array to localStorage
    saveData();
    renderAccounts();
    alert("Admin password updated successfully.");
    cancelForm();  // Close the form
}



function updateEmployeeAccount() {
    const account = accounts[editAccountIndex];
    const emp = employee.find(e => e.matk === account.id);

    const newPassword = document.getElementById("empPassword").value;
    const newStatus = document.getElementById("empStatus").value;
    const newName = document.getElementById("empName").value;
    const newPhone = document.getElementById("empPhone").value;
    const newEmail = document.getElementById("empEmail").value;
    const newSalary = document.getElementById("empSalary").value;

    // Kiểm tra tính hợp lệ của số điện thoại
    if (!isValidPhone(newPhone)) {
        alert("Số điện thoại phải gồm 10 số và bắt đầu bằng số 0!");
        return;
    }

    // Kiểm tra tính hợp lệ của email
    if (!isValidEmail(newEmail)) {
        alert("Email không hợp lệ!");
        return;
    }

    // Cập nhật thông tin tài khoản
    account.password = newPassword;
    account.status = newStatus;

    // Cập nhật thông tin nhân viên
    if (emp) {
        emp.tennv = newName;
        emp.sdt = newPhone;
        emp.email = newEmail;
        emp.luong = newSalary;
    }

    saveData();
    renderAccounts();
    cancelForm();
}


function updateCustomerAccount() {
    const account = accounts[editAccountIndex];
    const cust = customer.find(c => c.matk === account.id);

    const newPassword = document.getElementById("custPassword").value;
    const newName = document.getElementById("custName").value;
    const newPhone = document.getElementById("custPhone").value;
    const newEmail = document.getElementById("custEmail").value;
    const newAddress = document.getElementById("custAddress").value;

    // Kiểm tra tính hợp lệ của số điện thoại
    if (!isValidPhone(newPhone)) {
        alert("Số điện thoại phải gồm 10 số và bắt đầu bằng số 0!");
        return;
    }

    // Kiểm tra tính hợp lệ của email
    if (!isValidEmail(newEmail)) {
        alert("Email không hợp lệ!");
        return;
    }

    // Cập nhật thông tin tài khoản
    account.password = newPassword;

    // Cập nhật thông tin khách hàng
    if (cust) {
        cust.tenkh = newName;
        cust.sdt = newPhone;
        cust.email = newEmail;
        cust.diachi = newAddress;
    }

    saveData();
    renderAccounts();
    cancelForm();
}



function addAccount() {
    isEditMode = false; 
    showAddAccountForm(); // Hiển thị form thêm tài khoản
}

function editAccount(index) {
    isEditMode = true;
    editAccountIndex = index;
    showEditAccountForm(index);  // Hiển thị form sửa tài khoản
}


// Xóa tài khoản
function deleteAccount(index) {
    if (confirm("Bạn có chắc chắn muốn xóa tài khoản này?")) {
        accounts[index].isHidden = true;  // Set isHidden to true instead of deleting
        saveData();
        applyFilters(); // Hiển thị danh sách tài khoản đã lọc lại
        //renderAccounts();  // Refresh the displayed list
    }
}



// Cập nhật hàm renderFilteredAccounts để hiển thị danh sách đã lọc
function renderFilteredAccounts(filteredAccounts) {
    const container = document.getElementById("accounts_container");
    container.innerHTML = ''; // Xóa nội dung trước đó

    filteredAccounts.forEach((account, filteredIndex) => {
        const originalIndex = accounts.findIndex(acc => acc.id === account.id);
        const accountEl = createAccountElement(account, originalIndex); // Truyền chỉ số gốc
        container.appendChild(accountEl);
    });
}


function filterLockedAccounts() {
    const showLocked = document.getElementById("showLockedAccounts").checked;
    const filteredAccounts = showLocked
        ? accounts.filter(account => account.status === "Không hợp lệ")
        : accounts; // Hiển thị tất cả nếu không chọn lọc

    renderFilteredAccounts(filteredAccounts);
}
//Hiển thị tài khoản đã ẩn
function showHiddenAccounts() {
    document.getElementById("account_panel").style.display = "none";  // Hide main accounts panel
    document.getElementById("hiddenAccountsPanel").style.display = "flex";  // Show hidden accounts panel
    renderHiddenAccounts();
}

function showMainAccounts() {
    document.getElementById("account_panel").style.display = "block";  // Show main accounts panel
    document.getElementById("hiddenAccountsPanel").style.display = "none";  // Hide hidden accounts panel
}


function renderHiddenAccounts() {
    const container = document.getElementById("hiddenAccountsContainer");
    container.innerHTML = '';  // Clear previous content

    accounts.forEach((account, index) => {
        if (account.isHidden) {  // Only show hidden accounts
            const accountEl = document.createElement("div");
            accountEl.className = "account";
            accountEl.innerHTML = `
                <span>Mã tài khoản: ${account.id}</span>
                <span>Tên đăng nhập: ${account.username}</span>
                <span>Loại: ${account.role}</span>
                <span>Trạng thái: ${account.status}</span>
                <div>
                    <button onclick="restoreAccount(${index})">Khôi phục</button>
                </div>
            `;
            //<button onclick="viewAccountDetails(${index})">Xem chi tiết</button>
            container.appendChild(accountEl);
        }
    });
}
function restoreAccount(index) {
    accounts[index].isHidden = false;  // Set isHidden to false to restore the account
    saveData();
    renderHiddenAccounts();  // Refresh the hidden accounts view
    renderAccounts();  // Refresh the main accounts view to show the restored account
}




// Lưu dữ liệu vào localStorage
function saveData() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("employee", JSON.stringify(employee));
    localStorage.setItem("customer", JSON.stringify(customer));
}

// Chuyển đổi giữa các panel
function showPanel(panelId, event) {
    event.preventDefault();

    // Ẩn tất cả các panel
    const panels = ['account_panel', 'statistics_panel', 'orders_panel'];
    panels.forEach(panel => {
        const panelElement = document.getElementById(panel);
        if (panelElement) {
            panelElement.style.display = "none";
        }
    });

    // Hiển thị panel được chọn
    const selectedPanel = document.getElementById(`${panelId}_panel`);
    if (selectedPanel) {
        selectedPanel.style.display = "block";
    }
}



// Khởi tạo dữ liệu và hiển thị
window.onload = () => {
    applyFilters();
    renderOrders();
    setMaxDate();
};

// Kiểm tra tên đăng nhập duy nhất
function isUniqueUsername(username) {
    return !accounts.some(account => account.username === username);
}


// Kiểm tra tính hợp lệ của số điện thoại
function isValidPhone(phone) {
    return /^0\d{9}$/.test(phone); // Bắt đầu bằng '0' và có 10 chữ số
}

// Kiểm tra tính hợp lệ của email
function isValidEmail(email) {
    return email.includes('@');
}

// Hàm để kiểm tra nếu currentDate nằm trong khoảng từ startDate đến endDate
function isSameDayOrInRange(date, startDate, endDate) {
    // Đặt giờ phút giây của cả ba ngày về 0 để so sánh chỉ phần ngày
    date.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    return (date >= startDate && date <= endDate);
}

//Thống kê
function generateStatistics() {
    // Gắn danh sách sản phẩm vào từng đơn hàng
    orders.forEach(order => {
        // Lọc sản phẩm liên quan đến đơn hàng này từ orderDetails
        const productsInOrder = orderDetails.filter(detail => detail.madonhang === order.madonhang);

        // Gắn danh sách sản phẩm vào từng đơn hàng
        order.sanpham = productsInOrder.map(detail => {
            // Tìm thông tin chi tiết của sản phẩm từ bảng products
            const productInfo = products.find(product => product.masp === detail.masp);
            return {
                ...detail, // Giữ lại thông tin từ orderDetails
                tensp: productInfo ? productInfo.tensp : "Sản phẩm không xác định", // Thêm tên sản phẩm
            };
        });
    });

    console.log("Orders with Products:", orders);

    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    if (isNaN(startDate) || isNaN(endDate)) {
        alert("Vui lòng chọn khoảng thời gian hợp lệ.");
        return;
    }
    // Filter orders within the specified time range and successfully delivered orders
    const filteredOrders = orders.filter(orders => {
        const orderDate = new Date(orders.thoigianmua);
        return orderDate >= startDate && orderDate <= endDate && orders.tthd === 'đã giao';
    });
    if (filteredOrders.length === 0) {
        alert("Không có đơn hàng nào trong khoảng thời gian này.");
        return;
    }
    console.log("Filtered Orders:", filteredOrders);
    // Gắn sản phẩm vào từng đơn hàng
    const enrichedOrders = filteredOrders.map(order => {
        const productsInOrder = orderDetails.filter(detail => detail.madonhang === order.madonhang) || [];
        return { ...order, sanpham: Array.isArray(productsInOrder) ? productsInOrder : [] };
    });
    
    console.log("Enriched Orders with Products:", enrichedOrders);
    enrichedOrders.forEach(order => console.log(`Order ${order.madonhang} Products:`, order.sanpham));
    
    // Calculate customer statistics (revenue per customer)
    const topCustomers = calculateCustomerStatistics(filteredOrders);

    // Render customer statistics (top 5 customers)
    renderCustomerStatistics(topCustomers);

    // Calculate product statistics (top 5 products sold most and least)
    const { topSellingProducts, worstSellingProducts } = calculateProductStatistics(filteredOrders);

    // Render product statistics (top 5 products)
    renderProductStatistics(topSellingProducts, worstSellingProducts);
}



//Thống kê sản phẩm
function calculateProductStatistics(enrichedOrders) {
    // Tạo mảng thống kê dựa trên danh sách sản phẩm
    const productSales = products.map(product => {
        // Lấy tất cả các chi tiết đơn hàng liên quan đến sản phẩm này
        const filteredProductsInOrders = enrichedOrders.flatMap(order => {
            if (!Array.isArray(order.sanpham)) {
                console.error(`Invalid product list in order ${order.madonhang}:`, order.sanpham);
                return [];
            }
            return order.sanpham.filter(item => item.masp === product.masp);
        });

        // Tính tổng số lượng bán và doanh thu
        const totalQuantitySold = filteredProductsInOrders.reduce((sum, item) => sum + (item.soluong || 0), 0);
        const totalRevenue = filteredProductsInOrders.reduce((sum, item) => sum + (item.thanhtien || 0), 0);

        return {
            masp: product.masp,
            tensp: product.tensp,
            quantitySold: totalQuantitySold,
            revenue: totalRevenue
        };
    });

    console.log("Product Sales after calculation:", productSales);

    // Lấy top 5 sản phẩm bán chạy nhất và ít nhất
    const topSellingProducts = [...productSales].sort((a, b) => b.quantitySold - a.quantitySold).slice(0, 5);
    const worstSellingProducts = [...productSales].sort((a, b) => a.quantitySold - b.quantitySold).slice(0, 5);

    return { topSellingProducts, worstSellingProducts };
}



function renderProductStatistics(topSellingProducts, worstSellingProducts) {
    const productStatsContainer = document.getElementById("productStatistics");
    productStatsContainer.innerHTML = "";

    // Tính tổng thu trên tất cả sản phẩm
    const totalRevenue = topSellingProducts.reduce((sum, product) => sum + product.revenue, 0);

    // Hiển thị tổng thu
    const totalRevenueEl = document.createElement("div");
    totalRevenueEl.style.fontWeight = "bold";
    totalRevenueEl.style.margin = "10px 0";
    totalRevenueEl.style.fontSize = "1.2em";
    totalRevenueEl.textContent = `Tổng thu trên tất cả sản phẩm: ${totalRevenue} đồng`;
    productStatsContainer.appendChild(totalRevenueEl);

    // Tạo bảng cho sản phẩm bán chạy nhất
    const tableTop = createProductTableWithInvoices("Top 5 Sản Phẩm Bán Chạy Nhất", topSellingProducts);
    productStatsContainer.appendChild(tableTop);

    // Tạo bảng cho sản phẩm bán ít nhất
    const tableWorst = createProductTableWithInvoices("Top 5 Sản Phẩm Bán Ít Nhất", worstSellingProducts);
    productStatsContainer.appendChild(tableWorst);
}


function createProductTable(title, products) {
    const table = document.createElement("table");

    // Tạo tiêu đề với thẻ caption
    const caption = document.createElement("caption");
    caption.className = "table-caption"; // Áp dụng CSS đã thêm
    caption.textContent = title;

    table.innerHTML = `
        <thead>
            <tr>
                <th>Thứ tự</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng bán</th>
                <th>Tổng tiền</th>
            </tr>
        </thead>
        <tbody>
            ${products.map((product, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.masp}</td>
                    <td>${product.tensp}</td>
                    <td>${product.quantitySold}</td>
                    <td>${product.revenue} đồng</td>
                </tr>
            `).join("")}
        </tbody>
    `;

    table.prepend(caption); // Thêm caption vào đầu bảng

    return table;
}
function createProductTableWithInvoices(title, products) {
    const table = document.createElement("table");

    // Tạo tiêu đề
    const caption = document.createElement("caption");
    caption.className = "table-caption";
    caption.textContent = title;

    table.innerHTML = `
        <thead>
            <tr>
                <th>Thứ tự</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng bán</th>
                <th>Tổng tiền</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            ${products.map((product, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.masp}</td>
                    <td>${product.tensp}</td>
                    <td>${product.quantitySold}</td>
                    <td>${product.revenue} đồng</td>
                    <td>
                        <button onclick="viewInvoices('${product.masp}')">Xem hóa đơn</button>
                    </td>
                </tr>
            `).join("")}
        </tbody>
    `;

    table.prepend(caption); // Thêm tiêu đề vào đầu bảng
    return table;
}
function viewInvoices(masp) {
    const invoices = orders.filter(order =>
        orderDetails.some(detail => detail.masp === masp && detail.madonhang === order.madonhang)
    );

    if (invoices.length === 0) {
        alert("Không tìm thấy hóa đơn nào liên quan đến sản phẩm này.");
        return;
    }

    // Hiển thị danh sách hóa đơn
    const invoiceList = invoices.map(order => `
        <p>Hóa đơn: ${order.madonhang}</p>
        <p>Khách hàng: ${order.makh}</p>
        <p>Thời gian mua: ${new Date(order.thoigianmua).toLocaleDateString("vi-VN")}</p>
        <p>Tổng tiền: ${order.tongtien} đồng</p>
        <hr>
    `).join("");

    const modalContent = `
        <h3>Hóa đơn liên quan đến sản phẩm: ${masp}</h3>
        ${invoiceList}
    `;

    // Hiển thị modal
    const modal = document.getElementById("detailModal");
    document.getElementById("detailContent").innerHTML = modalContent;
    modal.style.display = "block";
}



function calculateCustomerStatistics(filteredOrders) {
    // Giả sử customers là mảng chứa thông tin khách hàng đã được định nghĩa ở nơi khác
    const customerRevenue = customer.map(customer => {
        // Lọc các hóa đơn của khách hàng trong thời gian đã chọn
        const totalRevenue = filteredOrders
            .filter(orders => orders.makh === customer.makh)  // Lọc hóa đơn theo mã khách hàng
            .reduce((sum, orders) => sum + orders.tongtien, 0);  // Tính tổng tiền từ các hóa đơn

        return { ...customer, revenue: totalRevenue };  // Trả về thông tin khách hàng kèm theo tổng doanh thu
    });

    // Sắp xếp khách hàng theo tổng tiền giảm dần
    const topCustomers = customerRevenue
        .sort((a, b) => b.revenue - a.revenue)  // Sắp xếp giảm dần theo doanh thu
        .slice(0, 5);  // Lấy top 5 khách hàng

    return topCustomers;
}
// Render customer statistics
function renderCustomerStatistics(topCustomers) {
    const customerStatsContainer = document.getElementById("customerStatistics");

    // Clear previous content
    customerStatsContainer.innerHTML = `<h3>Top 5 Khách Hàng Mua Nhiều Nhất</h3>`;

    // Create table element
    const table = document.createElement('table');
    
    // Create table header
    const headerRow = document.createElement('tr');
    const headers = ['Thứ tự', 'Mã khách hàng', 'Tên khách hàng', 'Số điện thoại', 'Email', 'Địa chỉ', 'Tổng tiền'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Loop through top customers and generate table rows
    topCustomers.forEach((customer, index) => {
        const row = document.createElement('tr');
        const customerData = [
            index + 1,
            customer.makh,
            customer.tenkh,
            customer.sdt,
            customer.email,
            customer.diachi,
            `${customer.revenue} đồng`
        ];
        
        customerData.forEach(data => {
            const td = document.createElement('td');
            td.textContent = data;
            row.appendChild(td);
        });
        
        table.appendChild(row);
    });

    customerStatsContainer.appendChild(table);
}



function setMaxDate() {
    const today = new Date().toISOString().split('T')[0];  // Format as YYYY-MM-DD
    // Giới hạn ngày cho các trường liên quan
    document.getElementById("orderFilterDateFrom").setAttribute("max", today);
    document.getElementById("orderFilterDateTo").setAttribute("max", today);
    document.getElementById("endDate").setAttribute("max", today);
}
function validateDates() {
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const today = new Date();

    // Check if start date is before end date
    if (startDateInput.value && endDateInput.value) {
        if (startDate >= endDate) {
            alert("Ngày bắt đầu phải trước ngày kết thúc.");
            startDateInput.value = "";  // Clear invalid date
            return;
        }
    }

    // Check if end date is before today
    if (endDate >= today) {
        alert("Ngày kết thúc phải trước ngày thực hiện thống kê.");
        endDateInput.value = "";  // Clear invalid date
        return;
    }
}
// Hiển thị danh sách đơn hàng
function renderOrders() {
    const container = document.getElementById("orders_container");
    container.innerHTML = ''; // Xóa nội dung cũ

    orders.forEach(order => {

        const orderEl = document.createElement("div");
        orderEl.className = "order";
        orderEl.innerHTML = `
            <span>Mã đơn hàng: ${order.madonhang}</span>
            <span>Khách hàng: ${order.makh}</span>
            <span>Ngày mua: ${new Date(order.thoigianmua).toLocaleDateString("vi-VN")}</span>
            <span>Tổng tiền: ${order.tongtien} VND</span>
            <span>Tình trạng: ${order.tthd}</span>
            <button class="view-detail" onclick="viewOrderDetails('${order.madonhang}')">Xem chi tiết</button>
            <button class="edit" onclick="editOrder('${order.madonhang}')">Sửa</button>
        `;
        container.appendChild(orderEl);
    });
}

let editOrderIndex = -1;

function editOrder(orderId) {
    const order = orders.find(o => o.madonhang === orderId);

    if (!order) {
        alert("Không tìm thấy đơn hàng!");
        return;
    }

    editOrderIndex = orders.indexOf(order);
    document.getElementById("orderStatus").value = order.tthd;

    // Cập nhật tùy chọn trạng thái dựa trên trạng thái hiện tại
    const statusSelect = document.getElementById("orderStatus");
    statusSelect.innerHTML = ""; // Xóa các tùy chọn cũ

    if (order.tthd === "chưa xử lý") {
        statusSelect.innerHTML = `
            <option value="chưa xử lý">Chưa xử lý</option>
            <option value="đã hủy">Đã hủy</option>
            <option value="xác nhận">Xác nhận</option>
        `;
    } else if (order.tthd === "xác nhận") {
        statusSelect.innerHTML = `
            <option value="xác nhận">Xác nhận</option>
            <option value="đã giao">Đã giao</option>
            <option value="đã hủy">Đã hủy</option>
        `;
    } else {
        // Nếu là "đã hủy" hoặc "đã giao thành công", không hiển thị các tùy chọn khác
        statusSelect.innerHTML = `<option value="${order.tthd}">${order.tthd}</option>`;
    }

    // Hiển thị modal sửa đơn hàng
    document.getElementById("editOrderModal").style.display = "block";
}



function saveOrderChanges() {
    const newStatus = document.getElementById("orderStatus").value;
    const order = orders[editOrderIndex];

    // Ràng buộc thay đổi trạng thái
    if (order.tthd === "chưa xử lý" && !(newStatus === "đã hủy" || newStatus === "xác nhận")) {
        alert("Trạng thái 'chưa xử lý' chỉ có thể chuyển sang 'đã hủy' hoặc 'xác nhận'!");
        return;
    }

    if (order.tthd === "đã hủy" || order.tthd === "đã giao") {
        alert(`Trạng thái '${order.tthd}' không thể thay đổi!`);
        return;
    }

    if (order.tthd === "xác nhận" && !(newStatus === "đã giao" || newStatus === "đã hủy")) {
        alert("Trạng thái 'xác nhận' chỉ có thể chuyển sang 'đã giao' hoặc 'đã hủy'!");
        return;
    }

    // Cập nhật trạng thái nếu hợp lệ
    order.tthd = newStatus;

    // Lưu thay đổi và đóng modal
    saveData();
    renderOrders();
    closeEditOrderModal();
}

function closeEditOrderModal() {
    // Ẩn modal sửa đơn hàng
    document.getElementById("editOrderModal").style.display = "none";

    // Xóa trạng thái tạm thời
    editOrderIndex = -1; 
}


// Lọc đơn hàng theo tình trạng và thời gian
function filterOrders() {
    const status = document.getElementById("orderFilterStatus").value;
    const dateFrom = document.getElementById("orderFilterDateFrom").value;
    const dateTo = document.getElementById("orderFilterDateTo").value;

    const filteredOrders = orders.filter(order => {
        const matchesStatus = status ? order.tthd === status : true;
        const orderDate = new Date(order.thoigianmua);
        const matchesDateFrom = dateFrom ? new Date(dateFrom) <= orderDate : true;
        const matchesDateTo = dateTo ? orderDate <= new Date(dateTo) : true;

        return matchesStatus && matchesDateFrom && matchesDateTo;
    });

    renderFilteredOrders(filteredOrders);
}


// Hiển thị danh sách đơn hàng đã lọc
function renderFilteredOrders(filteredOrders) {
    const container = document.getElementById("orders_container");
    container.innerHTML = ''; // Xóa nội dung cũ

    filteredOrders.forEach(order => {

        const orderEl = document.createElement("div");
        orderEl.className = "order";
        orderEl.innerHTML = `
            <span>Mã đơn hàng: ${order.madonhang}</span>
            <span>Khách hàng: ${order.makh}</span>
            <span>Ngày mua: ${new Date(order.thoigianmua).toLocaleDateString("vi-VN")}</span>
            <span>Tổng tiền: ${order.tongtien} VND</span>
            <span>Tình trạng: ${order.tthd}</span>
            <button class="view-detail" onclick="viewOrderDetails('${order.madonhang}')">Xem chi tiết</button>
            <button class="edit" onclick="editOrder('${order.madonhang}')">Sửa</button>            
        `;
        container.appendChild(orderEl);
    });
}



// Xem chi tiết đơn hàng
function viewOrderDetails(madonhang) {
    // Tìm đơn hàng trong danh sách gốc (orders)
    const order = orders.find(o => o.madonhang === madonhang);
    if (!order) {
        alert("Không tìm thấy thông tin đơn hàng.");
        return;
    }

    // Tìm chi tiết sản phẩm liên quan đến đơn hàng
    const details = orderDetails.filter(detail => detail.madonhang === madonhang);

    let detailContent = `
        <h3>Chi tiết đơn hàng: ${order.madonhang}</h3>
        <p><strong>Khách hàng:</strong> ${order.makh}</p>
        <p><strong>Ngày mua:</strong> ${new Date(order.thoigianmua).toLocaleDateString("vi-VN")}</p>
        <p><strong>Tổng tiền:</strong> ${order.tongtien} VND</p>
        <p><strong>Tình trạng:</strong> ${order.tthd}</p>
        <hr>
        <h4>Sản phẩm:</h4>
        <ul>
    `;

    details.forEach(detail => {
        const product = products.find(p => p.masp === detail.masp);
        detailContent += `
            <li>${product.tensp} - Số lượng: ${detail.soluong}, Đơn giá: ${detail.dongia} VND</li>
        `;
    });

    detailContent += `</ul>`;
    document.getElementById("detailContent").innerHTML = detailContent;
    document.getElementById("detailModal").style.display = "block";
}


//Ràng buộc ngày cho quản lý đơn hàng
function validateOrderDates() {
    const startDateInput = document.getElementById("orderFilterDateFrom");
    const endDateInput = document.getElementById("orderFilterDateTo");

    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const today = new Date();

    // Kiểm tra nếu "Từ ngày" lớn hơn "Đến ngày"
    if (startDateInput.value && endDateInput.value) {
        if (startDate > endDate) {
            alert("Ngày bắt đầu phải trước hoặc bằng ngày kết thúc.");
            startDateInput.value = ""; // Xóa giá trị không hợp lệ
            return;
        }
    }

    // Kiểm tra nếu "Đến ngày" vượt quá hôm nay
    if (endDateInput.value && endDate > today) {
        alert("Ngày kết thúc không được vượt quá hôm nay.");
        endDateInput.value = ""; // Xóa giá trị không hợp lệ
        return;
    }
}


