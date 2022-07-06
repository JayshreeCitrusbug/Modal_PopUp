function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    console.log("blurrrr")
    // var dbody = document.getElementById('dbody');
    // dbody.classList.toggle('active');
  
}

const textColor = document.getElementById('textcolor');
const backColor = document.getElementById('backcolor');

var inputColor = document.getElementById('inputColor');
var btn = document.getElementById('btn');
// var inputColorPass = document.getElementById('inputColorPass');
var box = document.getElementById('popup');
   

    setInterval(() =>{
        let color_text = textColor.value;
        let color_back = backColor.value;
        box.style.color = color_text;
        box.style.backgroundColor = color_back;

        InputEmail.style.color = color_text;
        InputEmail.style.backgroundColor = color_back;
        
        InputPassword.style.color = color_text;
        InputPassword.style.backgroundColor = color_back;
        
        btn.style.color = color_text;
        btn.style.backgroundColor = color_back;
        btn.style.borderBlockStyle = 'dashed';

        inputColor.style.color = color_text;
    },200);


  // $(document).click(function(e){
    //     if($(e.target).closest('#popup').length != 0) {
    //         console.log("Helloooo")
    //         return false;}
    //     $('#popup').hide();
    // });

// $('#popup').css({
//     "border-width" : "0",
//     "border-style": "groove",
// });