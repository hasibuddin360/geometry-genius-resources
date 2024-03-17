/**
 * *
 * P
 *
 * @format
 */

// this is triangle box area
function calculateTriiangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  // get triangle base value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);

  // calculate triangle
  const area = 0.5 * base * height;

  //display triangle-area

  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}

//  This rectangle box area
function calculateRectangleArea() {
  // this is Ractangle Whith
  const rectangleWhithInput = document.getElementById("rectangle-whith");
  const rectangleWhithText = rectangleWhithInput.value;
  const whith = parseFloat(rectangleWhithText);
  // this is Ractangle legnth
  const rectangleHeightInput = document.getElementById("rectangle-lenth");
  const rectangleHeightText = rectangleHeightInput.value;
  const height = parseFloat(rectangleHeightText);
  // dispaly Rectangle
  const area = whith * height;
  // disply Rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
// this calculateParallelogramArea funtion
function calculateParallelogramArea() {
  // this calculate Parallelogram Base
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBaseInput.value;
  const base = parseFloat(parallelogramBaseText);
  console.log(base);
  // this calculate Parallelogram height
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramHeightText = parallelogramHeightInput.value;
  const height = parseFloat(parallelogramHeightText);
  console.log(height);
  // dispaly Rectangle
  const area = base * height;
  // displwy Rectangle area
  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = area;
}
// This is Rhombus card  fountion---->
function calclateRhombusArea() {
  // his is Rhombos 1st d area
  const rhombusDiagonalInput = document.getElementById("rhombus-base");
  const rhombusDiagonalText = rhombusDiagonalInput.value;
  const diagonal = parseFloat(rhombusDiagonalText);
  console.log(diagonal);
  //  this is rombus 2nd area
  const rhombusDdiagonalInput = document.getElementById("rhombus-height");
  const rhombusDdiagonalText = rhombusDdiagonalInput.value;
  const ddiagonal = parseFloat(rhombusDdiagonalText);
  console.log(ddiagonal);
  // dispaly rombus
  const area = 0.5 * diagonal * ddiagonal;
  // displwy rombus area
  const rombusAreaSpan = document.getElementById("rombus-area");
  rombusAreaSpan.innerText = area;
}
// this is a ellipseArea
function ellipseArea() {
  // EllipseaAreaa a box
  const ellipseAInput = document.getElementById("ellipse-a");
  const ellipseAText = ellipseAInput.value;
  const a = parseFloat(ellipseAText);
  // EllipseaAreaa b box
  const ellipseBInput = document.getElementById("ellipse-b");
  const ellipseBText = ellipseBInput.value;
  const b = parseFloat(ellipseBText);
  // display Ellipsea
  const area = Math.PI * a * b;
  // dispalay arae
  const ellipseAreaSpan = document.getElementById("ellipse-area");
  ellipseAreaSpan.innerText = area;
}
// This is pentagon area
function pentagonArea() {
  // pentagon-base box
  const pentagonBaseInput = document.getElementById("pentagon-base");
  const pentagonBaseText = pentagonBaseInput.value;
  const base = parseFloat(pentagonBaseText);
  // pentagon-height
  const pentagonHeightInput = document.getElementById("pentagon-height");
  const pentagonHeightText = pentagonHeightInput.value;
  const height = parseFloat(pentagonHeightText);
  // display Pentagoen
  const area = 0.5 * base * height;
  // display area
  const pentagonAreaSpan = document.getElementById("pentagon-area");
  pentagonAreaSpan.innerText = area;
}
