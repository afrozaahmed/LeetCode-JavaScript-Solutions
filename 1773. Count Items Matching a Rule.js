let items = [["phone","blue","pixel"],
             ["computer","silver","lenovo"],["phone","gold","iphone"]];


var countMatches = function(items, ruleKey, ruleValue) {
    let arr=[];
  
    items.map(itr=>{
       for(let i=0;i<itr.length;i++){
         if(ruleKey == 'type' && i == 0 && itr[i] == ruleValue){
           arr.push(itr)
         }
         else if(ruleKey == 'color' && i == 1 && itr[i] == ruleValue){
           arr.push(itr)
         }
         else if(ruleKey == 'name' && i == 2 && itr[i] == ruleValue){
           arr.push(itr)
         }
       }
    })
    console.log(arr);
    
};

countMatches(items,'color','silver');