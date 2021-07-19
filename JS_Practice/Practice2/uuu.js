/*
/!*
--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*!/
let arr = [12, 14, 51, 23, 512];
let arr_st = ['John', 'Lisa', 'Michel', 'Alex', 'Tom'];
let arr_bull = [214, true, false, 'Michel', 'Alex'];

console.log(arr_bull);

/!*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*!/
let arr_void = [];

arr_void[0] = 141;
arr_void[1] = false;
arr_void[2] = 'false';

console.log(arr_void);

/!*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*!/

document.write('<div>');

let text='soul'
for (let i = 0; i <=10;i++){
    document.write(`<div>${text}\n</div>`);
}


document.write('</div>');

/!*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*!/
document.write('<div>');

let arr_number=[];
for (let i = 0; i <=10;i++){
    arr_number=[i];
    document.write(`<div>${text} ${arr_number}\n</div>`);

}

document.write('</div>');
/!*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.!/!*!/

document.write('<div>');
let k=0
while(k<=20){
    document.write(`<h1>${text}\n</h1>`);
    k++
}

    document.write('</div>');

/!*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*!/!*!/!*!/

document.write('<div>');
k=0
while(k<=20){
    document.write(`<h1>${text} ${arr_number}\n</h1>`);
    k++
}

document.write('</div>');

*/
/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/
/*
let arr = [12, 14, 51, 23, 512,12, 14, 51, 23, 512];
let arr_st = ['John', 'Lisa', 'Michel', 'Alex', 'Tom', 'Lisa', 'Michel', 'Alex', 'Tom', 'Tom'];
let arr_bull = [214, true, false, 'Michel', 'Alex', true, false, 'Michel', 'Alex', true];
*/

/*

for (let i = 0; i <=10;i++){
    document.write(`${arr[i]}\n`);

}

for (let i = 0; i <=10;i++){
    document.write(`${arr_st[i]}\n`);

}

for (let i = 0; i <=10;i++){
    document.write(`${arr_bull[i]}\n`);

}
*/
/*

/!*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві
 елементи*!/
let a=true;
for (let i = 0; i <=10;i++) {
    if(typeof(arr_bull[i])===typeof(a)){
    document.write(`${arr_bull[i]}\n`);
    }
}

/!*
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи**!/


let n="sda";

for (let i = 0; i <=10;i++) {
    if(typeof(arr_bull[i])===typeof(n)){
        document.write(`${arr_bull[i]}\n`);
    }
}*/


/*
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/

/*let arr_different = [];

 arr_different[0] =2;
 arr_different[1] =true;
 arr_different[2] =4;
 arr_different[3] =true;
 arr_different[4] ='link';
 arr_different[5] =1;
 arr_different[6] ='soap';
 arr_different[7] ='star';
 arr_different[8] =5;
 arr_different[9] =true;

console.log(arr_different);*/
/*
for (let i = 0; i <=10; i++) {
    console.log(i);
    document.write(i);
}

for (let i = 0; i <=100; i++) {
    console.log(i);
    document.write(i);
}*/
/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/

/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(`${i} \n`);
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        document.write(`${i} \n`);
    }
}
*/

/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив*/

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let arr=[];

for (let i=0; i<usersWithId.length; i++){
    arr[i]=usersWithId[i];
    for (let j=0;j<citiesWithId.length;j++){
        if(arr[i].id===citiesWithId[j].user_id){
            arr[i].address=citiesWithId[j];
        }
    }
}

console.log(arr)



