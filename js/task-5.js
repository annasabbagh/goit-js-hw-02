"use strict";
const checkForSpam = function(message) {
    const messageNormalized = message.toLowerCase();
    console.log(messageNormalized.includes('sale') || messageNormalized.includes('spam'));
}

  console.log(checkForSpam('Latest technology news')); 
  console.log(checkForSpam('JavaScript weekly newsletter'));
  console.log(checkForSpam('Get best sale offers now!'));
  console.log(checkForSpam('[SPAM] How to earn fast money?')); 
