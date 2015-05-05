module.exports = function(rules){
				     return function(number){
					      var stack = rules.reduce(function(errorStack,rule){
					  								   rule(number,errorStack)
													   return errorStack;
												   },[]);
							  return stack.join(' ')
						   }
					   }