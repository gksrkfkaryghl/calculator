var display = '';
var result = '';
function add(char) {
    display += char;
    document.getElementById('display').innerHTML = display; 
}
function calculate() {
    try {
        result = eval(display);
        document.getElementById('result').innerHTML = result;
    } catch (error) {
        alert('Error! Please enter your mathematical expression correctly.');
    }
}
function backspace() {
    display = display.slice(0, display.length-1);
    document.getElementById('display').innerHTML = display;
    if(display == '') {
        document.getElementById('display').innerHTML = '0';
    }
}

function displayData() {
    display += "";
    result = display;
    document.getElementById('display').innerHTML = display;
    document.getElementById('result').innerHTML = result;
}

var Clear = {
    all : function() {
        display = '';
        result = '';
        document.getElementById('display').innerHTML = '0';
        document.getElementById('result').innerHTML = result;
    },
    entry : function() {
        if(result != '') {
            Clear.all();
        } else {
            var i = display.length-1;
            while((display[i] != '+')&&(display[i] != '-')&&(display[i] != '*')&&(display[i] != '/')&&(display != '')) {
                backspace();
                i--;
            }
        }
    }
}

var changer = {
    sign : function() {
        display = "-(" + display.substring(0, display.length) + ")";
        document.getElementById('display').innerHTML = display;
    },
    upsideDown : function() {
        display = eval(display);
        display = eval(1/display);
        displayData();
    }
}

function square() {
    display = eval(display);
    display = Math.pow(display, 2);
    displayData();
}

function squareRoot() {
    display = eval(display);
    display = Math.sqrt(display);
    displayData();
}