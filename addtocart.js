const product = [
    {
        id: 0,
        image: 'image/ee-8.png',
        title: 'Spirit rose',
        price: 120,
    },
     {
        id: 1,
        image: 'image/ee-5.jpg',
        title: 'Khaki pilo',
        price: 230,
    },
    
    {
        id: 2,
        image: 'image/ee-6.png',
        title: 'Jubilee black',
        price: 500,
    },
    {
        id: 3,
        image: 'image/ee-9.png',
        title: 'Duchen',
        price: 125,
    },
     {
        id: 4,
        image: 'image/ee-10.png',
        title: 'Lady-DateJust',
        price: 1300,
    },
     {
        id: 5,
        image: 'image/ee-11.png',
        title: 'Fosil me3',
        price: 256,
    },
    {
        id: 6,
        image: 'image/ee-14.png',
        title: 'Yaxch-Master',
        price: 1000,
    }
    
     
     
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}