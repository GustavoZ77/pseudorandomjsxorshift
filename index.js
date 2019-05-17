var seed = 1;

//function to sleep and generate a correct feed
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//get last numbers of the feed
function generateNumbers(limit){
    var newNumber = seed.toString().
    substr((seed.toString().length+1-limit.toString().length),
    limit.toString().length);
    var div = document.getElementById("randomNumber");
    div.innerHTML +="<br><span>"+newNumber+"</span></br>"
}

//xorshit implementation 32 bits
function flip(limit) {
  sleep(1000).then(() => {
    seed = new Date().getTime();
    seed ^= (seed << 13);
    seed ^= (seed >> 17);
    seed ^= (seed << 5);
    seed = seed < 0 ?  seed *-1:seed;
    generateNumbers(limit);
  })
}

//clean results div
function clean(){
  var div = document.getElementById("randomNumber");
  div.innerHTML ="";
}

//call the below funtions
 function randomNumber(n){
   if(n > 1000000){
     throw "Number out of boundaries";
   }else if(n >= 0){
      flip(n)
  }
}
