var restoreString = function(s, indices) {
    let arr=[];
    for(let i=0;i<indices.length;i++){
        indices.map((itr,index)=>{
            if(i == itr){
                arr.push(s[index])
               }
        })
    }
    return arr.join("");
};

restoreString("codeleet",[4,5,6,7,0,2,1,3])