let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let employee = JSON.parse(localStorage.getItem("employee")) || [];
let customer = JSON.parse(localStorage.getItem("customer")) || [];
let promotions = JSON.parse(localStorage.getItem("promotions")) || [];

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

    const storedCredentials = JSON.parse(localStorage.getItem("adminCredentials")) || {};

    // Validate credentials
    if (username === storedCredentials.username && password === storedCredentials.password) {
        localStorage.setItem("isLoggedIn", "true");  // Set session as logged in
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("tab_menu").style.display = "block";
        document.getElementById("main_content").style.display = "block";
        document.getElementById("logoutButton").style.display = "block";
    } else {
        alert("Invalid credentials");
        localStorage.setItem("isLoggedIn", "false");  // Ensure isLoggedIn is false on failed login
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
    // Check if user is logged in; default to false if not set
    if (localStorage.getItem("isLoggedIn") !== "true") {
        localStorage.setItem("isLoggedIn", "false");
        document.getElementById("loginPage").style.display = "flex";  // Show login page
        document.getElementById("tab_menu").style.display = "none";  // Hide dashboard content
        document.getElementById("main_content").style.display = "none";
        document.getElementById("logoutButton").style.display = "none";
    } else {
        // User is logged in, display dashboard content
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("tab_menu").style.display = "block";
        document.getElementById("main_content").style.display = "block";
        document.getElementById("logoutButton").style.display = "block";
        renderAccounts();
        renderPromotions();
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
function filterAccountsByType() {
    const selectedType = document.getElementById("accountTypeFilter").value;
    const filteredAccounts = selectedType 
        ? accounts.filter(account => account.role === selectedType) 
        : accounts;  // Nếu không chọn loại, hiển thị tất cả

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
function createAccountElement(account, index) {
    // Only show the "Sửa" button if the account is admin; otherwise, show all buttons
    const actionButtons = account.role === 'admin'
        ? `<button onclick="editAccount(${index})">Sửa</button>`
        : `
            <button onclick="viewAccountDetails(${index})">Xem chi tiết</button>
            <button onclick="editAccount(${index})">Sửa</button>
            <button onclick="deleteAccount(${index})">Xóa</button>
        `;

    const accountEl = document.createElement("div");
    accountEl.className = "account";
    accountEl.innerHTML = `
        <span>Mã tài khoản: ${account.id}</span>
        <span>Tên đăng nhập: ${account.username}</span>
        <span>Mật khẩu: ${account.password}</span>
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
        renderAccounts();  // Refresh the displayed list
    }
}


// Tìm kiếm tài khoản
function filterAccounts() {
    const searchQuery = document.getElementById("searchAccount").value.toLowerCase();
    const filteredAccounts = accounts.filter(account =>
        account.username.toLowerCase().includes(searchQuery)
    );
    renderFilteredAccounts(filteredAccounts);
}

// Hiển thị các tài khoản sau khi lọc
function renderFilteredAccounts(filteredAccounts) {
    const container = document.getElementById("accounts_container");
    container.innerHTML = '';
    filteredAccounts.forEach(account => {
        const originalIndex = accounts.findIndex(a => a.id === account.id);
        const accountEl = createAccountElement(account, originalIndex);
        container.appendChild(accountEl);
    });
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


// Hiển thị danh sách khuyến mãi
function renderPromotions() {
    const container = document.getElementById("promotions_container");
    container.innerHTML = '';
    promotions.forEach((promotion, index) => {
        if (!promotion.isHidden) {  // Only render promotions that are not hidden
            const promotionEl = document.createElement("div");
            promotionEl.className = "promotion";
            promotionEl.innerHTML = `
                <span>Mã: ${promotion.id}</span>
                <span>Cú pháp: ${promotion.code}</span>
                <span>Ngày tạo: ${promotion.createdDate}</span>
                <span>Ngày bắt đầu: ${promotion.startDate}</span>
                <span>Ngày kết thúc: ${promotion.endDate}</span>
                <span>Tổng tiền cần thiết: ${promotion.requiredAmount}</span>
                <span>Phần trăm giảm: ${promotion.discountPercent}%</span>
                <div>
                    <button onclick="editPromotion(${index})">Sửa</button>
                    <button onclick="deletePromotion(${index})">Xóa</button>
                </div>
            `;
            container.appendChild(promotionEl);
        }
    });
}



// Lọc khuyến mãi theo thời gian và tìm kiếm
function filterPromotions() {
    const searchQuery = document.getElementById("searchPromotion").value.toLowerCase();
    const activeOnly = document.getElementById("activeOnly").checked;
    const currentDate = new Date();

    const filteredPromotions = promotions.filter(promotion => {
        const matchesSearch = promotion.code.toLowerCase().includes(searchQuery);

        // Kiểm tra xem khuyến mãi có đang hoạt động không
        const startDate = new Date(promotion.startDate);
        const endDate = new Date(promotion.endDate);
        const isActive = !activeOnly || (currentDate >= startDate && currentDate <= endDate);

        return matchesSearch && isActive;
    });

    renderFilteredPromotions(filteredPromotions);
}

// Hiển thị các khuyến mãi sau khi lọc
function renderFilteredPromotions(filteredPromotions) {
    const container = document.getElementById("promotions_container");
    container.innerHTML = '';
    filteredPromotions.forEach(promotion => {
        const originalIndex = promotions.findIndex(p => p.id === promotion.id);
        const promotionEl = document.createElement("div");
        promotionEl.className = "promotion";
        promotionEl.innerHTML = `
            <span>Mã: ${promotion.id}</span>
            <span>Cú pháp: ${promotion.code}</span>
            <span>Ngày tạo: ${promotion.createdDate}</span>
            <span>Ngày bắt đầu: ${promotion.startDate}</span>
            <span>Ngày kết thúc: ${promotion.endDate}</span>
            <span>Tổng tiền cần thiết: ${promotion.requiredAmount}</span>
            <span>Phần trăm giảm: ${promotion.discountPercent}%</span>
            <div>
                <button onclick="editPromotion(${originalIndex})">Sửa</button>
                <button onclick="deletePromotion(${originalIndex})">Xóa</button>
            </div>
        `;
        container.appendChild(promotionEl);
    });
}

// Hiển thị form thêm/sửa khuyến mãi
function openPromotionForm(isEdit, index) {
    const form = document.getElementById("promotionForm");
    const title = document.getElementById("promotionFormTitle");
    const formContent = document.getElementById("promotionFormContent");

    if (isEdit) {
        title.textContent = "Sửa khuyến mãi";
        const promotion = promotions[index];
        document.getElementById("promotionCode").value = promotion.code;
        document.getElementById("startDate").value = promotion.startDate;
        document.getElementById("endDate").value = promotion.endDate;
        document.getElementById("requiredAmount").value = promotion.requiredAmount;
        document.getElementById("discountPercent").value = promotion.discountPercent;
    } else {
        title.textContent = "Thêm khuyến mãi";
        formContent.reset();
    }

    form.style.display = "block";
}

// Đóng form khuyến mãi
function closePromotionForm() {
    document.getElementById("promotionForm").style.display = "none";
}

// Xác thực và thêm/sửa khuyến mãi
document.getElementById("promotionFormContent").onsubmit = function(event) {
    event.preventDefault();
    const code = document.getElementById("promotionCode").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const requiredAmount = document.getElementById("requiredAmount").value;
    const discountPercent = document.getElementById("discountPercent").value;

    if (!isUniquePromotionCode(code)) {
        alert("Cú pháp khuyến mãi đã tồn tại!");
        return;
    }
    if (new Date(startDate) > new Date(endDate)) {
        alert("Ngày kết thúc phải trùng hoặc sau ngày bắt đầu!");
        return;
    }

    if (isPromotionEdit) {
        const promotion = promotions[promotionEditIndex];
        Object.assign(promotion, { code, startDate, endDate, requiredAmount, discountPercent });
    } else {
        const promotionId = `KM${promotions.length + 1}`;
        promotions.push({ id: promotionId, code, createdDate: new Date().toISOString().split('T')[0], startDate, endDate, requiredAmount, discountPercent, isHidden: false });
    }

    saveData();
    renderPromotions();
    closePromotionForm();
};

function addPromotion() {
    isPromotionEdit = false;
    openPromotionForm(false);  // Hiển thị form thêm khuyến mãi
}

function editPromotion(index) {
    isPromotionEdit = true;
    promotionEditIndex = index;
    openPromotionForm(true, index);  // Hiển thị form sửa khuyến mãi
}
// Xóa khuyến mãi
function deletePromotion(index) {
    if (confirm("Bạn có chắc chắn muốn xóa khuyến mãi này?")) {
        promotions[index].isHidden = true;  // Set isHidden to true instead of deleting
        saveData();
        renderPromotions();  // Refresh the displayed list
    }
}
// Hiển thị các khuyến mãi đã ẩn với giao diện giống tài khoản đã ẩn
function showHiddenPromotions() {
    const hiddenPromotionsList = document.getElementById("hiddenPromotionsList");
    hiddenPromotionsList.innerHTML = "";

    // Lọc các khuyến mãi đã ẩn
    const hiddenPromotions = promotions.filter(promotion => promotion.isHidden);
    hiddenPromotions.forEach((promotion) => {
        const promotionEl = document.createElement("div");
        promotionEl.className = "hidden-promotion-item";
        promotionEl.innerHTML = `
            <span>Mã khuyến mãi: ${promotion.id}</span>
            <span>Cú pháp: ${promotion.code}</span>
            <span>Ngày tạo: ${promotion.createdDate}</span>
            <span>Ngày bắt đầu: ${promotion.startDate}</span>
            <span>Ngày kết thúc: ${promotion.endDate}</span>
            <span>Tổng tiền cần thiết: ${promotion.requiredAmount} đồng</span>
            <span>Phần trăm giảm: ${promotion.discountPercent}%</span>
            <div>
                <button onclick="restorePromotion('${promotion.id}')">Khôi phục</button>
            </div>
        `;
        hiddenPromotionsList.appendChild(promotionEl);
    });
}

// Khôi phục khuyến mãi đã ẩn
function restorePromotion(id) {
    const promotion = promotions.find(promo => promo.id === id);
    if (promotion) {
        promotion.isHidden = false;
        saveData();
        showHiddenPromotions();
        renderPromotions();
    }
}
// Hàm bật tắt hiển thị khuyến mãi đã ẩn
function toggleHiddenPromotions() {
    const hiddenPromotionsContainer = document.getElementById("hiddenPromotionsContainer");
    hiddenPromotionsContainer.style.display = hiddenPromotionsContainer.style.display === "none" ? "block" : "none";
    if (hiddenPromotionsContainer.style.display === "block") {
        showHiddenPromotions();
    }
}


// Lưu dữ liệu vào localStorage
function saveData() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("promotions", JSON.stringify(promotions));
    localStorage.setItem("employee", JSON.stringify(employee));
    localStorage.setItem("customer", JSON.stringify(customer));
}

// Chuyển đổi giữa các panel
function showPanel(panelId, event) {
    event.preventDefault();
    document.getElementById("account_panel").style.display = "none";
    document.getElementById("promotion_panel").style.display = "none";

    // Hiển thị panel được chọn
    document.getElementById(`${panelId}_panel`).style.display = "block";
}

// Khởi tạo dữ liệu và hiển thị
window.onload = () => {
    renderAccounts();
    renderPromotions();
};

// Kiểm tra tên đăng nhập duy nhất
function isUniqueUsername(username) {
    return !accounts.some(account => account.username === username);
}

// Kiểm tra cú pháp khuyến mãi duy nhất
function isUniquePromotionCode(code) {
    return !promotions.some(promotion => promotion.code === code);
}

// Kiểm tra tính hợp lệ của số điện thoại
function isValidPhone(phone) {
    return /^0\d{9}$/.test(phone); // Bắt đầu bằng '0' và có 10 chữ số
}

// Kiểm tra tính hợp lệ của email
function isValidEmail(email) {
    return email.includes('@');
}