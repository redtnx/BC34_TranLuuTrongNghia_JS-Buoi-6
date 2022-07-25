/* Vòng lặp
- while
- do while
- for
*/

// while
var n = 0;
while (n < 3) {
  // Hành động
  console.log("Hello World");
  // Bước nhảy
  n++;
}

/*
. n = 0; n < 3 => "Hello World"; n = 1
. n = 1; n < 3 => "Hello World"; n = 2
. n = 2; n < 3 => "Hello World"; n = 3
. n = 3; n < 3 => false => stop
*/

// Bài tập 1
document.getElementById("submit").onclick = function () {
  var number = document.getElementById("number").value * 1;
  var content = "";
  while (number > 1) {
    number = Math.floor(number / 2);
    content += "<p>Number: " + number + "</p>";
  }

  document.getElementById("show").innerHTML = content;
};

// do while
var m = 0;
do {
  // Hành động
  console.log("Hello World");
  m++;
} while (m < 3);

/*
. m = 0 => "Hello World"; m = 1
. m = 1; m < 3 => "Hello World"; m = 2
. m = 2; m < 3 => "Hello World"; m = 3
. m = 3; m <3 => false => stop;
*/

// Bài tập 2
document.getElementById("submit2").onclick = function () {
  var number2 = document.getElementById("number2").value;
  var total = 0;
  var count = 0;
  do {
    total += count;
    count++;
  } while (count <= number2);
  document.getElementById("show2").innerHTML = total;
};

// for
// for (var i = 0; i < 3; i++) {
//   console.log("Hello World");
// }

/*
. i = 0; i < 3 => "Hello World"; i = 1
. i = 1; i < 3 => "Hello World"; i = 2
. i = 2; i < 3 => "Hello World"; i = 3
. i = 3; i < 3 => false => stop
*/

//Bài tập 3
document.getElementById("submit3").onclick = function () {
  var number3 = document.getElementById("number3").value * 1;
  var soChan = "";
  var soLe = "";
  for (var i = 0; i <= number3; i++) {
    if (i % 2 === 0) {
      //số chẵn
      soChan += i + " ";
    } else {
      //số lẻ
      soLe += i + " ";
    }
  }
  document.getElementById("show3").innerHTML =
    "<p>Số chẵn: " + soChan + "</p>" + "<p>Số lẻ: " + soLe + "</p>";
};

// Vòng lặp lồng
function demoVongLapLong() {
  var content = "";

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      content += "* ";
    }
    content += "\n";
  }
  console.log(content);
}
demoVongLapLong();

/*
  . i = 0; i < 5
    . j = 0; j < 5 => * ; j = 1
    . j = 1; j < 5 => * * ; j = 2
    . j = 2; j < 5 => * * * ; j = 3
    . j = 3; j < 5 => * * * * ; j = 4
    . j = 4; j < 5 => * * * * *; j = 5
    . j = 5; j < 5 => false => stop
  . i = 1; i < 5
    . j = 0; j < 5 => * ; j = 1
    . j = 1; j < 5 => * * ; j = 2
    . j = 2; j < 5 => * * * ; j = 3
    . j = 3; j < 5 => * * * * ; j = 4
    . j = 4; j < 5 => * * * * *; j = 5
    . j = 5; j < 5 => false => stop
  . i = 2; i < 5...
*/

// Break
function demoBreak() {
  for (i = 0; i < 10; i++) {
    console.log(i);
    if (i === 3) {
      console.log("Tìm thấy số 3");
      break;
    }
  }
}
demoBreak();

// Continue
function demoContinue() {
  for (i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
}
demoContinue();

// Return
function demoReturn() {
  // console.log("Hello World");
  // return; // Kết thúc chương trình
  // console.log("Hello Again");
  if (2 === 2) {
    console.log("Hello Cybersoft");
    return;
  }
  console.log("Hơi bị nhức đầu");
}
demoReturn();
