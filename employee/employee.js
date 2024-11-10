// Dữ liệu mẫu cho sản phẩm
/* let products = [
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "S",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP003",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP004",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP005",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP006",
        tensp: "Áo MC",
        description: "Áo MC",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP001",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP003",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP004",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP005",
        tensp: "Áo MC",
        description: "Mô tả Áo MC",
        size: "M",
        price: 150000,
        stock: 20,
        team: "MU",
        category: "premier league",
        material: "Cotton",
        brand: "ABC",
        date_added: "2024-01-01",
        image_url: "../img/1.jpg"
    },
    {
        masp: "SP006",
        tensp: "Áo MC",
        description: "Áo MC",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
    {
        masp: "SP002",
        tensp: "Áo MU",
        description: "Áo MU",
        size: "L",
        price: 300000,
        stock: 15,
        team: "MC",
        category: "premier league",
        material: "Polyester",
        brand: "XYZ",
        date_added: "2024-02-15",
        image_url: "../img/2.jpg"
    },
]; */

// Lấy sản phẩm từ localStorage hoặc tạo một mảng rỗng nếu không có
let products = JSON.parse(localStorage.getItem("products")) || [];

// Dữ liệu mẫu cho đơn hàng
let orders = [
    {
        madonhang: "DH001",
        makh: "KH001",
        thoigianmua: "2024-03-01T12:00:00Z",
        tongtien: 450000,
        makhuyenmai: "SALE20",
        tthd: "Đã xác nhận"
    },
    {
        madonhang: "DH002",
        makh: "KH002",
        thoigianmua: "2024-03-05T15:30:00Z",
        tongtien: 300000,
        makhuyenmai: "",
        tthd: "Chờ xác nhận"
    }
];

// Hàm để lọc và sắp xếp sản phẩm
function applyFilters() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const brand = document.getElementById("brandFilter").value;
    const size = document.getElementById("sizeFilter").value;
    const team = document.getElementById("teamFilter").value;
    const category = document.getElementById("categoryFilter").value;
    const sortOption = document.getElementById("sortOption").value;

    let filteredProducts = products.filter(product => {
        return (
            (product.tensp.toLowerCase().includes(searchQuery)) &&
            (brand === "" || product.brand === brand) &&
            (size === "" || product.size === size) &&
            (team === "" || product.team === team) &&
            (category === "" || product.category === category)
        );
    });

    // Sắp xếp sản phẩm
    if (sortOption === "priceAsc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "dateNew") {
        filteredProducts.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
    } else if (sortOption === "dateOld") {
        filteredProducts.sort((a, b) => new Date(a.date_added) - new Date(b.date_added));
    } else if (sortOption === "stockAsc") {
        filteredProducts.sort((a, b) => a.stock - b.stock);
    } else if (sortOption === "stockDesc") {
        filteredProducts.sort((a, b) => b.stock - a.stock);
    }

    // Hiển thị các sản phẩm đã lọc và sắp xếp
    renderProducts(filteredProducts);
}
// Giả sử 'products' là danh sách sản phẩm gốc
//let filteredProducts = [...products];  // Sao chép tất cả sản phẩm vào filteredProducts ban đầu

// Khi trang tải, bạn sẽ hiển thị tất cả sản phẩm từ filteredProducts
window.onload = () => {
    renderProducts(products);
};
// Hiển thị các sản phẩm
function renderProducts(filteredProducts) {
    const container = document.getElementById("products_container");
    container.innerHTML = ''; //xóa nội dung cũ
    filteredProducts.forEach((product, index) => {
        const productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `
            <div><strong>${product.tensp}</strong></div>
            <div>${product.price} VND</div>
            <div><img src="${product.image_url}" alt=""></div>
            <div>
                <button onclick="editProduct(${index})">Sửa</button>
                <button onclick="deleteProduct(${index})">Xóa</button>
                <button onclick="showDetails(${index})">Chi tiết</button>
            </div>
        `;
        console.log(product);
        container.appendChild(productEl);
    });
}

// Thêm sản phẩm mới
function addProduct() {
    const newProduct = {
        masp: `SP${Date.now()}`,
        tensp: `Sản phẩm mới${Date.now()}`,
        description: "Mô tả",
        size: "M",
        price: 100000,
        stock: 10,
        team: "Nhóm",
        category: "Thời trang",
        material: "Vải",
        brand: "Thương hiệu",
        date_added: new Date().toISOString(),
        image_url: "../img/1.jpg"
    };
    products.push(newProduct);
    saveData();
    renderProducts(products);
}

// Sửa sản phẩm
function editProduct(index) {
    const tensp = prompt("Tên sản phẩm:", products[index].tensp);
    if (tensp) {
        products[index].tensp = tensp;
        //saveData();
        renderProducts();
    }
}

// Xóa sản phẩm
function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        products.splice(index, 1);
        saveData();
        renderProducts(products);
    }
}

// Hiển thị các đơn hàng
function renderOrders() {
    const container = document.getElementById("orders_container");
    container.innerHTML = '';
    orders.forEach((order, index) => {
        const orderEl = document.createElement("div");
        orderEl.className = "order";
        orderEl.innerHTML = `
            <div><strong>Mã đơn hàng:</strong> ${order.madonhang} - ${order.tongtien} VND</div>
            <button onclick="editOrder(${index})">Sửa</button>
            <button onclick="deleteOrder(${index})">Xóa</button>
        `;
        container.appendChild(orderEl);
    });
}

// Thêm đơn hàng mới
function addOrder() {
    const newOrder = {
        madonhang: `DH${Date.now()}`,
        makh: "KH001",
        thoigianmua: new Date().toISOString(),
        tongtien: 500000,
        makhuyenmai: "",
        tthd: "Chờ xác nhận"
    };
    orders.push(newOrder);
    //saveData();
    renderOrders();
}

// Lưu dữ liệu vào localStorage
function saveData() {
    localStorage.setItem("products", JSON.stringify(products));
    //localStorage.setItem("orders", JSON.stringify(orders));
}

// Chuyển đổi panel giữa sản phẩm và đơn hàng
function showPanel(panelId, event) {
    event.preventDefault();  // Ngăn chặn trang tải lại
    document.getElementById("products_panel").style.display = "none";
    document.getElementById("orders_panel").style.display = "none";
    document.getElementById(`${panelId}_panel`).style.display = "block";
}

// Hàm hiển thị chi tiết sản phẩm
function showDetails(index) {
    const product = products[index]; // Lấy sản phẩm từ mảng products dựa vào index
    if (product) {  // Kiểm tra nếu sản phẩm tồn tại
        const detailContent = document.getElementById("detailContent");

        detailContent.innerHTML = `
            <h3>${product.tensp}</h3>
            <p>Mã sản phẩm: ${product.masp}</p>
            <p>Giá: ${product.price} VND</p>
            <p>Mô tả: ${product.description}</p>
            <p>Size: ${product.size}</p>
            <p>Stock: ${product.stock}</p>
            <p>Team: ${product.team}</p>
            <p>Category: ${product.category}</p>
            <p>Material: ${product.material}</p>
            <p>Brand: ${product.brand}</p>
            <p>Date Added: ${product.date_added}</p>
            <img src="${product.image_url}" alt="${product.tensp}"></img>
        `;
        document.getElementById("detailModal").style.display = "block";  // Hiển thị modal
    } else {
        console.log("Sản phẩm không tồn tại!");
    }
}

// Đóng modal
function closeModal() {
    document.getElementById("detailModal").style.display = "none";
}

// Khởi chạy
renderProducts(products);
//renderOrders();