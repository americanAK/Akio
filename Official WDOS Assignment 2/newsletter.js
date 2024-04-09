document.addEventListener("DOMContentLoaded", function() {
    
    var form = document.getElementById("newsletter-form");

    
    form.addEventListener("submit", function(event) {
        
        event.preventDefault();

        
        var emailInput = document.getElementById("email");
        var email = emailInput.value;

        
        registerEmail(email);

        
        emailInput.value = "";
    });
});


function registerEmail(email) {
    
    console.log("Email subscribed:", email);
}
