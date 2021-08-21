var shuffle = function(nums, n) {
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(nums[i])
        arr.push(nums[n+i])
    }
     console.log(arr);
};

shuffle([2,5,1,3,4,7],3)