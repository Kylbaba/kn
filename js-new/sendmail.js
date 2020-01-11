$(document).ready(function () {
    $("#questionForm").submit(function (e) {
        if ($("#questionForm input[type='text']").val() == "") {
            $("#questionForm input[type='text']").css("border", "3px solid red");
        }
        else {
            if ($("#questionForm input[type='email']").val() == "") {
                $("#questionForm input[type='email']").css("border", "3px solid red");
            }
            else {
                if ($("#questionForm textarea").val() == "") {
                    $("#questionForm textarea").css("border", "3px solid red");
                }
                else {
                    var formURL = $(this).attr("action");
                    var formData = $(this).serialize();
                    $.ajax({
                        url: formURL,
                        type: 'POST',
                        data:  formData,
                        cache: false,
                        success: function(data) {
                            if (data == "Відправлено!") {
                                $("#questionForm input[type='submit']").css("background-color", "green");
                                $("#questionForm input[type='submit']").css("color", "white");
                                $("#questionForm input[type='submit']").val(data);
                            }
                            else {
                                $("#questionForm input[type='submit']").css("background-color", "red");
                                $("#questionForm input[type='submit']").css("color", "white");
                                $("#questionForm input[type='submit']").val(data);
                            }
                            setTimeout(function () {
                                //return to simple
                            }, 1000);
                        }          
                    });
                    e.preventDefault();
                }
            }
        }
    });
});