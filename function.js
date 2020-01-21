1-  Define a youRock function that accepts a string argument of a name and returns a string using that name.

const youRock = function (name) {
    console.log('You Rock ' + name)
  }
  
  youRock('mohammed')





  2- Define a square function that accepts a number argument and returns that number multiplied by itself.

  const square = function (num1 , num2){

    let total1=num1*num1;
    let total2=num2*num2;
    
    console.log(total1);
    console.log(total2);
    
    }
    
    square(2,3);






    3- Define a cube function that accepts a number argument and returns that number raised to the third power.


    const cube = function (num1 , num2){

        let total1=num1*num1*num1;
        let total2=num2*num2*num2;
        
        console.log(total1);
        console.log(total2);
        
        }
        
        cube(2,3);


        4- Define a toTheFourth function that accepts a number argument and returns that number raised to the fourth power.

        const toTheFourth = function (num1 , num2){

            let total1=num1*num1*num1*num1;
            let total2=num2*num2*num2*num2;
            
            console.log(total1);
            console.log(total2);
            
            }
            
            toTheFourth(2,3);



5- Extra Practice



const calculator = function (num1 , num2 ,varable){

    if ("hello"=== typeof(num1))
        {               
    
    
       if (varable ==='add'){
    let total=num1+num2
    console.log(total)
    }
    
    else if (varable === 'subtract'){
    let total=num1-num2
    console.log(total)
    }
    
    
    else if (varable === 'divide'){
    let total=num1/num2
    console.log(total)
    }
    
    
    else if (varable === 'multiply'){
    let total=num1*num2
    console.log(total)
    }
    
    else if (varable === 'something else'){
    let total='calculator can only add, subtract, divide, or multiply'
    console.log(total)
    }
     }
    
    else {
    console.log('calculator only accept numbers')
    }
    
    
    }
        
        
        calculator('blabla',2,'divide')
