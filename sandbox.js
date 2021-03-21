
const form= document.querySelector('.signup-form');
const feedback= document.querySelector('.feedback');

 const usernamePattern= /^.{6,12}$/; 

form.addEventListener('submit', e=>{
    e.preventDefault();
    const username= form.username.value;

    if(usernamePattern.test(username)){
        feedback.textContent='The username is valid.';
    }
    else{
        feedback.textContent= 'Try anything between 6 to 8 characters';
    }
});

form.username.addEventListener('keyup', e=>{
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }
    else{
        form.username.setAttribute('class', 'error');
    }
});





