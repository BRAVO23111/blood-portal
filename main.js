const form = document.getElementById('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');

form.addEventListener('submit' ,onsubmitt);

function onsubmitt(e){
    e.preventDefault();
    if(fname.value == '' || email.value == ''){
        console.log("not filled");
        alert("fill it");
    }
    else{
        console.log("filled");
        console.log(fname.value);
        console.log(email.value);
}
}