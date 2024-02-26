const countValue = document.querySelector('#counters');

const increment = function(){
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};

const decrement = function(){
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};