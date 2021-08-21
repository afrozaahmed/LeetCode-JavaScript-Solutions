var decompressRLElist = function(nums) {
    let arr=[];
   for(let i=0;i<nums.length;i=i+2){
       let j=1;
       while(j<=nums[i]){
           arr.push(nums[i+1]);
           j++;
       }
   }
    console.log(arr);
};

decompressRLElist([1,2,3,4]);