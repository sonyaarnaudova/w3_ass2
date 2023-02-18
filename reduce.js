function countWords(inputWords){ //ex 6 
  
    return inputWords.reduce(function(wordCount, currentValue){

      if (!wordCount[currentValue]){
        wordCount[currentValue] = 1;
      } else {
        wordCount[currentValue] = ++wordCount[currentValue];
      }
      return wordCount;

    },{});
  }
  
  module.exports = countWords;