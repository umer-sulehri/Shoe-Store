// console.log(wrapper)

// wrapper.style.transform="translateX(-400vw)"

const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 199,
        colors:[
            {
                code:"black",
                img: "img/air.png",
            },
            {
                code:"darkblue",
                img: "img/air2.png",
            },
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors:[
            {
                code:"lightgray",
                img: "img/jordan.png",
            },
            {
                code:"green",
                img: "img/jordan2.png",
            },
        ]
    },
    {
        id: 3,
        title: "Presto",
        price: 109,
        colors:[
            {
                code:"lightgray",
                img: "img/presto.png",
            },
            {
                code:"green",
                img: "img/presto2.png",
            },
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors:[
            {
                code:"black",
                img: "img/crater.png",
            },
            {
                code:"lightgray",
                img: "img/crater2.png",
            },
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors:[
            {
                code:"gray",
                img: "img/hippie.png",
            },
            {
                code:"black",
                img: "img/hippie2.png",
            },
        ]
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentproductDesc = document.querySelector(".productDesc");
const currentproductColors = document.querySelectorAll(".color");
const currentproductSizes = document.querySelectorAll(".size");

menuItem.forEach((item,index) =>{
    item.addEventListener("click",() =>{
        //for change the slide

        // console.log("you clicked" + index)
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        // change the choosenProduct in product section
        choosenProduct = products[index];

        // change text of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        
        // change price of currentProduct
        currentProductPrice.textContent = "$" + choosenProduct.price;

        // change img of currentProduct
        currentProductImg.src = choosenProduct.colors[0].img;

        // change img-color of currentProduct
        currentproductColors.forEach((color,index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});

// for changing image by clicking on buttons
currentproductColors.forEach((color,index) =>{
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentproductSizes.forEach((size,index) =>{
    size.addEventListener("click",() =>{
        currentproductSizes.forEach((size) =>{
            
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });
        size.style.backgroundColor= "black";
        size.style.color= "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",() =>{
    payment.style.display = "flex";
});

close.addEventListener("click",() =>{
    payment.style.display = "none";
})




