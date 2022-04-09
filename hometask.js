/*
 Задача из 5 шагов-строк:
 */
let styles=["Джаз","Блюз"]
console.log(styles)
styles.push("РокэндРол")
console.log(styles)
console.log(styles.length)
styles[styles.length-2]="Классика"
console.log(styles)
let elem=styles.shift()
console.log(styles)
console.log(`этот элемент ${elem}`)
styles.unshift("Рэп","Рэгги")
console.log(styles)
 /*
 2) Написать функцию, которая возвращает последний элемент массивва 
 */  
function returnLastElem(arr){
    return arr[arr.length-1]
}
console.log(returnLastElem([1,2,3,4,35]))
/*
 3) Вычислить (суммы элементов массива):
 */
const x =[0.3,5.2, 9.4, 8]; 
const y  =[43,5,3.4,8, 20];
function summElem(x,y){
    return (x.reduce((a,b)=>a+b,0)+y.reduce((a,b)=>a+b,0))/2
    }
console.log(summElem(x,y))


/*
4) Вычислить 
C=(M!+N!)/(M+1)!
M и N – числа введенные с клавиатуры.
M! – это факториал числа, например, 5! = 1*2*3*4*5, это равно 120.
Факториал должен вычисляться с помощью функции.

 */
let m=+prompt("введите число M")
let n=+prompt("введите число N")
function factorial(x) {
    return (x != 1) ? x * factorial(x - 1) : 1;
  }
  c=((factorial(m)+factorial(n))/factorial(m+1))
  console.log(c)