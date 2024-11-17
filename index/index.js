function ThemDieuKienSearch(){
    event.preventDefault();
    document.querySelector(".advanced-search").classList.toggle("open")
}


document.querySelector(".form-search-input").addEventListener("click",(e) => {
    e.preventDefault();
    document.getElementById("home-service").scrollIntoView();
})


function hienthisanpham(){
    document.getElementById("product").innerHTML=`
        <div class="contentmenu">
            <img class=meo src="../img/21.jpg">
            <div style="border-bottom: 1px solid black;">Tên sản phẩm: Goat Antony</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: 21MU</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiết</span>
            </div>
        </div>
        <div class="contentmenu" id="sp2">
            <img class=meo src="../img/10.jpg" >
            <div style="border-bottom: 1px solid black;">Tên sản phẩm: Goat Rô</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: 7MU</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiết</span>
            </div>
        </div>
        <div class="contentmenu" id="sp3">
            <img class=meo src="../img/10.jpg" >
            <div style="border-bottom: 1px solid black;">Tên sản phẩm: Goat Si</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: 7Si</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiet</span>
            </div>
        </div>
        <div class="contentmenu" id="sp4">
            <img class=meo src="../img/2.jpg">
            <div style="border-bottom: 1px solid black;">Tên sản phẩm: MC</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: MC 2024</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiết</span>
            </div>
        </div>
        <div class="contentmenu" id="sp5">
            <img class=meo src="../img/3.jpg">
            <div style="border-bottom: 1px solid black;">Tên sản phẩm: Liver</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: LV</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiết</span>
            </div>
        </div>
        <div class="contentmenu" id="sp6">
            <img class=meo src="../img/4.jpg">
            <div style="border-bottom: 1px solid black;">Tên sản phẩm: Man U away</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: MU</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiết</span>
            </div>
        </div>
        <div class="contentmenu" id="sp7">
            <img class=meo src="../img/5.jpg">
            <div style="border-bottom: 1px solid black;">Tên sản phẩm:Phú thảo</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: ARS</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiết</span>
            </div>
        </div>
        <div class="contentmenu" id="sp8">
            <img class=meo src="../img/6.jpg">
            <div style="border-bottom: 1px solid black;">Tên sản phẩm: Newcastle</div>
            <div style="border-bottom: 1px solid black;">Mã sản phẩm: NEW</div>
            <div style="border-bottom: 1px solid black;">Giá sản phẩm: 150.000đ</div>
            <div style="margin: 8px;">
                <span>Mua</span>
                <span>Chi tiết</span>
            </div>
        </div>`
}

function hienthitrangchu() {
    document.getElementById("product").innerHTML = `
        <ul>
            <li><h1>Chào mừng bạn đến với FootBall Kit!</h1></li>
            <li><h2>FootBall Kit là nơi mang đến những bộ quần áo bóng đá chất lượng, giúp bạn thể hiện đam mê với môn thể thao vua.</h2></li>
            <li>Đồng phục chính hãng từ các câu lạc bộ hàng đầu</li>
            <li>Thiết kế áo đấu theo yêu cầu</li>
            <li>Giao hàng nhanh chóng trên toàn quốc</li>
        </ul>
        <p>Hãy khám phá các sản phẩm nổi bật của chúng tôi ngay hôm nay!</p>
    `;
}

function closeform(){
    document.getElementsByClassName("model")[0].style.display="none";
}

function openform(){
    document.getElementsByClassName("model")[0].style.display="block";
    //lấy phần từ tứ 0 trong mảng trả về vì class có nhiều cái trùng
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
                productcarthtml += `<li class="cart-item" data-id="${product.id}">
                <div class="cart-item-info">
                    <p class="cart-item-title">
                        ${product.title}
                    </p>
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

window.onload = updateAmount();/*mở cửa sổ lên mặc định gọi hàm này*/
window.onload = updateCartTotal();/*mở cửa sổ lên mặc định gọi hàm này*/

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