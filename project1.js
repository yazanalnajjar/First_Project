
var participants = ["Abdulrohman Al-Akrad",'Ahmad Aldarkashli','Ammar Alkhooly','Ayman Alhariri','Besslan','Esraa Ramahi','Hasan Al-Abrash','Mohammad Elokour','Mohammad Jozaa','Yazan Eliwah','Yazan Alnajjar','Yousef (Joe)','Ahmad(coach)','Amer Alkharashgah','Areej Obaid','Basma Al-Tayeh','Canaan','Fatema','Hamza Olimat','Hamzeh Obiedat','Huda Al-Raee','Iman Elokour','Jomana Obaida','Laith Obeidat','Mahmoud','Medina Sheikh','Mohammad Hassan','Moatasem Fayez Alraggad','Oday Abueid','Qusai Alzunaymat','Raed Shhabeddin','Rafat Ahmed','Rawan Akram','Rubah Addad','Sahar','Samia Albess','Sara Bashaireh','Shareef','Wael','Yasser Qasem','Yazan Eliwah','Yousef Alshabah','Kelsey','Mr. Hugh Bosely','bayan Alraqqad','zainab Hammami','Seif Miehair'];                                 

function randomName(myArray){

   return  myArray[Math.floor(Math.random() * myArray.length)];

}

$(document).ready(function(){

    

    $('#generaten').on('click',function(myArray){

      $('#whois').html ('')
      $('#whois').append('<h1>' + randomName(participants) + '</h1>')
      inputs().crazy()
      inputs().stupid()
      inputs().smart();
      inputs().nerd();
      inputs().lazy();
      inputs().cool();
      inputs().cheater();
      inputs().legChair();
      inputs().chair();
      inputs().funny();
      inputs().annoying();
      inputs().handsome();
      inputs().beautiful();
     }) 


   $('#reload').on('click',function(){
      location.reload()
   })

});


function inputs(){
   var instance={};
   instance.crazy = crazy;
   instance.stupid = stupid;
   instance.smart = smart;
   instance.nerd = nerd;
   instance.lazy = lazy;
   instance.cool = cool;
   instance.cheater = cheater;
   instance.legChair = legChair;
   instance.chair = chair;
   instance.funny = funny;
   instance.annoying = annoying;
   instance.handsome = handsome;
   instance.beautiful = beautiful;
   return instance;
}

function crazy() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="crazy") {
      $('#image').html('')
      $('#image').append('<img src="https://thumbs.gfycat.com/CraftyShoddyKid-size_restricted.gif">') 
   }

}

function stupid() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="stupid") {
      $('#image').html('')
      $('#image').append('<img src="https://media1.tenor.com/images/46184ba586520186efd7b06d7d876256/tenor.gif?itemid=10099218">') 
   }

}

function smart() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="smart") {
      $('#image').html('')
      $('#image').append('<img src="https://media1.tenor.com/images/b06111ca4f61490fe7dc535e0250d603/tenor.gif?itemid=7713620">') 
   }
}

function nerd() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="nerd") {
      $('#image').html('')
      $('#image').append('<img src="https://media.giphy.com/media/yODVOeMxWBwBO/giphy.gif">') 
   }
}

function lazy() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="lazy") {
      $('#image').html('')
      $('#image').append('<img src="https://media1.tenor.com/images/d6f9560d7bf4cc39b630595050702215/tenor.gif?itemid=4149575">') 
   }
}


function cool() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="cool") {
      $('#image').html('')
      $('#image').append('<img src="https://media.giphy.com/media/3o6UBhjHobLFgEmrJu/giphy.gif">') 
   }
}


function cheater() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="cheater") {
      $('#image').html('')
      $('#image').append('<img src="https://media.giphy.com/media/Qz05KZBMUZA8E/giphy.gif">') 
   }
}


function legChair() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="chair leg") {
      $('#image').html('')
      $('#image').append('<img src="https://s3.eu-west-1.amazonaws.com/sleeproom.assets.d3r.com/images/original/162655-oc-smu-smudge-office-upholstered-chair-study-dl.jpg">') 
   }
}


function chair() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="chair") {
      $('#image').html('')
      $('#image').append('<img src="https://harrows.co.nz/assets/uploads/2019/01/CH-Ginger-Chair-tan-uphol-GIF.gif">') 
   }
}


function funny() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="funny") {
      $('#image').html('')
      $('#image').append('<img src="https://media1.tenor.com/images/4858f43f53f0ae4cc4d9f48ef06ff002/tenor.gif?itemid=4440543">') 
   }
}


function annoying() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="annoying") {
      $('#image').html('')
      $('#image').append('<img src="https://media1.tenor.com/images/fc3d26e390806769995f75b3e14080d7/tenor.gif?itemid=11802869">') 
   }
}


function handsome() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="handsome") {
      $('#image').html('')
      $('#image').append('<img src="https://i.gifer.com/X1Kt.gif">') 
   }
}


function beautiful() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="beautiful") {
      $('#image').html('')
      $('#image').append('<img src="https://media1.giphy.com/media/RLVHPJJv7jY1q/giphy.gif">') 
   }
}



