function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            }
            
            $("#submitButton").click(function(){
                
                var errorMessage = "";
                var fieldsMissing = "";
                
                if ($("#email").val() == ""){
                    fieldsMissing += "<br>Email";
                }
                
                if ($("#telephone").val() == ""){
                    fieldsMissing += "<br>Phone Number";
                }
                
                if ($("#password").val() == ""){
                    fieldsMissing += "<br>Password";
                }
                
                if ($("#passwordConfirm").val() == ""){
                    fieldsMissing += "<br>Confirm Password";
                }
                
                if(fieldsMissing != ""){
                    errorMessage += "<p>The following fields are missing" + fieldsMissing; 
                }
                
                if (isEmail($("#email").val()) == false){
                       
                    errorMessage += "<p>Your email address is not valid.</p>";
                   
                }
                
                if ($.isNumeric($("#telephone").val()) == false){
                    
                    errorMessage += "<p>Your phone number is not numeric.</p>";
                }
                
                
                if($("#password").val() != $("#passwordConfirm").val()){
                    
                    errorMessage += "<p>The passwords don't match</p>";                
                }
               
                if (errorMessage != ""){
                    $("#errorMessage").html(errorMessage);
                } else{
                    $("#successMessage").show();
                    $("#errorMessage").hide();
                }    
                
                
            });
            