function calcTip(billValue) {
    // let tipValue;
    if (billValue >= 50 && billValue < 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
}
const tips = new Array();
const total = new Array();


for (let i = 0; i < bills.length; i++) {
    const element = bills[i];
    let tipValue = calcTip(element);
    tips.push(tipValue);
    
}
console.log(tips);
for (let j = 0; j < bills.length; j++) {
    const bValue = bills[j];
    const tValue = tips[j];
    const totalValue = bValue + tValue;
    total.push(totalValue);
}

const bills = [125, 555, 44];
console.log(total);
// for (let index = 0; index < tips.length; index++) {
//     const element = tips[index];
//     console.log(element);
    
// }
// const tipValue = calcTip(100);
// console.log(tipValue);