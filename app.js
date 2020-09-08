let btnsall=document.querySelectorAll('.btn');
let ouput=document.querySelector('.output');
let regX;
btnsall.forEach(e=>{
    e.addEventListener('click',checker);
})
// (^[\w])+@+([\w]{2,20})+\.+([\w]{1,5})
function checker(e) {
let answer=prompt("Enter what to check ??");
let checky=e.target.value;
console.log(answer) 
console.log();
switch (checky) {
    case 'email':
      regX=/^(\w\d?)+@+([\w]{2,20})+\.+([\w]{2,8})/i;
      regX.test(answer)?ouput.innerHTML='Matched':ouput.innerHTML='Mismatch'
        break;
        case 'phone':
         regX=/^(\+)+([\d]{1,10})+[\d]{11}$/i;
      regX.test(answer)?ouput.innerHTML='Matched':ouput.innerHTML='Mismatch'
        break;
        case 'number':
         regX=/^([\d]*)$/;
      regX.test(answer)?ouput.innerHTML='Matched':ouput.innerHTML='Mismatch'
        break;
        case 'post':
         regX=/^([\d]{0,4})$/;
      regX.test(answer)?ouput.innerHTML='Matched':ouput.innerHTML='Mismatch'
        break;
    default:
        break;
}


}