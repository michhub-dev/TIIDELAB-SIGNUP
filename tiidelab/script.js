function subMit(){
 fullName = document.getElementById("FN").value;
 email = document.getElementById("EM").value;
 userName = document.getElementById("USN").value;
 password = document.getElementById("PW").value;
 cpassword = document.getElementById("CPW").value;



if (password != cpassword) {
     alert("password not match")
  
}else{
  alert("https://api.openclass.ng/Register",{
    method: 'POST',
    body: JSON.stringify(data), 
    headers:{
         'Content-Type':'application/json'
    }

  }).then(function(data){
    alert("congratulation!")
  
  });
}

var data = {
  "fullName": fullname,
  "email": email,
  "userName": userName,
  "newpassword": password,
  "isEnabled": true,
  "roles": ["user"]

}


}