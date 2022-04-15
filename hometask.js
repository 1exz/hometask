/*1) Напишите скрипт, который с помощью функции создает столько блоков 250 х 250 пикселей, 
сколько введено в prompt и раскрашивает каждый блок рандомным цветом, размещает в центр каждого 
блока картинку размером 100 х 100 пикс.			
 */

function color(){
    let color="#",c
    let color1 =["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    for (j=1; j<=6; j++) { 
    c = Math.floor(Math.random() * color1.length);
        color+= color1[c];  
      
       }
       return color
    }
    color()
    function creat(){
    let answer=+prompt("введите кол-во div")
    let s=""
    for (i=0;i<answer;i++){
     s +=`<div style="background-color:${color()}" id="id3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/YellowE9C91E_circle_100%25.svg/200px-YellowE9C91E_circle_100%25.svg.png"></div>`
    }
    
    
    console.log(s)
    id2.innerHTML=s
    
    }
    
    creat()
    
    
    