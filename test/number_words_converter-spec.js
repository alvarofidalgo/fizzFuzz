var chai = require('chai'),
    expect = chai.expect,
	numbersWordsFactory = require('./../lib/number_to_words_factory.js'),
	ruleSelector = require('./../lib/rules_selector.js')(require('./../lib/rules_configurator.js'));
	  
   describe(' Number to Words function ',function(){
    var numberToWord; 
      	context('Number is divisible by',function(){
			 beforeEach(function(){
				 numberToWord =   numbersWordsFactory(ruleSelector);		    
			 })
				   
			 it (' three, word should be PIM',function(){
				  expect(numberToWord(3)).to.be.equal('PIM');
			 });
			 
			 it (' five, word should be PAM',function(){
				  expect(numberToWord(5)).to.be.equal('PAM');
			 });
			 
			 it ('  three and five Words should be PIM PAM',function(){
				  expect(numberToWord(15)).to.be.equal('PIM PAM');
			 });
			 
			 it (' number divisible by other number word should be empty ',function(){
				  expect(numberToWord(22)).to.be.equal('');
			 });
			 
			 it (' number is magic number  words should be TOMA LACASITOS',function(){
				  expect(numberToWord(32)).to.be.equal('TOMA LACASITOS');		 
			 });
	
       });

     context(' Number is magic number',function(){
	         beforeEach(function(){
				 numberToWord =   numbersWordsFactory(ruleSelector);		    
			 });
			 
	      	 it (' like 32  words should be TOMA LACASITOS',function(){
				  expect(numberToWord(32)).to.be.equal('TOMA LACASITOS');		 
			 });
             
             it (' like 73 words should be TOMA LACASITOS',function(){// 72 es mágico y divisible
			     expect(numberToWord(73)).to.be.equal('TOMA LACASITOS');
			 });			 
	 });
	 
     context('Number is magic and divisible by ',function(){
	 	     beforeEach(function(){
				 numberToWord =   numbersWordsFactory(ruleSelector);		    
			 });
			 
			 it (' three words should be PIM TOMA LACASITOS',function(){
			    expect(numberToWord(72)).to.be.equal('PIM TOMA LACASITOS');
			 });
			 
			 it (' five words should be PAM TOMA LACASITOS',function(){
			     expect(numberToWord(10)).to.be.equal('PAM TOMA LACASITOS');
			 });
			 
			 it (' three and five words should be PIM PAM TOMA LACASITOS',function(){
			     expect(numberToWord(45)).to.be.equal('PIM PAM TOMA LACASITOS');
			 });
	 });	

    context(' number is not divisible by any tranform number and not magic',function(){
            it (' not words',function(){
			   expect(numberToWord(1)).to.be.equal('');
			});
	});	
   });