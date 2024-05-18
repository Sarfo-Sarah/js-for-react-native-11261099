function processArray(arr) {
    
    const processedArray = [];
  
    
    for (let num of arr) {
      
      if (num % 2 === 0) {
        
        processedArray.push(num * num);
      } else {
       
        processedArray.push(num * 3);
      }
    }
  
    
    return processedArray;
  }
  
  
  const originalArray = [1, 4, 3, 6, 8, 2];
  const resultArray = processArray(originalArray);
  
  const stringArray =['MAJID','kofi','Caleb','Peter','judith']

  function formatArrayStrings(stringArray, processedNumbers) {
    const newString =[]
    for (let i = 0; i < stringArray.length; i++) {
      const string = stringArray[i];
      const number = processedNumbers[i];
  
      
      if (number % 2 === 0) {
        stringArray[i] = newString.push(string.toUpperCase()); 
      } else {
        stringArray[i] = newString.push(string.toLowerCase()); 
      }
    }
    return newString;
  }

  console.log(formatArrayStrings(stringArray,resultArray))
  console.log(resultArray); 
  