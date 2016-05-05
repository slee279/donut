// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function()
    {
        $("#contact").validate(
        {
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
            },
            submitHandler: function(form)
            {
                alert('Thank You!');
                $("#contact").submit();
                alert('end submitHandler');
            },
            invalidHandler: function(form, validator) 
            {
                alert('invalidHandler');
            },
        })
        
        $("#subs").validate(
        {
            rules:
            {
                "email": {
                    required: true,
                    email: true
                }
            },
            submitHandler: function(form)
            {
                alert('Thank You!');
                $("#subs").submit();
                alert('end submitHandler');
            },
            invalidHandler: function(form, validator) 
            {
                alert('invalidHandler');
            },
        })
    }
)