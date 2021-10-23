
function tempCalc() {
    let inpTemp = document.getElementById('temp');
    let select = document.getElementById('temp-diff');

    let res = 0;
    switch (select.value) {
        case 'cel':
            res = parseInt((inpTemp.value - 32)*5/9) +' °Celsius';
            break;

        case 'fah':
            res = ((inpTemp.value*(9/5)) + 32 + ' °Fahrenheit');
            break;

        default:
            res = 'Incorrect input';
        }
        document.getElementById('res-container').innerHTML = '= '+res;
}
