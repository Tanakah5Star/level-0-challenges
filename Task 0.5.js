function areaOfTriangle(side1,side2,side3){
    const S = (side1 + side2 + side3)/2;
    const Area = Math.sqrt(S*(S-side1)*(S-side2)*(S-side3));

    return (Area);
}
console.log(areaOfTriangle(5,3,4));
