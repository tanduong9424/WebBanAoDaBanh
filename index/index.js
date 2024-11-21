window.onload = updateAmount();/*mở cửa sổ lên mặc định gọi hàm này*/
window.onload = updateCartTotal();/*mở cửa sổ lên mặc định gọi hàm này*/

function ThemDieuKienSearch(){/*mở tìm kiếm nâng cao*/
    event.preventDefault();
    document.querySelector(".advanced-search").classList.toggle("open")
}

function hienthichinhsach() { /*chính sách*/
    const productList = document.querySelector(".product-list");
    productList.innerHTML = `
        <div style="display:block; font-family: Arial, sans-serif; color: #333; line-height: 1.6; background-color: white; width: 100%; padding-left: 20px;">
            <h1 style="color: #007BFF; font-size: 2em;text-align: center;margin-bottom: 20px;">BẢO HÀNH - ĐỔI HÀNG - TRẢ HÀNG VỚI FOOTBALL KIT</h1>
            
            <h2 style="color: #0056b3; font-size: 1.5em;margin-bottom: 10px;">QUY ĐỊNH BẢO HÀNH - ĐỔI TRẢ</h2>
            
            <h3 style="color: #28a745; font-size: 1.3em; margin-bottom: 5px;">1. ĐỔI HÀNG TRONG 60 NGÀY NẾU CHƯA SỬ DỤNG</h3>
            <ul style="padding-left: 20px;">
                <li style="color: red; font-size: 1em;font-weight: bold;">*Chỉ áp dụng sản phẩm nguyên giá, không sale off</li>
                <li>- Sản phẩm mua online (hoặc đến shop mua) được đổi sang mẫu khác trong vòng 60 ngày (kể từ ngày nhận hàng hoặc ngày lưu trên hóa đơn).</li>
                <li>- Được đổi cùng mẫu sang size khác trong 365 ngày, nếu thử không vừa (vui lòng giữ sản phẩm mới nguyên 100%).</li>
                <li>- Quý khách vui lòng liên hệ qua Facebook, Instagram hoặc liên hệ 0987654321 để kiểm tra kho và hỗ trợ đổi hàng.</li>
                <li>- Gửi sản phẩm về địa chỉ: 273 An Dương Vương, Phường 3, Quận 5, TP Hồ Chí Minh hoặc đến trực tiếp để thử và đổi size.</li>
                <li>- Chi phí vận chuyển đổi hàng, Quý Khách vui lòng thanh toán cho bên công ty giao hàng.</li>
            </ul>

            <h3 style="color: #28a745; font-size: 1.3em; margin-bottom: 5px;">2. ĐỔI HÀNG TRONG 14 NGÀY NẾU HÀNG BỊ LỖI SẢN XUẤT</h3>
            <ul style="padding-left: 20px;">
                <li>- Trong vòng 14 ngày kể từ ngày mua hàng (có hóa đơn), khách hàng được đổi sản phẩm mới nếu lỗi sản xuất:</li>
                <li>- Đổi sang sản phẩm cùng loại nếu có.</li>
                <li>- Nếu sản phẩm cùng mẫu hết size, quý khách có thể đổi sang mẫu khác hoặc yêu cầu hoàn tiền (100% giá trị sản phẩm).</li>
            </ul>

            <h3 style="color: #28a745; font-size: 1.3em;margin-bottom: 5px;">3. BẢO HÀNH KEO 1 NĂM CHO TẤT CẢ SẢN PHẨM GIÀY ĐÁ BÓNG</h3>
            <ul style="padding-left: 20px;">
                <li>- Bảo hành 1 đổi 1 trong 30 ngày đầu sử dụng nếu bị gãy đế (lỗi sản xuất).</li>
                <li>- Bảo hành dán keo lên đến 12 tháng.</li>
                <li>- Không bảo hành phần da giày và chỉ khâu giày.</li>
            </ul>
            
            <p style="color: red; font-weight: bold; font-size: 1.9em;">Lưu ý: Không bảo hành sản phẩm do lỗi chủ quan sử dụng sai mục đích.</p>
        </div>
    `;
}



function openCart() { /*mở giỏ*/
    showCart();/*gọi hàm show giỏ*/
    document.querySelector('.modal-cart').classList.add('open');
    body.style.overflow = "hidden";
}

function closeCart() {/*đóng giỏ*/
    document.querySelector('.modal-cart').classList.remove('open');
    body.style.overflow = "auto";
    updateAmount();
}

function showCart() {/*show giở*/
    if (localStorage.getItem('currentuser') != null) {
        let currentuser = JSON.parse(localStorage.getItem('currentuser'));
        if (currentuser.cart.length != 0) {
            document.querySelector('.gio-hang-trong').style.display = 'none';
            document.querySelector('button.thanh-toan').classList.remove('disabled');
            let productcarthtml = '';
            currentuser.cart.forEach(item => {
                let product = getProduct(item);
                productcarthtml += 
                `<li class="cart-item" data-id="${product.id}">
                <div class="cart-item-info">
                    <p class="cart-item-title">${product.title}</p>
                    <span class="cart-item-price price" data-price="${product.price}">
                    ${VND(parseInt(product.price))}
                    </span>
                </div>
                <p class="product-note"><i class="fa fa-pencil"></i><span>${product.note}</span></p>
                <div class="cart-item-control">
                    <button class="cart-item-delete" onclick="deleteCartItem(${product.id},this)">Xóa</button>
                    <div class="buttons_added">
                        <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                        <input class="input-qty" max="100" min="1" name="" type="number" value="${product.soluong}">
                        <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
                    </div>
                </div>
            </li>`
            });
            document.querySelector('.cart-list').innerHTML = productcarthtml;
            updateCartTotal();
            saveAmountCart();
        } else {
            document.querySelector('.gio-hang-trong').style.display = 'flex'
        }
    }
    let modalCart = document.querySelector('.modal-cart');
    let containerCart = document.querySelector('.cart-container');
    let themsach = document.querySelector('.them-sach');
    modalCart.onclick = function () {
        closeCart();
    }
    themsach.onclick = function () {
        closeCart();
    }
    containerCart.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}

function deleteCartItem(id, el) {/*xóa item trong giỏ*/
    let cartParent = el.parentNode.parentNode;
    cartParent.remove();
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let vitri = currentUser.cart.findIndex(item => item.id = id)
    currentUser.cart.splice(vitri, 1);

    // Nếu trống thì hiện giỏ hàng trống
    if (currentUser.cart.length == 0) {
        document.querySelector('.gio-hang-trong').style.display = 'flex';
        document.querySelector('button.thanh-toan').classList.add('disabled');
    }
    localStorage.setItem('currentuser', JSON.stringify(currentUser));
    updateCartTotal();
}

function updateCartTotal() {/*cập nhật giá giỏ*/
    document.querySelector('.text-price').innerText = vnd(getCartTotal());
}

function getCartTotal() {/*lấy tổng tiền ra*/
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let tongtien = 0;
    if (currentUser != null) {
        currentUser.cart.forEach(item => {
            let product = getProduct(item);
            tongtien += (parseInt(product.soluong) * parseInt(product.price));
        });
    }
    return tongtien;
}

function getProduct(item) {/*lấy ra sản phẩm*/
    let products = JSON.parse(localStorage.getItem('products'));
    let infoProductCart = products.find(sp => item.id == sp.id)
    let product = {
        ...infoProductCart,
        ...item
    }
    return product;
}

function getAmountCart() { /*lấy số lượng mặt hàng*/
    let currentuser = JSON.parse(localStorage.getItem('currentuser'))
    let amount = 0;
    currentuser.cart.forEach(element => {
        amount += parseInt(element.soluong);
    });
    return amount;
}

function updateAmount() { /*cập nhật giá*/
    if (localStorage.getItem('currentuser') != null) {
        let amount = getAmountCart();
        document.querySelector('.count-product-cart').innerText = amount;
    }
}

function saveAmountCart() {
    let cartAmountbtn = document.querySelectorAll(".cart-item-control .is-form");
    let listProduct = document.querySelectorAll('.cart-item');
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    cartAmountbtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let id = listProduct[parseInt(index / 2)].getAttribute("data-id");
            let productId = currentUser.cart.find(item => {
                return item.id == id;
            });
            productId.soluong = parseInt(listProduct[parseInt(index / 2)].querySelector(".input-qty").value);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            updateCartTotal();
        })
    });
}

function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    console.log(modalContainer)
    body.style.overflow = "auto";
}


function addToCart(productId) { /*thêm vào giỏ*/
    const product = products.find(p => p.id === productId); // Lấy sản phẩm từ mảng product` bằng id
    if (product) {
        cart.push(product); // Thêm sản phẩm vào mảng giỏ hàng

        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Đã thêm sản phẩm vào giỏ hàng"); // thông báo khi click nút mua ngay (sự kiện nút MUA NGAY trong function showPage)
    }
}

function orderHistory() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('account-user').classList.remove('open');
    document.getElementById('trangchu').classList.add('hide');
    document.getElementById('order-history').classList.add('open');
    renderOrderProduct();
}

function showPage(page) { 
    const itemsPerPage = 6; // Số sản phẩm trên mỗi trang
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productList = document.querySelector(".product-list"); // Container chứa sản phẩm

    const products = JSON.parse(localStorage.getItem('products')) || [];// Lấy mảng sản phẩm từ localStorage
    const filteredProducts = products; // Áp dụng bộ lọc nếu cần

    let productsHTML = ""; // Biến chứa HTML của các sản phẩm
    const pageProducts = filteredProducts.slice(start, end); // Lấy danh sách sản phẩm cho trang hiện tại

    const paginationButtons = document.querySelectorAll('.pagination-btn button');
    paginationButtons.forEach(button => {
        button.classList.remove('active'); 
    });

    const selectedButton = document.querySelector(`.pagination-btn button:nth-child(${page})`);
    if (selectedButton) {
        selectedButton.classList.add('active'); // Thêm lớp 'active' cho nút trang được chọn
    }

    if (pageProducts.length !== 0) {
        pageProducts.forEach(product => {
            const formattedPrice = product.price.toLocaleString().replace(/,/g, '.'); // Định dạng giá

            productsHTML += `
                <div class="product-item"">
                    <div class="container-product-item">
                        <img src="${product.image_url}" alt="${product.tensp}">
                        <button class="buyButton" onclick="addToCart(${product.masp})">MUA NGAY</button> 
                        <button class="detailProduct" onclick="showProductDetail(${product.masp})">CHI TIẾT</button> 
                    </div>
                   <div class="product-info" style="color:#322A2A">
                        <p><strong>Tên sản phẩm:</strong> ${product.tensp}</p>
                        <p><strong>Kích thước:</strong> ${product.size}</p>
                        <p><strong>Giá:</strong> ${formattedPrice} VND</p>
                    </div>
                </div>
            `;
        });

        productList.innerHTML = productsHTML; // Cập nhật HTML danh sách sản phẩm
    } else {
        productList.innerHTML = `
        <div class="empty">KHÔNG CÒN SẢN PHẨM</div>
        `;
    }
}


function showProductDetail(productId) {// hiện chi tiết sản phẩm khi ấn chi tiết
    const products = JSON.parse(localStorage.getItem('products')) || [];  // Lấy danh sách sản phẩm từ localStorage

    const product = products.find(item => item.masp === productId);// Tìm sản phẩm theo ID
    if (product) {// Cập nhật thông tin chi tiết vào div hiển thị
        const detailDiv = document.querySelector(".product-detail");
        detailDiv.innerHTML = `
            <div class="detail-container">
                <h3>Thông tin chi tiết</h3>
                <img src="${product.image_url}" alt="${product.tensp}">
                <p><strong>Mã sản phẩm:</strong> ${product.masp}</p>
                <p><strong>Tên sản phẩm:</strong> ${product.tensp}</p>
                <p><strong>Mô tả:</strong> ${product.description}</p>
                <p><strong>Kích thước:</strong> ${product.size}</p>
                <p><strong>Giá:</strong> ${product.price.toLocaleString().replace(/,/g, '.')} VND</p>
                <p><strong>Còn lại:</strong> ${product.stock}</p>
                <button onclick="closeDetail()">MUA NGAY</button>
                <button onclick="closeDetail()">Đóng</button>
            </div>
        `;
        detailDiv.style.display = "block"; // Hiển thị div
        document.body.classList.add('no-scroll');
    }
}

function closeDetail() { //đóng chi tiết sản phẩm
    const detailDiv = document.querySelector(".product-detail");
    detailDiv.style.display = "none"; // Ẩn div chi tiết
    document.body.classList.remove('no-scroll');
}
        


// --------------- Phần này là để làm cái trượt lên trượt xuống, mũi tên lên xuống, màu của danh mục thui --------------------
const categoryContents = document.querySelectorAll('.category-content');

// Lặp qua từng phần tử và gắn sự kiện click
categoryContents.forEach(content => {
    content.addEventListener('click', () => {
        // Lấy thẻ <i> và <button> bên trong tiêu đề được click
        const icon = content.querySelector('i');
        const buttonCategory = content.querySelector('button');
        const ul = content.nextElementSibling; // Lấy phần tử ul kế tiếp của tiêu đề

        if (ul.style.height !== '0px') {
           
            ul.style.height = `${ul.scrollHeight}px`; 
            setTimeout(() => {
                ul.style.height = '0';
            }, 10);

            setTimeout(() => {
                ul.style.overflow = 'hidden';
            }, 300); 

            // đổi hướng, màu icon với chữ
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
            icon.style.color = 'black';
            buttonCategory.style.color = 'black';
        } else {

            ul.style.height = '0'; 
            ul.style.overflow = 'hidden';
            setTimeout(() => {
                ul.style.height = `${ul.scrollHeight}px`; 
            }, 10);

            // đổi hướng, màu icon với chữ
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
            icon.style.color = '#F15E2C';
            buttonCategory.style.color = '#F15E2C';
        }
    });
});
/*----------------------------------------------------------------------------- */
// -------------------------------- Lựa chọn bên danh mục --------------------------------------

let selectedNations = []; // mảng lưu các lựa chọn ÁO THEO QUỐC GIA 
let selectedClubs = []; // mảng lưu các lựa chọn ÁO THEO CÂU LẠC BỘ
let selectedPriceRanges = []; // Mảng để lưu các khoảng giá 

// Gắn sự kiện click cho danh mục quốc gia
document.querySelectorAll(".category-nation li").forEach(link => {
    link.addEventListener("click", event => {
        const target = event.currentTarget;
        toggleNation(target.textContent);
        target.classList.toggle("active");
    });
});

// Gắn sự kiện click cho danh mục mùa giải
document.querySelectorAll(".category-club li").forEach(link => {
    link.addEventListener("click", event => {
        const target = event.currentTarget;
        toggleClub(target.textContent);
        target.classList.toggle("active");
    });
});


document.querySelectorAll(".category-price li").forEach(link => {
    link.addEventListener("click", event => {
        const target = event.currentTarget;
        switch (target.textContent) {
            case "< 200k":
                togglePriceRange("lessThan200");
                break;
            case "200k - 299k":
                togglePriceRange("200To299");
                break;
            case "300k - 399k":
                togglePriceRange("300To399");
                break;
            case "400k - 499k":
                togglePriceRange("400To499");
                break;
            case "> 500k":
                togglePriceRange("greaterThan500");
                break;
        }
        target.classList.toggle("active");
    });
});


// Hàm xử lý khi click vào quốc gia
function toggleNation(category) {
    const index = selectedNations.indexOf(category);
    if (index === -1) {
        selectedNations.push(category);
    } else {
        selectedNations.splice(index, 1);
    }
    filterProducts(); 
}


function toggleClub(Club) {// Hàm xử lý khi click vào mùa giải
    const index = selectedClubs.indexOf(Club);
    if (index === -1) {
        selectedClubs.push(Club);
    } else {
        selectedClubs.splice(index, 1);
    }
    filterProducts(); 
}

function togglePriceRange(priceRange) {// Hàm xử lý khi click vào giá
    const index = selectedPriceRanges.indexOf(priceRange);
    if (index === -1) {
        selectedPriceRanges.push(priceRange);
    } else {
        selectedPriceRanges.splice(index, 1);
    }
    filterProducts(); 
}

function filterProducts() {//lọc sản phẩm
    filteredProducts = products;
    // Lọc theo quốc gia
    if (selectedNations.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedNations.includes(product.category)
        );
    }

    // Lọc theo mùa giải
    if (selectedClubs.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedClubs.includes(product.category)
        );
    }

    // Lọc theo nhiều khoảng giá
    if (selectedPriceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productPrice = product.price; 
            return selectedPriceRanges.some(priceRange => {
                switch (priceRange) {
                    case "lessThan200":
                        return productPrice < 200000;
                    case "200To299":
                        return productPrice >= 200000 && productPrice <= 299000;
                    case "300To399":
                        return productPrice >= 300000 && productPrice <= 399000;
                    case "400To499":
                        return productPrice >= 400000 && productPrice <= 499000;
                    case "greaterThan500":
                        return productPrice > 500000;
                    default:
                        return false;
                }
            });
        });
    }
    // Hiển thị sản phẩm đã lọc
    showPage(1);
}
