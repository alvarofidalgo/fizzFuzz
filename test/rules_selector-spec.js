var chai = require('chai'),
    expect = chai.expect,
	rulesSelector =require('./../lib/rules_selector.js');
	
    describe (' A configurator function with parameter',function(){

	       var rules;
		   beforeEach(function(){
		        var configurations = { default:[{ type:'divisibleRule',options: { divisor:3, message:'PIM' }}],
				                    altenative:[{type:'division'}]}
				rules = rulesSelector(configurations)
		   });
           it ('   "default" , return default configurator',function(){
		         expect(rules('default')).to.deep.equal([{ type:'divisibleRule',options: { divisor:3, message:'PIM' }}]);
		   });
	   
		   it ( ' "alternative" return other',function(){
		        expect(rules('altenative')).to.deep.equal([{type:'division'}]);	   
		   });
		   
		   it (' empty return default configuration ',function(){
		          expect(rules()).to.deep.equal([{ type:'divisibleRule',options: { divisor:3, message:'PIM' }}]);
		   });
	 
	 });