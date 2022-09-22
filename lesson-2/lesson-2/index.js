let i=0;

while (i<10) {
    i++;
    console.log(i);
}






let v=0;

do {
    v++;
    console.log(v);
} while (v<10);






for (let x="#"; x.length<7; x+="#") {
    console.log(x);
};






let y="#";

console.log(y);

while(y.length<7) {
        y+="#";
        console.log(y);

};







let m = 0;

do {
    m++;
    let str1 = " ";
    let str2 = "# # # # # #";

    if (m % 2 == 0) {
        console.log(str1+str2);
    }
    else {
        console.log(str2+str1);
    }
    
} while (m < 7);








// Здесь пыталась хэштег и пробел каждой строки вывести отдельно, но в строку не получается.
// Так можно сделать?

// for (let z = 0; z < 7; z++) {

//     if (z % 2 == 0) {
//         for ( let b = 0; b < 7; b++) {
//             if (b % 2 == 0) {
//             let c ="#";
//             console.log(c);
//             }
//             else {
//             c =" ";
//             console.log(c);
//             }
            
//         }
              
//     } else {
//         for ( let b = 0; b < 7; b++) {
//             if (b % 2 == 0) {
//             c =" ";
//             console.log(c);
//             }
//             else {
//             c ="#";
//             console.log(c);
//             }
            
//         }
//     }
// };







let nam = 0;

while (true) {
    nam = prompt("Введите число, большее 100");
    if (nam>100) break;
   
};

console.log(nam);