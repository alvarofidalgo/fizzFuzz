module.exports =  function(divisibleNumber,wordTransform){
			              return  function (number,wordsStack){
								     if ( number % divisibleNumber === 0)
											wordsStack.push(wordTransform);
		                   }
                       }
