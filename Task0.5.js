function calcTriangleArea(side1, side2, side3) {
  const Semiperimeter = (side1 + side2 + side3) / 2;
  const Area = Math.sqrt(
    Semiperimeter *
      (Semiperimeter - side1) *
      (Semiperimeter - side2) *
      (Semiperimeter - side3)
  );

  return Area;
}
console.log(calcTriangleArea(5, 3, 4));
