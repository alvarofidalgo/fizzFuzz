var divisibleRule = require('./divisible_rule.js'),
    magicNumberRule = require('./magic_rule.js'),
	numberToWord = require('./number_to_word.js');
	
	
var rulesFactory = {divisibleRule:function(options){
                                     return divisibleRule(options.divisor,options.message);
					              },
					magicNumber:function(options){
					                  return magicNumberRule(options.magicNumber,options.wordTransform)
					              }
                   },
	
    selectRuleByConfiguration = function(rule){
                               return rulesFactory[rule.type](rule.options);
                          };
	
module.exports = function(configurator){
                     var rulesMap = configurator('default'),
                         rules = rulesMap.map(selectRuleByConfiguration);
		             return numberToWord(rules);		 
                 }