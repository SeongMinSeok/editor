let if_mo;
document.getElementById('yF').addEventListener('mouseover',function(){//iframe 창에  마우스를 올려두면 변수값 true
    if_mo=true;
});
window.addEventListener('blur',function(){//iframe 클릭 시 link창이 닫힌다.
    if(if_mo){
        link_popup.style.visibility="hidden";
        if_mo=false;
    }
});

$('#font_family').change(function() {
        const font_family = $(this).val();
        xE.draw.execCommand("fontName", false, font_family); 
});

$('#font_size').change(function() {
        const font_size = $(this).val();
        xE.draw.execCommand("fontSize", false, font_size); 
      
});


function color_search(){
    const tcolor_result=$("#tcolor-result").val();
    $("#tcolor_view").css("background-color","#"+tcolor_result);
    xE.draw.execCommand("foreColor", false, tcolor_result); 
}
function color(e){
    let color = $(e).css( "background-color" );
    $("#tcolor_view").css("background-color",color);
    xE.draw.execCommand("foreColor", false,color); 
}    
function back_color_search(){
    const bcolor_result=$("#bcolor-result").val();
    $("#bcolor_view").css("background-color","#"+bcolor_result);
    xE.draw.execCommand("backColor", false, bcolor_result); 
}   
function background_color(e){
    let background = $(e).css( "background-color" );
    $("#bcolor_view").css("background-color",background);
    xE.draw.execCommand("backColor", false,background); 
}
function cancel(){
    const color_popup=document.getElementById("color-popup");
    const back_color_popup=document.getElementById("backgorund-color-popup");
    color_popup.style.visibility="hidden";
    back_color_popup.style.visibility="hidden";
}
function link(){

    const link_input=document.getElementById("link_input").value;
    link_popup.style.visibility="hidden";
    xE.draw.execCommand("createLink", false,link_input); 
}

function save(){
    const content=xE.draw.body.innerHTML
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')

            

    $("#content").html(content);
}