/*
ciclo definito in cui do alla variabile 'i' un valore di 1 , poi
imposto una condizione di permanenza del ciclo ed infine do una 
modilità di avanzamento  
*/
const myBlock = document.getElementById('my-block')
for (let i = 1 ;i <= 100 ; i++ ){
    
    //se il valore da sia resto 0 con 3 & 5 allora scrive FizzBuzz
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz')
        let myFizzBuzz = document.createElement('div');
        myBlock.append(myFizzBuzz);

        myFizzBuzz.classList.add('box', 'bg-red')
        myFizzBuzz.append('FizzBuzz')
    }
    //se il valore da resto 0 scrive Fizz
    else if (i % 3 == 0){
        console.log('Fizz');
        let myFizz = document.createElement('div');
        myBlock.append(myFizz);

        myFizz.classList.add('box', 'bg-green')
        myFizz.append('Fizz')
    }
    // se il valore da resto 0 scrive Buzz
    else if (i % 5 == 0){
        console.log('Buzz');
        let myBuzz = document.createElement('div');
        myBlock.append(myBuzz);

        myBuzz.classList.add('box', 'bg-yellow')
        myBuzz.append('Buzz')
    }
    //altrimenti valore attuale
    else {
        console.log(i);
        let myI = document.createElement('div');
        myBlock.append(myI);

        myI.classList.add('box','bg-blue')
        myI.append(i)


    }
    
}
