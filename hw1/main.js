// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let q = 'hello';
console.log(q)
alert(q)
document.write(q)

let w = 'owu';
console.log(w)
alert(w)
document.write(w)

let e = 'com';
console.log(e)
alert(e)
document.write(e)

let r = 'ua';
console.log(r)
alert(r)
document.write(r)

let t = 1;
console.log(t)
alert(t)
document.write(t)

let y = 10;
console.log(y)
alert(y)
document.write(y)

let u = -999;
console.log(u)
alert(u)
document.write(u)

let i = 123;
console.log(i)
alert(i)
document.write(i)

let o = 3.14;
console.log(o)
alert(o)
document.write(o)

let p = 2.7;
console.log(p)
alert(p)
document.write(p)

let a = 16;
console.log(a)
alert(a)
document.write(a)

let s = true;
console.log(s)
alert(s)
document.write(s)

let d = false;
console.log(d)
alert(d)
document.write(d)
// Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

q = 'new';
console.log(q)
alert(q)
document.write(q)
w = 'words';
console.log(w)
alert(w)
document.write(w)
e = 'rt';
console.log(e)
alert(e)
document.write(e)
r = 'dfl';
console.log(r)
alert(r);
document.write(r)
t = 56;
console.log(t)
alert(t)
document.write(t)
y = true;
console.log(y)
alert(y)
document.write(y)
u = 234;
console.log(u)
alert(u)
document.write(u)
i = 'fgh';
console.log(i)
alert(i)
document.write(i)
o = 4576;
console.log(o)
alert(o)
document.write(o)
p = 87;
console.log(p)
alert(p)
document.write(p)
a = false;
console.log(a)
alert(a)
document.write(a)
s = '432';
console.log(s)
alert(s)
document.write(s)
d = 'dfsga';
console.log(s)
alert(s)
document.write(s)

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

let firstName = 'Kohut';
let middleName = 'Taras';
let lastName = 'Andriyovuch';
let person = (`${firstName} ${middleName} ${lastName}`)
document.write(person)

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let a1 = prompt('Імя')
let a2= prompt('По-батькові')
let a3 = prompt('Вік')
document.write(`Вітаю  ${a1} ${a2}. Тобі ${a3} років`)

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
console.log(typeof a)
let b = '100';
console.log(typeof b)
let c = true;
console.log(typeof c)

// Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
    5 ? 6 -> true
5 ? 6 -> false
5 ? 6 -> false
5 ? 6 -> false
10 ? 10 -> true
10 ? 10 -> true
10 ? 10 -> false
10 ? 10 -> false
10 ? 10 -> false
123 ? '123' -> false
123 ? '123' -> true

console.log(new Boolean(a1 = 5 < 6))
console.log(new Boolean(a2 = 5 == 6))
console.log(new Boolean(a3 = 5 > 6))
console.log(new Boolean(a4 = 5 >= 6))
console.log(new Boolean(a5 = 10 == 10))
console.log(new Boolean(a6 = 10 / 10))
console.log(new Boolean(a7 = 10 > 10))
console.log(new Boolean(a8 = 10 < 10 ))
console.log(new Boolean(a9 = 10 != 10))
console.log(new Boolean(a10 = 123 > '123'))
console.log(new Boolean(a11 = 123 == '123'))

