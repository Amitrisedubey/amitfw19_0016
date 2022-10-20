
function store(){
    let name=document.getElementById("name");
    let pw=document.getElementById("pw");
    let lowerCaseLetter=/[a-z]/g;
    let upperCaseLetter=/[A-Z]/g;
    let number=/[0-9]/g;
      

    if(name.value.length==0){
        alert('Please fill in email')
    } else if(pw.value.length==0){
        alert('Please fill in password')
    }else if(name.value.length==0 && pw.value.length==0){
        alert('Please fill in email and password')
    }else if(pw.value.length>8){
        alert('max of 8')
    } else if(!pw.value.match(number)){
        alert('Please add 1 number')
    } else if(!pw.value.match(upperCaseLetter)){
        alert('please add 1 uppercase letter')
    } else if(!pw.value.match(lowerCaseLetter)){
        alert('please add 1 lowercase')
    } else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw',pw.value);
        alert('your account has been created')
    }
}

//checking
function check(){
    let storeName=localStorage.getItem('name');
    let storepw=localStorage.getItem('pw');
    let userName=document.getElementById('userName');
    let userPw=document.getElementById('userPw');
    let userRemember=document.getElementById('rememberMe');
    if(userName.value==storeName && userPw.value==storepw){
        alert('You are logged in')
    } else{
        alert('incorrect Id')
    }

}