var man = [
    {
        id: 1,
        name: "The cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "250,000",
        image: "image/thoi_trang_nam_1.jpg"


    },
    {
        id: 2,
        name: "Quần baggy đen sang trong",
        code: "TC1025011BA",
        price: "390,000",
        image: "image/thoi_trang_nam_2.jpg"


    },
    {
        id: 3,
        name: "The cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "300,000",
        image: "image/thoi_trang_nam_3.jpg"

    },
    {
        id: 4,
        name: "The cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "300,000",
        image: "image/thoi_trang_nam_4.jpg"

    },
];
var woment = [
    {
        id: 1,
        name: " Quần Jean Nữ",
        code: "TC1025011BA",
        price: "250,000",
        image: "image/thoi_trang_nu_1.jpg"


    },
    {
        id: 2,
        name: "Áo Khóac Nữ ",
        code: "TC1025011BA",
        price: "390,000",
        image: "image/thoi_tranggnu_2.jpg"


    },
    {
        id: 3,
        name: "Áo phông nữ",
        code: "TC1025011BA",
        price: "300,000",
        image: "image/thoi_trang_nu_3.jpg"

    },


];
function listProducts(){
    for (let i = 0; i<man.length;i++){
        var demo = '<div class = "col-3">';
        demo += '<div class = "card" sytle = "widhth: 18rem;">';
        demo += '<img src= "'+man[i].image+'" class= "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class= "card-title">'+man[i].name+'</h5>';
        demo += '<p class= "card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class= "btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;

    }
    for (let i = 0; i<woment.length;i++){
        var demo = '<div class = "col-3">';
        demo += '<div class = "card" sytle = "widhth: 18rem;">';
        demo += '<img src= "'+woment[i].image+'" class= "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class= "card-title">'+woment[i].name+'</h5>';
        demo += '<p class= "card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class= "btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML+= demo;

    }

}