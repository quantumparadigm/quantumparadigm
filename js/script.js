
"use strict";





var velocity = 0.5;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.header').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-450;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    }); 
};

$(window).bind('scroll', update);

/*
$.stellar({
    horizontalScrolling: false,
    responsive: true
});
*/

/*
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

*/
