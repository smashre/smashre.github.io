let username;

document.getElementById("loginBttn").onclick = function(){
    username = document.getElementById("usrName").value;
    
    console.log(username);
    if(document.getElementById("usrName".length) >= 1){
        document.getElementById("H1").textContent = `Welcome back, ${username}`
        
    }
    else if(document.getElementById("usrName".length) == 0){
        document.getElementById("H1").textContent = `Welcome`
    }
}