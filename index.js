class Car {
    constructor(Brand, MaxPrice){
        this.Brand = Brand;
        this.MaxPrice = MaxPrice;
    }
}

const cars = {
    'Bmw': 10000,
    'Audi': 15000,
    'Toyota': 8000,
    'Mercedes': 12500,
    'Lada' : 5000
}

const willCars = {}



let brand = prompt('Укажите вашу любимую марку авто - ');
let maxPrice = prompt('Укажите ваш бюджет - ');
let listCars = [];



for (let key in cars){
    if (cars.hasOwnProperty(key)){
        if ((maxPrice >= cars[key]) || (brand == key)){
            listCars.push(key, cars[key]);
        }
        else{
            willCars[brand] = maxPrice;
        }
    }
}

console.log(willCars);
console.log(cars);
alert(listCars);
