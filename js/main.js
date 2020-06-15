function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function back() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = exp.substring(0, exp.length - 1);
    }
}

function cl() {
    document.form.textview.value = '';
}

function squareRoot() {
    var exp = document.form.textview.value;
    if (!exp) {
        alert('Digite um valor para descobrir a raiz quadrada!');
        return;
    }

    var a = 1,
        b = 0;
    for (var i = 0; i < exp; i++) {
        b = exp / a;
        a = (b + a) / 2;
    }

    document.form.textview.value = a.toFixed(11);
}
