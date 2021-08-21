var kidsWithCandies = function(candies, extraCandies) {
    let arr=[];
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=Math.max(...candies)){
            arr.push(true);
        }else{
            arr.push(false);
        }
    }
     console.log(arr);
};

kidsWithCandies([4,2,1,1,2],1)