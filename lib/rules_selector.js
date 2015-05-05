var emptyConfig = {default:[]} 
module.exports = function (configuration){
                   var config = configuration || emptyConfig;
                   return function(){
					   this.ruleToApply = Array.prototype.slice.call(arguments)[0] || 'default';
					   return config[this.ruleToApply] ;
			        }
				  }