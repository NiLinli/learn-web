class Shop{

    // error
    // static name = 'outlet';  

    static Discount(){
        console.log('-------0.3 percent');
    }
}

// static property
Shop.name = 'outlet';

console.log(Shop.name);
console.log(Shop.Discount());


// es2015 没有静态属性
// 只有静态方法