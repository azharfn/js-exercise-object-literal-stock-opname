function stockOpname(items) {
    let stockItems = {
        "Ram": 10,
        "Motherboard": 4,
        "Processor": 5,
        "SSD": 8,
        "PSU": 12,
        "Cooling": 5,
    }
    //cek kondisi jika data array kosong
    if(items.length === 0) {
        return "Data not found"
    }
    // if (item.length < 1) {
    //     return "Data not Found"
    // }

    // //perulangan yang mengambil nilai dari value
    // //looping through object
    // for(const key in stockItems){
    //     stockItems[key]
    // }

    items.forEach((item) => {
        const itemName = item[0];
        const quantity = item[1];
        //console.log(quantity, itemName)
        // stockItems[itemName] = stockItems[itemName] - quantity;
        stockItems[itemName] -= quantity;
        console.log(stockItems[itemName])
    });

    return stockItems;
    // const itemResult = {};
}

let items1 = [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]

let items2 = [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname
