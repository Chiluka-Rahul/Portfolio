const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click',() =>{
    navMenu.classList.toggle('show');
})

closeMenu.addEventListener('click',() =>{
    navMenu.classList.remove('show');
})


// function sendMessage(){
//     (function(){
//         emailjs.init("Pd_axqSzr6-PNN6ml"); //Acount public key
//     })();
     
//     var serviceID = "service_2xp7mvf";
//     var templateID = "template_6jrh7kh";

//     var params = {
//         sendername: document.querySelector("#name").value,
//         senderphonenumber: document.querySelector("#phonenumber").value,
//         senderemail: document.querySelector("#email").value,
//         message: document.querySelector("#message").value
//     };
//     emailjs.send(serviceID, templateID, params)
//     .then( res => {
//         alert("Thank you, " + params['sendername'] + '! Your message has been sent.');
//     })
//     .catch();
// }