let array=[]
    addArray()
       function addArray(){
        let answers=+prompt("Введите число для массива : ");
        if ( answers>0 ) {
            array.push(answers)
            addArray()
        }      
        else return array
    }
    let max = Math.max.apply(null,array);
    let find=(array.indexOf(max))
alert (`Самое больше число:${max} оно в массиве идет ${find+1} на  месте`)


       

