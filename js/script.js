$(document).ready(function () {
    $('div.hiddenTitle').fadeIn(1000).removeClass('hiddenTitle');
                                                    
});

$(document).ready(function () {
    $('div.hiddenServices').fadeIn(1500).removeClass('hiddenServices');
                                                    
});

$(document).ready(function () {
    $('div.hiddenContainer').fadeIn(2000).removeClass('hiddenContainer');
                                                    
});

$(document).ready(function () {
    $('div.container-fluid-Home').fadeIn(2000).removeClass('container-fluid-Home');
                                                    
});





$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Please supply your full name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            subject: {
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a subject line'
                    }
                }
            },
            message: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 100,
                        message: 'Please enter at least 10 characters and no more than 100'
                    },
                    notEmpty: {
                        message: 'Please supply a descriptive message'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow"); // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target),
                bv = $form.data('bootstrapValidator');
            // Get the BootstrapValidator instance
          

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
});


