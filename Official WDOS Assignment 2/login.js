document.getElementById('login.json').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    var userData = {
        "users": [
            {
                "username": "admin",
                "password": "admin",
                "role": "admin",
                "email": "admin@gmail.com"
            },
            {
                "username": "user",
                "password": "user",
                "role": "site-user",
                "email": "user@user.com"
            }
        ]
    };

    
    var authenticatedUser = userData.users.find(function(user) {
        return user.username === username && user.password === password;
    });

    
    if (authenticatedUser) {
        
        window.location.href = 'dashboard.html'; 
    } else {
        
        alert('Invalid username or password. Please try again.');
    }
});
function auth(){
    var email= document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email=="admin" && password=="admin123"){
        window.location.assign("index.html");
        alert("login successful");

    }
    else{
        alert("Invalid Information");
        return;
    }
}