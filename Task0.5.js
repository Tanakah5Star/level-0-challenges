var side1,side2,side3;

function calcTriangleArea(side1,side2,side3){
//Using Heron's formula to calculate area of triangle using 3 sides
    const S = (side1 + side2 + side3)/2;
    const Area = Math.sqrt(S*(S-side1)*(S-side2)*(S-side3));

    return (Area);
    
}
calcTriangleArea(5,3,4);