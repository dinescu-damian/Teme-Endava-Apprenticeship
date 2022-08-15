// Selectors
const output = document.querySelector('.output');
const result = document.querySelector('.result');
const keys = document.querySelectorAll('button');

// Event Listeners
keys.forEach(key => key.addEventListener('click', calculate));

// Functions
function calculate(){
    let buttonText = this.innerText;

    if(buttonText === 'AC'){
        output.innerText = ' ';
        result.innerText = '0';

        result.style.animation = "small 0.5s ease-in-out";
        output.style.animation = "big 0.5s ease-in-out";

        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";

        return;
    }

    if(buttonText === 'DEL'){
        output.textContent = output.textContent.substring(0, output.textContent.length - 1);
        result.style.animation = "small 0.5s ease-in-out";
        output.style.animation = "big 0.5s ease-in-out";

        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";

        return;
    }

    if(buttonText === '='){
        try{
            result.innerText = eval(output.innerText);
        }
        catch(e){
            result.innerText = 'Error';
            return;
        }
        
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";

        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }
    else{
        output.textContent += buttonText;
    }
}