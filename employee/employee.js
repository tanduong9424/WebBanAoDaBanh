// Lấy sản phẩm từ localStorage hoặc tạo một mảng rỗng nếu không có
let products = JSON.parse(localStorage.getItem("products")) || [];

// Dữ liệu mẫu cho đơn hàng
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
    { madonhang: "DH11", makh: "KH2", thoigianmua: "2024-11-9", tongtien: 200000, makhuyenmai: null, tthd: "đã giao" },
    { madonhang: "DH12", makh: "KH3", thoigianmua: "2024-11-9", tongtien: 150000, makhuyenmai: "KM2", tthd: "đã giao" },
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


function resetProductFilter(){
    document.getElementById("allRadio").checked=true;
    document.getElementById("searchInput").value="";
    document.getElementById("sizeFilter").value="";
    document.getElementById("sortOption").value="";
    document.getElementById("nationalFilter").style.display="none";
    document.getElementById("teamFilter").style.display="none";
    renderProducts(products);
}
function toggleFilterCategory() {
    const nationalRadio = document.getElementById("nationalRadio");
    const teamRadio = document.getElementById("teamRadio");
    const nationalFilter = document.getElementById("nationalFilter");
    const teamFilter = document.getElementById("teamFilter");
        
    // Hiển thị select tương ứng với lựa chọn
    if (nationalRadio.checked) {
        renderProducts(products.filter(product => product.team == ""));
        teamFilter.style.display = 'none';
        nationalFilter.style.display = 'block';  // Hiển thị select quốc gia
    } else if (teamRadio.checked) {
        renderProducts(products.filter(product => product.national == ""));
        nationalFilter.style.display = 'none';
        teamFilter.style.display = 'block';  // Hiển thị select câu lạc bộ
    }
    else{
        teamFilter.style.display = 'none';
        nationalFilter.style.display = 'none';
    }

    // Gọi lại hàm lọc khi thay đổi
    applyFilters();
}

// Khởi chạy
renderProducts(products);
renderOrders(orders);

// Hàm để lọc và sắp xếp sản phẩm
function applyFilters() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const national = document.getElementById("nationalFilter").value;
    const size = document.getElementById("sizeFilter").value;
    const team = document.getElementById("teamFilter").value;
    const sortOption = document.getElementById("sortOption").value;
    
    // Kiểm tra người dùng đã chọn quốc gia hay câu lạc bộ
    const isNationalFilterActive = document.getElementById("nationalRadio").checked;
    const isTeamFilterActive = document.getElementById("teamRadio").checked;

    // Lọc sản phẩm dựa trên bộ lọc đã chọn
    let filteredProducts = products.filter(product => {
        // Chỉ lọc quốc gia hoặc câu lạc bộ, không cả hai
        if (isNationalFilterActive) {
            return (
                (product.tensp.toLowerCase().includes(searchQuery)) &&
                (product.national === national || national == "") && (product.team === "") &&
                (size === "" || product.size === size)
            );
        }
        if (isTeamFilterActive) {
            return (
                (product.tensp.toLowerCase().includes(searchQuery)) &&
                (product.team === team || team == "") && (product.national === "") &&
                (size === "" || product.size === size)
            );
        }
        if(!isNationalFilterActive && !isTeamFilterActive){
            return (
                (size === "" || product.size === size) &&
                (product.tensp.toLowerCase().includes(searchQuery))
            );
        }
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

// Hiển thị các sản phẩm
function renderProducts(filteredProducts) {
    const container = document.getElementById("products_container");
    container.innerHTML = ''; //xóa nội dung cũ

    filteredProducts.forEach((product) => {
        if (product.status){
            const productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                <div><strong>${product.tensp}</strong></div>
                <div>${product.price} VND</div>
                <div><img src="${product.image_url}" alt=""></div>
                <div>
                    <button onclick="showEditProductForm('${product.masp}')">Sửa</button>
                    <button onclick="deleteProduct('${product.masp}')">Xóa</button>
                    <button onclick="showProductDetails('${product.masp}')">Chi tiết</button>
                </div>
            `;
            container.appendChild(productEl);
        }
        console.log(product);
    });
}

// Thêm sản phẩm mới
/* function addProducttttt() {
    const newProduct = {
        masp: `SP${products.length + 1}`,
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
} */

function isValidProduct(){
    if (document.getElementById("newProduct").value.trim() == ""){
        alert("Chưa nhập tên sản phẩm");
        return false;
    } 
    const selectedSize = document.querySelector('input[name="radioSize"]:checked');
    if (!selectedSize || !["S", "M", "L"].includes(selectedSize.value)) {
        alert("Chưa chọn size");
        return false;
    } 
    if (document.getElementById("Team").value == "" && document.getElementById("National").value == ""){
        alert("Hãy chọn câu lạc bộ hoặc quốc gia");
        return false;
    }

    const priceValue = document.getElementById("price").value.trim();
    if (priceValue == ""){
        alert("Chưa nhập giá sản phẩm");
        return false;
    }else if (isNaN(priceValue) || priceValue < 0) {
        alert("Giá trị không hợp lệ: Giá tiền chứa chữ hoặc là số âm");
        return false;
    }

    const stockValue = document.getElementById("stock").value.trim();
    if (stockValue == ""){
        alert("Chưa nhập số lượng sản phẩm");
        return false;
    } else if (isNaN(stockValue) || stockValue < 0) {
        alert("Giá trị không hợp lệ: Số lượng sản phẩm chứa chữ hoặc là số âm");
        return false;
    }
    return true;
}
    
async function addProduct() {
    const inputEl = document.getElementById('image_url');
    const file = inputEl.files[0];

    let image_url = "";
    if (file) {
        // Đọc file ảnh nếu có
        const fr = new FileReader();
        image_url = await new Promise((resolve, reject) => {
            fr.onload = () => resolve(fr.result); // Lấy URL ảnh sau khi đọc file
            fr.onerror = (error) => reject("Lỗi khi đọc file: " + error);
            fr.readAsDataURL(file); // Đọc ảnh dưới dạng base64
        });
    }
    
    // Lấy giá trị từ các input trong form
    const newProduct = {
        masp: `SP${products.length + 1}`,
        tensp: document.getElementById("newProduct").value,
        description: document.getElementById("description").value,
        size: document.querySelector('input[name="radioSize"]:checked')?.value || "", // lấy giá trị của radio đã chọn, nếu không chọn trả về ""
        price: parseInt(document.getElementById("price").value) || 0,
        stock: parseInt(document.getElementById("stock").value) || 0,
        team: document.getElementById("Team").value,
        national: document.getElementById("National").value,
         // Xử lý hình ảnh
        image_url: image_url || "",
        date_added: new Date().toISOString(),  // Lấy thời gian hiện tại
        status: true  // Mặc định là true (1)
    };

    if(isValidProduct()){
        alert("Thêm sản phẩm mới thành công !");
        // Thêm sản phẩm mới vào mảng products
        products.push(newProduct);

        // Lưu trữ và hiển thị lại danh sách sản phẩm
        saveData();
        renderProducts(products);

        // Ẩn form thêm sản phẩm sau khi hoàn thành
        document.getElementById("addProductForm").style.display = "none";
        resetProductFilter();
    }
}

function showAddProductForm() {
    const productInput = document.getElementById("productInput");

    productInput.innerHTML = `
    <h3> Thêm sản phẩm </h3>
    <div class="container">
        <div>
            <div><label for="newProduct">Tên sản phẩm:</label></div>    
        </div>
        <div style="width: 70%; text-align: left;">
            <input type="text" id="newProduct" name="txtNewProduct" style="width: 100%">
        </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; text-align: center;">
        <div style="flex: 50%;">

            <div class="container">
                <div class="item1">
                    <div><label for="description">Mô tả:</label></div>    
                </div>
                <div class="item2">
                    <textarea id="description" name="txtDescription" rows="4" style="width: 100%"></textarea>
                </div>
            </div>   

            <div class="container">
                <div class="item1">
                    <div><label for="Size">Kích thước: </label></div>    
                </div>
                <div class="item2">
                    <input type="radio" name="radioSize" id="Size" value="S">S
                    <input type="radio" name="radioSize" id="Size" value="M">M
                    <input type="radio" name="radioSize" id="Size" value="L">L
                </div>
            </div>
            
            <div class="container">
                <div class="item1">
                    <div><label for="price">Giá:</label></div>    
                </div>
                <div class="item2">
                    <input type="text" id="price" name="txtPrice" style="width: 100%" value=0>
                </div>
            </div>
        </div>

        <div style="flex: 50%;">
            <div class="container">
                <div class="item1">
                    <div><label for="stock">Số lượng:</label></div>    
                </div>
                <div class="item2">
                    <input type="text" id="stock" name="txtStock" style="width: 100%" value=0>
                </div>
            </div>

            <div class="container">
                <!-- Radio button chọn Quốc gia hoặc Câu lạc bộ -->
                <div class="item1">
                    <div><label for="national">Chọn loại: </label></div>    
                </div>
                <div class="item2">
                    <input type="radio" name="category" id="categoryClub" value="club" onclick="toggleSelect('club')"> Câu lạc bộ
                    <input type="radio" name="category" id="categoryCountry" value="country" onclick="toggleSelect('country')"> Quốc gia
                </div>
            </div>

            <!-- Select Câu lạc bộ -->
            <div id="clubSelect" style="display: none;">
                <div class="container">
                    <div class="item1">
                        <div><label for="Team">Câu lạc bộ:</label></div>    
                    </div>
                    <div class="item2">
                        <select name="selectTeam" id="Team">
                            <option selected value="">[Chọn câu lạc bộ]</option>
                            <option value="Liverpool">Liverpool</option>
                            <option value="Bayern">Bayern</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="PSG">PSG</option>
                            <option value="Napoli">Napoli</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Select Quốc gia -->
            <div id="countrySelect" style="display: none;">
                <div class="container">
                    <div class="item1">
                        <div><label for="National">Quốc gia:</label></div>    
                    </div>
                    <div class="item2">
                        <select name="selectNational" id="National">
                            <option selected value="">[Chọn quốc gia]</option>
                            <option value="Anh">Anh</option>
                            <option value="Đức">Đức</option>
                            <option value="Tây Ban Nha">Tây Ban Nha</option>
                            <option value="Pháp">Pháp</option>
                            <option value="Ý">Ý</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="item1">
                    <div><label for="image_url">Ảnh sản phẩm:</label></div>    
                </div>
                <div class="item2">
                    <input type="file" id="image_url" name="image_url" accept="image/*">
                </div>
            </div>
        </div>
    </div>
    <button onclick="addProduct()">Thêm sản phẩm</button>
    `;

    document.getElementById("addProductForm").style.display = "block";  // Hiển thị modal
}

function toggleSelect(category) {
    const clubSelect = document.getElementById('clubSelect');
    const countrySelect = document.getElementById('countrySelect');

    // Ẩn cả hai select trước khi hiển thị cái chọn
    clubSelect.style.display = 'none';
    countrySelect.style.display = 'none';

    // Hiển thị select tương ứng với lựa chọn
    if (category === 'club') {
        document.getElementById('National').value="";
        clubSelect.style.display = 'block';  // Hiển thị select câu lạc bộ
    } else if (category === 'country') {
        document.getElementById('Team').value="";
        countrySelect.style.display = 'block';  // Hiển thị select quốc gia
    }
}

// Xóa sản phẩm
function deleteProduct(masp) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        //products.splice(index, 1);
        products.find(sanPham => sanPham.masp === masp).status=false;
        saveData();
        renderProducts(products);
    }
}

// Hàm hiển thị chi tiết sản phẩm
function showProductDetails(masp) {
    const product = products.find(sanPham => sanPham.masp === masp); // Lấy sản phẩm từ mảng products dựa vào masp
    if (product) {  // Kiểm tra nếu sản phẩm tồn tại
        const detailContent = document.getElementById("detailContent");

        // Định dạng lại date_added
        const dateAdded = new Date(product.date_added);
        const formattedDate = dateAdded.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        // Tạo nội dung chi tiết sản phẩm
        detailContent.innerHTML = `
            <h3>${product.tensp}</h3>
            <div style="display: flex; flex-flow: row wrap;">
                <div style="flex: 40%">
                    <div>
                        <p><strong>Mã sản phẩm:</strong> ${product.masp}</p>
                        <p><strong>Giá:</strong> ${product.price} VND</p>
                        <p><strong>Mô tả:</strong> ${product.description.replace(/\n/g, '<br>')}</p>
                        <p><strong>Size:</strong> ${product.size}</p>
                        <p><strong>Stock:</strong> ${product.stock}</p>
                        <p><strong>Câu lạc bộ:</strong> ${product.team}</p>
                        <p><strong>Quốc gia:</strong> ${product.national}</p>
                        <p><strong>Date Added:</strong> ${formattedDate}</p>
                    </div>
                </div>

                <div style="flex-grow: 1">
                    <div>
                        <img src="${product.image_url}" alt="${product.tensp}" style="width: 100%; height: auto; object-fit: contain">
                    </div>
                </div>

            </div>
        `;

        // Hiển thị modal chứa chi tiết sản phẩm
        document.getElementById("detailModal").style.display = "block";
    } else {
        console.log("Sản phẩm không tồn tại!");
    }
}

function showEditProductForm(masp) {
    const product = products.find(sanPham => sanPham.masp === masp); // Lấy sản phẩm từ mảng products dựa vào masp
    if (product) {  // Kiểm tra nếu sản phẩm tồn tại
        const productEdit = document.getElementById("productEdit");

        productEdit.innerHTML = `
            <h3> Chỉnh sửa sản phẩm </h3>
            <div class="container">
                <div>
                    <div><label for="newProduct">Tên sản phẩm:</label></div>    
                </div>
                <div style="width: 70%; text-align: left;">
                    <input type="text" id="newProduct" name="txtNewProduct" style="width: 100%" value="${product.tensp}">
                </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; text-align: center;">
                <div style="flex: 50%;">  

                    <div class="container">
                        <div class="item1">
                            <div><label for="description">Mô tả:</label></div>    
                        </div>
                        <div class="item2">
                            <textarea id="description" name="txtDescription" rows="4" style="width: 100%">${product.description}</textarea>
                        </div>
                    </div>   

                    <div class="container">
                        <div class="item1">
                            <div><label for="Size">Kích thước: </label></div>    
                        </div>
                        <div class="item2">
                            <input type="radio" name="radioSize" value="S" ${product.size === "S" ? "checked" : ""}>S
                            <input type="radio" name="radioSize" value="M" ${product.size === "M" ? "checked" : ""}>M
                            <input type="radio" name="radioSize" value="L" ${product.size === "L" ? "checked" : ""}>L
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="item1">
                            <div><label for="price">Giá:</label></div>    
                        </div>
                        <div class="item2">
                            <input type="text" id="price" name="txtPrice" style="width: 80%" value="${product.price}">
                        </div>
                    </div>
                </div>

                <div style="flex: 50%;">
                    <div class="container">
                        <div class="item1">
                            <div><label for="stock">Số lượng:</label></div>    
                        </div>
                        <div class="item2">
                            <input type="text" id="stock" name="txtStock" style="width: 80%" value="${product.stock}">
                        </div>
                    </div>

                    <div class="container">
                        <div class="item1">
                            <div><label for="national">Chọn loại: </label></div>    
                        </div>
                        <div class="item2">
                            <input type="radio" name="category" id="categoryClub" value="club" onclick="toggleSelect('club')" ${product.team ? "checked" : ""}> Câu lạc bộ
                            <input type="radio" name="category" id="categoryCountry" value="country" onclick="toggleSelect('country')" ${product.national ? "checked" : ""}> Quốc gia
                        </div>
                    </div>

                    <!-- Select Câu lạc bộ -->
                    <div id="clubSelect" style="display: ${product.team ? "block" : "none"};">
                        <div class="container">
                            <div class="item1">
                                <div><label for="Team">Câu lạc bộ:</label></div>    
                            </div>
                            <div class="item2">
                                <select name="selectTeam" id="Team">
                                    <option value="">[Chọn câu lạc bộ]</option>
                                    <option value="Liverpool" ${product.team === "Liverpool" ? "selected" : ""}>Liverpool</option>
                                    <option value="Bayern" ${product.team === "Bayern" ? "selected" : ""}>Bayern</option>
                                    <option value="Barcelona" ${product.team === "Barcelona" ? "selected" : ""}>Barcelona</option>
                                    <option value="PSG" ${product.team === "PSG" ? "selected" : ""}>PSG</option>
                                    <option value="Napoli" ${product.team === "Napoli" ? "selected" : ""}>Napoli</option>
                                    <option value="Other" ${product.team === "Other" ? "selected" : ""}>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Select Quốc gia -->
                    <div id="countrySelect" style="display: ${product.national ? "block" : "none"};">
                        <div class="container">
                            <div class="item1">
                                <div><label for="National">Quốc gia:</label></div>    
                            </div>
                            <div class="item2">
                                <select name="selectNational" id="National">
                                    <option value="">[Chọn quốc gia]</option>
                                    <option value="Anh" ${product.national === "Anh" ? "selected" : ""}>Anh</option>
                                    <option value="Đức" ${product.national === "Đức" ? "selected" : ""}>Đức</option>
                                    <option value="Tây Ban Nha" ${product.national === "Tây Ban Nha" ? "selected" : ""}>Tây Ban Nha</option>
                                    <option value="Pháp" ${product.national === "Pháp" ? "selected" : ""}>Pháp</option>
                                    <option value="Ý" ${product.national === "Ý" ? "selected" : ""}>Ý</option>
                                    <option value="Other" ${product.national === "Other" ? "selected" : ""}>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="item1">
                            <div><label for="image_url">Chọn ảnh mới:</label></div>    
                        </div>
                        <div class="item2">
                            <input type="file" id="image_url" name="image_url" accept="image/*">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <label for="">Chọn để xóa ảnh (không chọn nếu đã chọn ảnh mới):</label> 
                <input type="checkbox" name="chkDeleteImage" id="deleteImage">
            </div>
            <div>
                <button onclick="editProduct('${product.masp}')">Cập nhật sản phẩm</button>
            </div>
            `;
    
        document.getElementById("editProductForm").style.display = "block";  // Hiển thị modal
    } 
    else {
        console.log("Sản phẩm không tồn tại!");
    }
}
// Sửa sản phẩm
async function editProduct(masp) {
    const product = products.find(sanPham => sanPham.masp === masp); // Tìm sản phẩm cần chỉnh sửa
    if (!product) {
        alert("Sản phẩm không tồn tại.");
        return;
    }

    // Lấy các giá trị mới từ form chỉnh sửa
    const inputEl = document.getElementById('image_url');
    const file = inputEl.files[0];

    let image_url = product.image_url; // Giữ lại URL hình ảnh cũ nếu không thay đổi
    const deleteImage = document.getElementById('deleteImage').checked; // Kiểm tra nếu người dùng chọn xóa ảnh

    if (deleteImage) {
        image_url = ""; // Xóa ảnh nếu checkbox được chọn
    } else if (file) {
        // Đọc file ảnh nếu có
        const fr = new FileReader();
        image_url = await new Promise((resolve, reject) => {
            fr.onload = () => resolve(fr.result); // Lấy URL ảnh sau khi đọc file
            fr.onerror = (error) => reject("Lỗi khi đọc file: " + error);
            fr.readAsDataURL(file); // Đọc ảnh dưới dạng base64
        });
    }

    // Cập nhật thông tin sản phẩm với dữ liệu từ form
    const updatedProduct = {
        masp: masp, // Giữ nguyên mã sản phẩm
        tensp: document.getElementById("newProduct").value,
        description: document.getElementById("description").value,
        size: document.querySelector('input[name="radioSize"]:checked')?.value || "", // lấy giá trị của radio đã chọn
        price: parseInt(document.getElementById("price").value) || 0,
        stock: parseInt(document.getElementById("stock").value) || 0,
        team: document.getElementById("Team").value,
        national: document.getElementById("National").value,
        // Cập nhật lại ảnh nếu có hoặc xóa ảnh nếu checkbox được chọn
        image_url: image_url || "",  // Nếu không có ảnh mới hoặc chọn xóa ảnh, thì để trống
        date_added: product.date_added,  // Giữ nguyên thời gian thêm sản phẩm
        status: product.status  // Giữ nguyên trạng thái của sản phẩm
    };
    if(isValidProduct()){
        alert("Sản phẩm đã được cập nhật thành công!");
        // Cập nhật sản phẩm trong mảng products
        const index = products.findIndex(sanPham => sanPham.masp === masp);
        products[index] = updatedProduct;

        // Lưu trữ và hiển thị lại danh sách sản phẩm
        saveData();
        renderProducts(products);

        // Ẩn form sau khi hoàn thành chỉnh sửa
        document.getElementById("editProductForm").style.display = "none";
    }
}

// Hiển thị các đơn hàng
function renderOrders(filteredOrders) {
    const orderList = document.getElementById('order-list');
    orders.forEach((order, index) => {
        // Định dạng lại date_added
        const dateOrdered = new Date(order.thoigianmua);
        const formattedDate = dateOrdered.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        
        const row = `
            <tr>
                <td>${order.madonhang}</td>
                <td>${order.makh}</td>
                <td>${formattedDate}</td>
                <td>${order.tongtien.toLocaleString()} VND</td>
                <td>${order.makhuyenmai || 'Không có'}</td>
                <td>
                    <select name="selectStatus" id="Status-${order.madonhang}">
                        <option value="chưa xử lý">chưa xử lý</option>
                        <option value="xác nhận">xác nhận</option>
                        <option value="đã giao">đã giao</option>
                        <option value="đã hủy">đã hủy</option>
                    </select>
                </td>
                <td><button onclick="viewDetails('${order.madonhang}')">Xem chi tiết</button></td>
            </tr>
        `;
        //orderList.innerHTML += row;
        orderList.insertAdjacentHTML("beforeend", row);
        
        document.getElementById(`Status-${order.madonhang}`).value = order.tthd;
    });
}
function viewDetails(madonhang) {
    alert(`Xem chi tiết đơn hàng: ${madonhang}`);

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
// Đóng modal
function closeModal() {
    document.getElementById("detailModal").style.display = "none";
    document.getElementById("addProductForm").style.display = "none";
    document.getElementById("editProductForm").style.display = "none";
}

