// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {
    $("#contact").validate({
        rules:
        {
            "email": {
                required: true,
                email: true
            },
            "name": {
                required: true,
            },
            "full_name": {
                required: true
            },
            "subject": {
                required: true
            },
            "message": {
                required: true
            },
        }
    })
    
    var subvalidator = new Validator("subs")
    subvalidator.EnableMsgsTogether();
    subvalidator.addValidation("email","req","Please enter valid email address.")
    
    $("#click").click(function(){
        alert("Thank You");
    })
})