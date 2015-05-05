module.exports = function(magicNumber,wordTransform){
		                     return function(number,wordsStack){
		                         if (number==magicNumber)
                                     wordsStack.push(wordTransform)							
		                     }
			        }