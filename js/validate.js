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
                $("#contact").submit();
                alert('Thank You!');
            }
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
                $("#subs").submit();
                alert('Thank You!');
            }
        })
    }
)