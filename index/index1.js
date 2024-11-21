const products = [
    { id: 1, name: "Tên Sản Phẩm 1", image: "../img/3.jpg", price: 100000, category: "Anh"  },
    { id: 2, name: "Tên Sản Phẩm 2", image: "../img/4.jpg", price: 110000, category: "Pháp"},
    { id: 3, name: "Tên Sản Phẩm 3", image: "../img/5.jpg", price: 120000, category: "Bồ Đào Nha" },
    { id: 4, name: "Tên Sản Phẩm 4", image: "../img/6.jpg", price: 250000, category: "Agentina" },
    { id: 5, name: "Tên Sản Phẩm 5", image: "../img/7.jpg", price: 350000, category: "Việt Nam" },
    { id: 6, name: "Tên Sản Phẩm 6", image: "../img/10.jpg", price: 150000, category: "Đức" },

    { id: 7, name: "Tên Sản Phẩm 7", image: "../img/11.png", price: 160000, category: "Premier League"},
    { id: 8, name: "Tên Sản Phẩm 8", image: "../img/12.png", price: 600000, category: "Laliga"},
    { id: 9, name: "Tên Sản Phẩm 9", image: "../img/21.jpg", price: 680000, category: "League One"},
    { id: 10, name: "Tên Sản Phẩm 10", image: "images/2.png", price: 790000, category: "Saudi Pro League"},
    { id: 11, name: "Tên Sản Phẩm 11", image: "images/2.png", price: 200000, category: "MLS"},
    { id: 12, name: "Tên Sản Phẩm 12", image: "images/2.png", price: 210000, category: "Đức"},

    { id: 13, name: "Tên Sản Phẩm 13", image: "images/1.png", price: 220000, category: "Agentina"},
    { id: 14, name: "Tên Sản Phẩm 14", image: "images/2.png", price: 230000, category: "Agentina"},
    { id: 15, name: "Tên Sản Phẩm 15", image: "images/1.png", price: 240000, category: "Agentina"},
    { id: 16, name: "Tên Sản Phẩm 16", image: "images/2.png", price: 250000, category: "Bồ Đào Nha"},
    { id: 17, name: "Tên Sản Phẩm 17", image: "images/1.png", price: 260000, category: "Việt Nam"},
    { id: 18, name: "Tên Sản Phẩm 18", image: "images/2.png", price: 270000, category: "Việt Nam"},

];

const cart = []; // giỏ hàng đẩy lên localStorage 

const itemsPerPage = 6; // số sản phẩm/ trang
let filteredProducts = products; // mảng này để lưu các sản phẩm khi đã lọc hoặc tìm kiếm. 

// phân trang







// // Hàm tìm kiếm
// function searchProducts() {
//     const searchInput = document.getElementById("searchInput").value.toLowerCase();
//     // Lọc sản phẩm dựa trên từ khóa tìm kiếm
//     filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchInput)
//     );
//     // Hiển thị trang đầu tiên của kết quả tìm kiếm
//     showPage(1);
// }










//------------------------------------- hết--------------------------------------------------------




