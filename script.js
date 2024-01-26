    let displayValue = "";
    let buttons = document.querySelectorAll('.button');
    document.querySelector('input').disabled = true;
    
    Array.from(buttons).forEach (function (button) {
        button.addEventListener('click', function (elem) {
            
            if (elem.target.innerHTML == '=') {
                displayValue = eval(displayValue);
                document.querySelector('input').value = displayValue;
            }
            
            else if(elem.target.innerHTML == 'C') {
                displayValue = "";
                document.querySelector('input').value = displayValue;
            }
            
            else if (elem.target.innerHTML == 'CE') {
                // let len = displayValue.length;
                // displayValue /= 10;
                // displayValue = parseInt(displayValue);
                // displayValue = displayValue.toString();
                // displayValue -= displayValue[len];

                displayValue = displayValue.slice(0, -1);
                document.querySelector('input').value = displayValue;
            }

            else {
                displayValue = displayValue + elem.target.innerHTML;
                document.querySelector('input').value = displayValue;
            }
        });     
});
