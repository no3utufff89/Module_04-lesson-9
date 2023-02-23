'use strict'
const cart = {
    items : [], //товары
    get totalPrice () {
        return this.calculateItemPrice();
    },
    count : 0, //Кол-во товаров

    //добавить товар
    add(productName,productPrice,amountOfProduct) {
        const product = {
            name : productName,
            price : productPrice,
            amount : amountOfProduct,
        }
        this.items.push(product);
        // this.calculateItemPrice();
        this.increaseCount(amountOfProduct);
    }, 

    //увеличить количество товаров
    increaseCount(num) {
        this.count +=num;
    }, 

    //посчитать общую стоимость товаров
    calculateItemPrice() {
        let sum = 0;
        this.items.map((item) => {
            sum +=item.price * item.amount;
        });
        return sum;
    }, 

    //очистка корзины
    clear() {
        this.items =[];
        this.count = 0;
        
    }, 

    //распечатать корзину
    print() {
        let cartStr = JSON.stringify(cart);
        let cartObj = JSON.parse(cartStr);
        console.log(cartObj);
        console.log(`В строке выглядит так себе ` + cartStr)
        
    }, 
}


cart.add('Коловорот',2500,3);
cart.add('Кружка',50,13);
cart.add(`Щипцы для завивки очень хороших волос`,50,13);
// cart.clear();
cart.print()
// cart.clear();

console.log("=================Задание 2==================");
{   const newArr = [];
    const  getData = (async() => {
        fetch('https://gist.githubusercontent.com/Maksim-Methed/a1268a30f77317ce6f2733caec730816/raw/72b6175ab244ea7be14f9f304e5393ae02693124/ipv4.js')
            .then((res) => {
                return  res.text()
            })
            .then(res =>{
                let newRes = res.replace(/[^0-9,.]/gi,'').slice(1).split(',');
                return newRes;
            })
            .then (newRes => {
                let uniqueArr = [...new Set(newRes)];
                console.log(uniqueArr.length);
            })
    })
    getData();
}



