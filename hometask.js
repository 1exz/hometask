let array=[]
    addArray()
       function addArray(){
        let answers=prompt("Введите число: ");
        if (!isNaN(parseFloat(answers)) ) {
            array.push(answers)
            addArray()
        }      
        else return array
    }
 
console.log(array)

