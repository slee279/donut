// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function()
    {
        $("#contact").validate(
        {
            submitHandler: function(form) 
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
                }
            form.submit()
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
            }
        })
    }
)