function recurTest(j, length) {
    setTimeout(function () {
        console.log("第" + (j + 1) + "次循环");
        if (++j < length) {
            recurTest(j, length);
        }
    }, Math.random() * 3000);
}

//recurTest(0, 5);

function forTest() {
    for (var i = 0; i < 5; i++) {
        (function (j) {
            setTimeout(function () {
                console.log("第" + (j + 1) + "次循环");
            }, Math.random() * 3000);
        }(i));
    }
}
//forTest();
const fruits = ['apple', 'coconut', 'mango', 'durian'];
for (let fruit of fruits) {
    if (fruit === 'mango') {
        break;
    }
    console.log(fruit);      //apple coconut durian
}

