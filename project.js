let arrMenu ="Главная, О компании, Продукция, Новости";
  let arr = arrMenu.split(", ");
  console.log(arr)


  function createMenu(){
      const str = '<input type="button" value="Пункты меню" onclick="openIMG() ">: </p> <input type="text" name="menu" value="" size="50" id="m">';
     id1.innerHTML = str
     for (index of arr){
     m.value += ` ${index}`
   }
   const str1='<p>Цвет текста:<input type="color"value="#050505"></p> <p>Цвет фона  <input type="color" value="#0d9be3"></p><p>Цвет Hover <input type="color" value="#d1a815"></p>'
   id2.innerHTML = str1
  }
    function openIMG(){
        id3.innerHTML="<img src='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'>"
    }