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
            price: 120000,
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
            masp: 'SP17', 
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
      console.log(`Dữ liệu đã được lưu vào Local Storage với key: "${key}"`);
    } else {
      console.error("Key phải là chuỗi và data không được null hoặc undefined.");
    }
  }
  
  

window.onload = function() {
    createAdminAccount();
    createProducts();
    saveToLocalStorage("diachiData", diachiJson);
};
