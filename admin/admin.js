let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let promotions = JSON.parse(localStorage.getItem("promotions")) || [];

// Hiển thị danh sách tài khoản
function renderAccounts() {
    const container = document.getElementById("accounts_container");
    container.innerHTML = '';
    accounts.forEach((account, index) => {
        const accountEl = document.createElement("div");
        accountEl.className = "account";
        accountEl.innerHTML = `
            <span>Mã: ${account.id}</span>
            <span>Tên: ${account.username}</span>
            <span>Mật khẩu: ${account.password}</span>
            <span>Loại: ${account.role}</span>
            <span>Trạng thái: ${account.status}</span>
            <div>
                <button onclick="editAccount(${index})">Sửa</button>
                <button onclick="deleteAccount(${index})">Xóa</button>
            </div>
        `;
        container.appendChild(accountEl);
    });
}

// Hiển thị danh sách khuyến mãi
function renderPromotions() {
    const container = document.getElementById("promotions_container");
    container.innerHTML = '';
    promotions.forEach((promotion, index) => {
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
    });
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
        const accountEl = document.createElement("div");
        accountEl.className = "account";
        accountEl.innerHTML = `
            <span>Mã: ${account.id}</span>
            <span>Tên: ${account.username}</span>
            <span>Mật khẩu: ${account.password}</span>
            <span>Loại: ${account.role}</span>
            <span>Trạng thái: ${account.status}</span>
            <div>
                <button onclick="editAccount(${originalIndex})">Sửa</button>
                <button onclick="deleteAccount(${originalIndex})">Xóa</button>
            </div>
        `;
        container.appendChild(accountEl);
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

// Thêm khuyến mãi
function addPromotion() {
    const newPromotion = {
        id: `KM${Date.now()}`,
        code: prompt("Cú pháp khuyến mãi:"),
        createdDate: new Date().toISOString().split('T')[0],
        startDate: prompt("Ngày bắt đầu (YYYY-MM-DD):"),
        endDate: prompt("Ngày kết thúc (YYYY-MM-DD):"),
        requiredAmount: prompt("Tổng tiền cần thiết:"),
        discountPercent: prompt("Phần trăm giảm:")
    };
    if (newPromotion.code && newPromotion.startDate && newPromotion.endDate) {
        promotions.push(newPromotion);
        saveData();
        renderPromotions();
    }
}

// Sửa khuyến mãi
function editPromotion(index) {
    const promotion = promotions[index];
    promotion.code = prompt("Cú pháp:", promotion.code);
    promotion.startDate = prompt("Ngày bắt đầu (YYYY-MM-DD):", promotion.startDate);
    promotion.endDate = prompt("Ngày kết thúc (YYYY-MM-DD):", promotion.endDate);
    promotion.requiredAmount = prompt("Tổng tiền cần thiết:", promotion.requiredAmount);
    promotion.discountPercent = prompt("Phần trăm giảm:", promotion.discountPercent);
    saveData();
    renderPromotions();
}

// Xóa khuyến mãi
function deletePromotion(index) {
    if (confirm("Bạn có chắc chắn muốn xóa khuyến mãi này?")) {
        promotions.splice(index, 1);
        saveData();
        renderPromotions();
    }
}

// Lưu dữ liệu vào localStorage
function saveData() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("promotions", JSON.stringify(promotions));
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
