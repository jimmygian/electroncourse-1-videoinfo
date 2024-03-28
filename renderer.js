// const electron = require('electron');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Submitted!!");
    
    const file = document.querySelector('input').files[0];

})