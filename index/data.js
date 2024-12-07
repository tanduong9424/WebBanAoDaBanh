function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push(
        {
            matk: "TK1",
            username: "admin",
            password: "admin",
            status: "Hoạt động",
            role: "admin",
            isHidden: false
        },
        {
            matk: "TK2",
            username: "duy",
            password: "12345",
            status: "Hoạt động",
            role: "Khách Hàng",
            isHidden: false
          },
          {
            matk: "TK3",
            username: "dai",
            password: "12345",
            status: "Hoạt động",
            role: "Nhân Viên",
            isHidden: false
          }          
        )
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

function createProducts() {
    let products = localStorage.getItem("products");
    if (!products) {
        products = [];
        products.push(
          {
            masp: 'SP1', 
            tensp: "Anh", 
            description:"Áo đội tuyển Anh World Cup 2018 sân khách",
            size:"S",
            price: 250000,
            stock:32,
            team:'',
            national:"EN",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/eng1.jpg", 
            status:true,
        },

        {
            masp: 'SP2', 
            tensp: "Pháp", 
            description:"Áo Đội Tuyển Pháp World Cup 2022",
            size:"S",
            price: 260000,
            stock:32,
            team:'',
            national:"PR",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/phap1.jpg", 
            status:true,
        },
        
        {
            masp: 'SP3', 
            tensp: "Barcelona Kit", 
            description:"Áo đấu sân nhà của đội Barcelona",
            size:"S",
            price: 250000,
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
            price: 220000,
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
            price: 350000,
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
            price: 320000,
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
            price: 450000,
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
            price: 410000,
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
            price: 510000,
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
            price: 550000,
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
            price: 700000,
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
            price: 650000,
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
            price: 650000,
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
            price: 620000,
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
            price: 120000,
            stock:32,
            team:'',
            national:"PO",
            date_added:"2024-11-16T04:21:54.645Z",
            image_url: "../img/por.png", 
            status:true,
        },
        {
          masp: 'SP16', 
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
          masp: 'SP17', 
          tensp: "Manchester City Kit", 
          description:"Áo đấu sân nhà của đội Manchester City",
          size:"S",
          price: 120000,
          stock:32,
          team:"MC",
          national:'',
          date_added:"2024-11-16T04:21:54.645Z",
          image_url: "../img/mc1.png", 
          status:true,
      },
        
    )
        localStorage.setItem('products', JSON.stringify(products));
    }
}

let diachiJson = {
    "regions": [
      {
        "city": "Hồ Chí Minh",
        "districts": [
          { "quan": "Quận 1" },
          { "quan": "Quận 2" },
          { "quan": "Quận 3" },
          { "quan": "Quận 4" },
          { "quan": "Quận 5" },
          { "quan": "Quận 6" },
          { "quan": "Quận 7" },
          { "quan": "Quận 8" },
          { "quan": "Quận 9" },
          { "quan": "Quận 10" },
          { "quan": "Quận 11" },
          { "quan": "Quận 12" },
          { "quan": "Quận Tân Bình" },
          { "quan": "Quận Bình Thạnh" },
          { "quan": "Quận Gò Vấp" },
          { "quan": "Quận Phú Nhuận" },
          { "quan": "Quận Bình Tân" },
          { "quan": "Thành Phố Thủ Đức" },
          { "quan": "Huyện Nhà Bè" },
          { "quan": "Huyện Hóc Môn" },
          { "quan": "Huyện Bình Chánh" },
          { "quan": "Huyện Củ Chi" },
          { "quan": "Huyện Cần Giờ" }
        ]
      },
      {
        "city": "Hà Nội",
        "districts": [
          { "quan": "Cầu Giấy" },
          { "quan": "Thanh Xuân" },
          { "quan": "Hoàng Mai" },
          { "quan": "Ba Đình" },
          { "quan": "Hoàn Kiếm" },
          { "quan": "Đống Đa" },
          { "quan": "Hà Đông" },
          { "quan": "Hai Bà Trưng" },
          { "quan": "Long Biên" },
          { "quan": "Tây Hồ" },
          { "quan": "Nam Từ Liêm" },
          { "quan": "Bắc Từ Liêm" }
        ]
      },
      {
        "city": "Đà Nẵng",
        "districts": [
          { "quan": "Hải Châu" },
          { "quan": "Thanh Khê" },
          { "quan": "Sơn Trà" },
          { "quan": "Ngũ Hành Sơn" },
          { "quan": "Liên Chiểu" },
          { "quan": "Cẩm Lệ" },
          { "quan": "Hòa Vang" },
          { "quan": "Hoàng Sa" }
        ]
      }
    ]
  };

function saveToLocalStorage(key, data) {
    if (typeof key === "string" && data) {
        localStorage.setItem(key, JSON.stringify(data));
    } 
}
  
function createCustomers() {
    let customers = localStorage.getItem("customers");
    if (!customers) {
        customers = [];
        customers.push(
        {
            "makh": "KH1",
            "matk": "TK2",
            "tenkh": "duy",
            "sdt": "0944432424",
            "email": "test2@gmail.com",
            "diachi": {
                "chitiet": "Số 38, đường Yên Lãng",
                "quan": "Đống Đa",
                "tinh": "Hà Nội"
            }
            }
        )
        localStorage.setItem('customers', JSON.stringify(customers));
    }
}

function createOrders() {
    let orders = localStorage.getItem("orders");
    if (!orders) {
        orders = [];
        orders.push(
        {
            "madonhang": "DH1",
            "makh": {
                "matk": "TK2",
                "username": "duy",
                "password": "12345",
                "status": "Hoạt động",
                "role": "Khách Hàng",
                "isHidden": false
            },
            "thoigianmua": "2024-09-06T09:10:57.986Z",
            "tongtien": 100000,
            "tthd": "đã giao"
        },
        {
            "madonhang": "DH2",
            "makh": {
              "matk": "TK2",
              "username": "duy",
              "password": "12345",
              "status": "Hoạt động",
              "role": "Khách Hàng",
              "isHidden": false
            },
            "thoigianmua": "2024-10-16T09:12:35.877Z",
            "tongtien": 570000,
            "tthd": "đã giao"
          },
          {
            "madonhang": "DH3",
            "makh": {
              "matk": "TK2",
              "username": "duy",
              "password": "12345",
              "status": "Hoạt động",
              "role": "Khách Hàng",
              "isHidden": false
            },
            "thoigianmua": "2023-12-06T09:13:15.847Z",
            "tongtien": 910000,
            "tthd": "đã giao"
          },
          {
            "madonhang": "DH4",
            "makh": {
              "matk": "TK2",
              "username": "duy",
              "password": "12345",
              "status": "Hoạt động",
              "role": "Khách Hàng",
              "isHidden": false
            },
            "thoigianmua": "2024-10-06T09:13:37.455Z",
            "tongtien": 1200000,
            "tthd": "chưa xử lý"
          },
          {
            "madonhang": "DH5",
            "makh": {
              "matk": "TK2",
              "username": "duy",
              "password": "12345",
              "status": "Hoạt động",
              "role": "Khách Hàng",
              "isHidden": false
            },
            "thoigianmua": "2024-12-07T09:13:52.968Z",
            "tongtien": 250000,
            "tthd": "đã giao"
          }

        )
        localStorage.setItem('orders', JSON.stringify(orders));
    }
}

function createOrderDetails() {
    let orderDetails = localStorage.getItem("orderDetails");
    if (!orderDetails) {
        orderDetails = [];
        orderDetails.push(
        {
            "madonhang": "DH1",
            "masp": "SP16",
            "soluong": 1,
            "dongia": 100000,
            "thanhtien": 100000
        },
        {
            "madonhang": "DH2",
            "masp": "SP3",
            "soluong": 1,
            "dongia": 250000,
            "thanhtien": 250000
        },
        {
            "madonhang": "DH2",
            "masp": "SP6",
            "soluong": 1,
            "dongia": 320000,
            "thanhtien": 320000
          },
          {
            "madonhang": "DH3",
            "masp": "SP2",
            "soluong": 1,
            "dongia": 260000,
            "thanhtien": 260000
          },
          {
            "madonhang": "DH3",
            "masp": "SP13",
            "soluong": 1,
            "dongia": 650000,
            "thanhtien": 650000
          },
          {
            "madonhang": "DH4",
            "masp": "SP10",
            "soluong": 1,
            "dongia": 550000,
            "thanhtien": 550000
          },
          {
            "madonhang": "DH4",
            "masp": "SP12",
            "soluong": 1,
            "dongia": 650000,
            "thanhtien": 650000
          },
          {
            "madonhang": "DH5",
            "masp": "SP3",
            "soluong": 1,
            "dongia": 250000,
            "thanhtien": 250000
          }
        )
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    }
}

function addressOrders() {
    let addressOrders = localStorage.getItem("addressOrders");
    if (!addressOrders) {
        addressOrders = [];
        addressOrders.push(
        {
            "nguoinhan": "duy",
            "sdtngnhan": "0944432424",
            "diachi": "abc",
            "quan": "Cầu Giấy",
            "tinh": "Hà Nội",
            "madonhang": "DH1"
        },
        {
            "nguoinhan": "Hồ Hữu Đại",
            "sdtngnhan": "0944332424",
            "diachi": "abc",
            "quan": "Quận 1",
            "tinh": "Hồ Chí Minh",
            "madonhang": "DH2"
          },
          {
            "nguoinhan": "Lương Cẩm Đào",
            "sdtngnhan": "09883234",
            "diachi": "b13b/35 đường cây cám ấp 2b xã vĩnh lộc b",
            "quan": "Tây Hồ",
            "tinh": "Hà Nội",
            "madonhang": "DH3"
          },
          {
            "nguoinhan": "duy",
            "sdtngnhan": "0944432424",
            "diachi": "abc",
            "quan": "Quận 5",
            "tinh": "Hồ Chí Minh",
            "madonhang": "DH4"
          },{
            "nguoinhan": "duy",
            "sdtngnhan": "0944432424",
            "diachi": "abc",
            "quan": "Quận 10",
            "tinh": "Hồ Chí Minh",
            "madonhang": "DH5"
          }
        )
        localStorage.setItem('addressOrders', JSON.stringify(addressOrders));
    }
}

window.onload = function() {
    createAdminAccount();
    createCustomers();
    createProducts();
    createOrders();
    createOrderDetails();
    addressOrders();
    saveToLocalStorage("diachiData", diachiJson);
    createOrders();
};
