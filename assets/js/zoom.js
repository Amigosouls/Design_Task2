function check(){
    $(document).ready(function () {
        $('#comments').validate({
            rules: {
                uname: {
                    required: true,
                    minlength: 5,
                    maxlength: 12
                },
                email: {
                    required: true,
                    pattern: /^[a-z0-9]+[@]+([a-z]{5})+[\.]+([a-z]{3})+$/
                },
                phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                comments: {
                    required: true,
                }
            },
            messages: {
                uname: {
                    required: " Required",
                    minlength: "It should be minimum of 5 characters",
                    maxlength: "It should contain 12 characters only",
                },
                email: {
                    required: " Required",
                    email: "Follow email format abc@123"
                },
                phone: {
                    required: " Required",
                    minlength: "It should contain 10 digits",
                    maxlength: "It should contain 10 digits"
                },
                comments: {
                    required: " Required",
                }
            }
        })
    })
}