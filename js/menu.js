(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    

})();

function animateNumber(element, targetNumber, duration) {
    const startNumber = parseInt(element.textContent.substring(1)); 
    const increment = Math.ceil(targetNumber / (duration / 16)); 
    let currentNumber = startNumber;

    function updateNumber() {
        currentNumber += increment;
        if (currentNumber <= targetNumber) {
            element.textContent = "+" + currentNumber;
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = "+" + targetNumber; 
        }
    }

    updateNumber();
}

animateNumber(document.getElementById("number1"), 5000, 10000);
animateNumber(document.getElementById("number2"), 2500, 10000);
animateNumber(document.getElementById("number3"), 400, 10000);

