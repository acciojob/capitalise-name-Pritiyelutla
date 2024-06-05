//your JS code here. If required.
let input = document.getElementById("fname");
input.addEventListener("focusout", myBlurFunction);

function myBlurFunction() {
    let currval = input.value;
    let modifiedVal = currval.trim().toUpperCase();
    input.value = modifiedVal;
}
