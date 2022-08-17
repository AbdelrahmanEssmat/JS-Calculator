let buttons = Array.from(document.getElementsByClassName("button"));
let input = document.getElementById("input");
let result = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                input.innerText = '';
                result.innerText = 'Result =';
                break;
            case '=':
                result.innerText = eval(input.innerText);
                break;
            case '←':
                if (input.innerText){
                   input.innerText = input.innerText.slice(0, -1);
                }
                break;
            default:
                input.innerText += e.target.innerText;
        }
    });
   
});