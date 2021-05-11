// Your code here

function saturdayFun(act = "roller-skate"){
  return `This Saturday, I want to ${act}!`
}
saturdayFun()
saturdayFun(act="bathe my dog")
function mondayWork(work="go to the office"){
  return `This Monday, I will ${work}.`;

function saturdayFun(activity="roller-skate") {

  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(string="go to the office") {
  return `This Monday, I will ${string}.`;
>>>>>>> ffe875a346f48a02ea76b04acbaf43a147b436fa
}
mondayWork()
mondayWork(work="work from home")
function wrapAdjective(p2="*"){
  const innerFunction = function (p1 = "special"){
    return `You are ${p2}${p1}${p2}!`
  }
  return innerFunction;
}
wrapAdjective("||")("a dedicated programmer");


const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}
function actionApplyer(num,arrayOfTransforms){
  let cur=num;
  for (let i=0; i<arrayOfTransforms.length; i++){
      cur = arrayOfTransforms[i](cur);
  }
  return cur;
}
actionApplyer(13, arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]);