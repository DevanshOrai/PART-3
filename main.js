var SpeechRecognition=window.webkitURL;

function start(){
recognition.start();
}

function take_snapshot(){
    console.log(img_id);

    webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}

setTimeout(function()
{
img_id="selfie1";
take_snapshot();
speak_data="TAKING YOUR SELFIE IN NEXT 10 SECONDS";
var utterThis = new SpeechSynthesisUtterance;
Synth.speak(utterThis);
}, 5000);



var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function (event){
    console.log(event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
    
    
}

function speak(){
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);


    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    height:360,
    width:420,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

    });
}

function save(){
    link=document.getElementById("link"); 
    image=document.getElementById("logo_img").src;
    link.href=image;
    link.click();
}
    

