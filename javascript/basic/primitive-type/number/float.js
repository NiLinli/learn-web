let num = 0.1;

for (let i = 0; i < 99; i++) {
    num += 0.1;
}

console.log(num); // 9.99999999999998


let num2 = 0.1;
let num3 = 10 * num2;
for (let i = 0; i < 99; i++) {

    num3 += (0.1 * 10);

}

num2 = num3 / 10;



console.log(num2); // 10