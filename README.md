# calculator

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, height=device-height, target-densitydpi=high-dpi, initial-scale=1.0">
    <title>calculator</title>
    <meta charset="utf-8">
    <script src="calculate.js"></script>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <div class="h"><h1>calculator</h1></div>
        <table>
            <tr>
                <td id="display" colspan="4">0</td>
            </tr>
            <tr>
                <td id="result" colspan="4"></td>
            </tr>
            <tr>
                <td><button type="button" onclick="add('%')">%</button></td>
                <td><button type="button" onclick="squareRoot()">²√x</button></td>
                <td><button type="button" onclick="square()">x²</button></td>
                <td><button type="button" onclick="changer.upsideDown()">1/x</button></td>
            </tr>
            <tr>
                <td><button type="button" onclick="Clear.entry()">CE</button></td>
                <td><button type="button" onclick="Clear.all()">C</button></td>
                <td><button type="button" onclick="backspace()">del</button></td>
                <td><button type="button" onclick="add('/')">/</button></td>
            </tr>
            <tr>
                <td><button class="num" type="button" onclick="add('1')">1</button></td>
                <td><button class="num" type="button" onclick="add('2')">2</button></td>
                <td><button class="num" type="button" onclick="add('3')">3</button></td>
                <td><button class="num" type="button" onclick="add('*')">*</button></td>
            </tr>
            <tr>
                <td><button class="num" type="button" onclick="add('4')">4</button></td>
                <td><button class="num" type="button" onclick="add('5')">5</button></td>
                <td><button class="num" type="button" onclick="add('6')">6</button></td>
                <td><button class="num" type="button" onclick="add('-')">-</button></td>
            </tr>
            <tr>
                <td><button class="num" type="button" onclick="add('7')">7</button></td>
                <td><button class="num" type="button" onclick="add('8')">8</button></td>
                <td><button class="num" type="button" onclick="add('9')">9</button></td>
                <td><button class="num" type="button" onclick="add('+')">+</button></td>
            </tr>
            <tr>
                <td><button type="button" onclick="changer.sign()">+/-</button></td>
                <td><button class="num" type="button" onclick="add('0')">0</button></td>
                <td><button class="num" type="button" onclick="add('.')">.</button></td>
                <td><button type="button" onclick="calculate()">=</button></td>
            </tr>
        </table>

    <script>
    </script>
</body>
</html>
