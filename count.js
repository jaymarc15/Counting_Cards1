let count = 0;

function cc(card) {
  // Only change code below this line
  if(card==2 || card==3 || card==4 || card==5 ||card==6){
   count++;
  }
  else if (card == 7 || card == 8 || card == 9) {
      count;
  }
  else if (card==10 || card=="J" || card=="Q" || card=="K" || card=="A"){
    count--;
  }
  
  
  if(count<=0){
     return (count + " Hold");
  }
  else{
      return (count + " Bet");
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);