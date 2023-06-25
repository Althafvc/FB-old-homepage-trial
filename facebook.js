$(document).ready(function(){
    $('#signup-form').validate({
        rules:{

            fname:{ minlength:4, required:true},
            sname:{required:true,minlength:4},
            mail:{required:true,email:true},
            password:{required:true,minlength:10,maxlength:20},
            day:{required:true},
            gender:{required:true}

        },
        messages:{
            fname:{required:"Enter first name",minlength:"Enter atleast 4 characters"}
        }



       
    })
})