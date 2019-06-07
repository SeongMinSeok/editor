
    let xE = {};
   
    function xFn(e){
        
        xE.frame.focus();
      
    
        xE.draw.queryCommandSupported(e);
        let color_popup=document.getElementById("color-popup");
        let back_color_popup=document.getElementById("backgorund-color-popup");
        let link_popup=document.getElementById("link_popup");
                   
        if(e==="foreColor"){
            color_popup.style.visibility="visible";
            back_color_popup.style.visibility="hidden";
            link_popup.style.visibility="hidden";
        }else if(e==="backColor"){
           back_color_popup.style.visibility="visible";
           color_popup.style.visibility="hidden";
           link_popup.style.visibility="hidden";
        }else if(e==="createLink"){
            link_popup.style.visibility="visible";
            back_color_popup.style.visibility="hidden";
           color_popup.style.visibility="hidden";
           document.getElementById("link_input").focus();
   
        }else{
            xE.draw.execCommand(e, false); 
        }
    }

 

    window.onload = function(){
        xE.frame = document.getElementById('yF').contentWindow;
        xE.draw = xE.frame.document;

        xE.draw.write('<!DOCTYPE html><html><head></head><body></body></html>');
        xE.draw.designMode = 'on';

        xE.frame.focus();
    }
    $(function() {
            $("#img").on('change', function(){
                readURL(this);
            });
        });
      
        function readURL(input) {
            // xE.frame.focus();

            if (input.files && input.files[0]) {
                sel_img = [];

                var img = input.files;
                var imgArr = Array.prototype.slice.call(img);
    
                imgArr.forEach(function(f) {
                    if(!f.type.match("image.*")) {//이미지 검증
                        alert("확장자는 이미지 확장자만 가능합니다.");
                        $("#img").val("");
                        return;
                    }else if(f.type.match("image.*")){

                        sel_img.push(f);
                        
                        let reader = new FileReader();
                        reader.onload = function(e) {
                            xE.draw.execCommand("insertImage", false,e.target.result);
                            $('#yF').contents().find('img').addClass("img_view");
                            $('#yF').contents().find('img').css('width','700px');
                        }
                        reader.readAsDataURL(f);
                    }
    
                    
                });
               
            
            }
        }
