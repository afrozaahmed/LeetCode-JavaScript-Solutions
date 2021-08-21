var countGoodRectangles = function(rectangles) {
    let array=[],obj={};
    for(let i=0;i<rectangles.length;i++){
        array.push(Math.min(...rectangles[i]))
    }
    for(let j=0;j<array.length;j++){
        if(!obj[array[j]]){
            obj[array[j]]=1;
        }else{
            obj[array[j]]++;
        }
    }
    console.log(obj[Math.max(...array)]);
};

countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]);