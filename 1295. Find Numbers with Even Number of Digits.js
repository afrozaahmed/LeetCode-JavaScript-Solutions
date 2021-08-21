var findNumbers = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i].toString().length % 2 == 0){
            count++;
        }
    }
    console.log(count);
};

findNumbers([555,901,482,1771]);