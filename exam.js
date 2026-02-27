

let products = [
    {id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
    {id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
    {id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
    {id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true },
    {id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true },
];


const findProducts = (Id) => {

    products.forEach((products) => {
        if (products.id === Id) {
            console.log(products)
        } else {
            console.log("Không tìm thấy sản phẩm");
        }
    });

}

findProducts("P03");

const checkPrice = () => {
    const result = products.every((element) => {
        return element.price > 0 ;
    });

    if (result) {
        console.log("Dữ liệu bảng giá hợp lệ");
    } else {
        console.log("Phát hiện sản phẩm chưa cập nhật");
    }

}

checkPrice();


const catalogDisplay = () => {

    const result = products.map((products) => {
        let status;

        if (products.inStock === true ){
            status = console.log("Còn hàng");
        } else {
            status = console.log("Hết hàng");
        }

        return `${products.name} - Giá: ${products.price} - Trạng thái: ${status}`
    });

    console.log(result);
}


catalogDisplay();


