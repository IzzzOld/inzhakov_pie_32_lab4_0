function checkPositive() {
    let N = parseInt(document.getElementById('InputN').value);
    let positive_number = false;

    if (isNaN(N) || N <= 0) {
        document.getElementById('result1').innerText = "Пожалуйста, введите корректное число";
        return;
    }

    // Используем цикл для ввода N чисел
    let inputCount = 0;

    function checkAndGetNumber() {
        if (inputCount < N) {
            let num = prompt("Введите число " + (inputCount + 1) + ":");
            num = parseInt(num);
            if (num > 0) {
                positive_number = true;
            }
            inputCount++;
            // Продолжаем запрашивать числа
            checkAndGetNumber();
        } else {
            // Когда все числа введены, выводим результат
            document.getElementById('result1').innerText = positive_number ? "TRUE" : "FALSE";
        }
    }

    // Начинаем ввод чисел
    checkAndGetNumber();
}
