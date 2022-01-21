//String is a sequence of characters

let str = 'Lets Create Something'
console.log(str)

//Properties

//1. Length
console.log(str.length)

//Methods
    //1. Extraction Methods

        //Slice Method
        //slice(startingIndex, EndingIndex+1)

        let slicedString = str.slice(5,12)
        console.log(slicedString)

        //Using Substring

        //substr(Initial length, Length)
        let subString = str.substr(5,6)
        console.log(subString)

    // 2. Replace
        // .replace(Value to be replaced, New Value)
        let str1 = 'sayHello'
        console.log(str1)

        let sayBye = str1.replace('Hello','Bye')
        console.log(sayBye)

    // 3. Upper Case and Lower Case letters
        let text1 = "Hello Check"
        
      let text3=  text1.toUpperCase()
        console.log(text3)

        let text2 = " Hello2 Check"
        let text4 = text2.toLowerCase()
        console.log(text4)
       
    // 4. Concatination method
        let fs = 'hell'
        let ss = 'o'
        
        let concatStr=fs.concat(ss)
        console.log(concatStr)


    // 5. Trim method
    
        let t1 = '              New Hello           '
        console.log(t1)
        let trimmedT1 = t1.trim()
        console.log(trimmedT1)
