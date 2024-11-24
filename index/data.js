function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            matk: "TK1",
            username: "htd",
            password: "123456789",
            status: "Hoạt động",
            role: "Khách Hàng"
        },{
            matk: "TK2",
            username: "nxd",
            password: "123456789",
            status: "Hoạt động",
            role: "Nhân Viên"
        },{
            matk: "TK3",
            username: "hhd",
            password: "123456789",
            status: "Hoạt động",
            role: "Admin"
        }
        ,{
            matk: "TK4",
            username: "admin",
            password: "admin",
            status: "Hoạt động",
            role: "Admin"
        }
        )
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}


function createProducts() {
    let products = localStorage.getItem("products");
    if (!products) {
        products = [];
        products.push({
            masp: 'SP1', 
            tensp: "Manchester United Kit", 
            description:"Áo đấu sân nhà của đội Manchester United",
            size:"S",
            price: 100000,
            stock:32,
            team:"MU",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/mu1.png", 
            status:true,
        },
        {
            masp: 'SP2', 
            tensp: "Manchester City Kit", 
            description:"Áo đấu sân nhà của đội Manchester City",
            size:"S",
            price: 100000,
            stock:32,
            team:"MC",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/mc1.png", 
            status:true,
        },
        {
            masp: 'SP3', 
            tensp: "Barcelona Kit", 
            description:"Áo đấu sân nhà của đội Barcelona",
            size:"S",
            price: 100000,
            stock:32,
            team:"BC",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/bar1.png", 
            status:true,
        },
        {
            masp: 'SP4', 
            tensp: "Real Marid", 
            description:"Áo đấu sân nhà của đội Real Marid",
            size:"S",
            price: 100000,
            stock:32,
            team:"RM",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/real1.png", 
            status:true,
        },
        {
            masp: 'SP5', 
            tensp: "Al-Nassr Kit", 
            description:"Áo đấu sân nhà của đội Al-Nassr",
            size:"S",
            price: 100000,
            stock:32,
            team:"AN",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/al1.png", 
            status:true,
        },
        {
            masp: 'SP6', 
            tensp: "Manchester United Kit", 
            description:"Áo đấu sân khách của đội Manchester United",
            size:"S",
            price: 100000,
            stock:32,
            team:"MU",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/mu2.png", 
            status:true,
        },
        {
            masp: 'SP7', 
            tensp: "Manchester City Kit", 
            description:"Áo đấu sân khách của đội Manchester City",
            size:"S",
            price: 100000,
            stock:32,
            team:"MC",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/mc2.png", 
            status:true,
        },
        {
            masp: 'SP8', 
            tensp: "Real Marid Kit", 
            description:"Áo đấu sân khách của đội Real Marid",
            size:"S",
            price: 100000,
            stock:32,
            team:"RM",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/real2.png", 
            status:true,
        },
        {
            masp: 'SP9', 
            tensp: "Barcelona Kit", 
            description:"Áo đấu sân khách của đội Barcelona",
            size:"S",
            price: 100000,
            stock:32,
            team:"BC",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/bar2.png", 
            status:true,
        },
        {
            masp: 'SP10', 
            tensp: "Al-Nassr Kit", 
            description:"Áo đấu sân khách của đội Al-Nassr",
            size:"S",
            price: 100000,
            stock:32,
            team:"AN",
            national:'',
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/al2.png", 
            status:true,
        },
        {
            masp: 'SP11', 
            tensp: "Việt Nam", 
            description:"Áo đấu đội tuyển quốc gia Việt Nam",
            size:"S",
            price: 100000,
            stock:32,
            team:'',
            national:"VN",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/vn.png", 
            status:true,
        },
        {
            masp: 'SP12', 
            tensp: "Anh", 
            description:"Áo đấu đội bóng quốc gia Tam sư",
            size:"S",
            price: 100000,
            stock:32,
            team:'',
            national:"EN",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/eng.png", 
            status:true,
        },
        {
            masp: 'SP13', 
            tensp: "Pháp", 
            description:"Áo đấu đội bóng Gà trống Gaulois",
            size:"S",
            price: 100000,
            stock:32,
            team:'',
            national:"PR",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/phap.png", 
            status:true,
        },
        {
            masp: 'SP14', 
            tensp: "Argentina", 
            description:"Áo đấu của nhà vô địch WorldCup 2022",
            size:"S",
            price: 100000,
            stock:32,
            team:'',
            national:"AG",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/arg.png", 
            status:true,
        },
        {
            masp: 'SP15', 
            tensp: "Bồ Đào Nha", 
            description:"Áo đấu của đội bóng Selecao châu Âu",
            size:"S",
            price: 100000,
            stock:32,
            team:'',
            national:"PO",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/por.png", 
            status:true,
        }
    )
        localStorage.setItem('products', JSON.stringify(products));
    }
}

function createCustomers() {
    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    if (customers.length === 0) {
        customers = [
            { makh: "KH1", matk: "TK4", tenkh: "Pham Van C", sdt: "0901234567", email: "c@gmail.com", diachi: "Ha Noi" }            
        ];
        localStorage.setItem("customers", JSON.stringify(customers));
    }
}

function createOrderDetails() {
    let orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || [];
    if (orderDetails.length === 0) {
        orderDetails = [
            { madonhang: 'DH1', masp: 'SP1', soluong: 2, dongia: 50000, thanhtien: 100000 },
            { madonhang: 'DH1', masp: 'SP2', soluong: 1, dongia: 50000, thanhtien: 50000 }          
        ];
        localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    }
}

function createOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    if (orders.length === 0) {
        orders = [
            { madonhang: "DH1", makh: "KH1", thoigianmua: "2024-11-16T04:21:54.645Z", tongtien: 150000, tthd: "chưa xử lý"  }
        ];
        localStorage.setItem("orders", JSON.stringify(orders));
    }
}

window.onload = function() {
    createAdminAccount();
    createCustomers();
    createProducts();
    createOrders();
    createOrderDetails();
};
