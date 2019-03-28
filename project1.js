
var participants = ["Abdulrohman Al-Akrad",'Ahmad Aldarkashli','Ammar Alkhooly','Ayman Alhariri','Besslan','Esraa Ramahi','Hasan Al-Abrash','Mohammad Elokour','Mohammad Jozaa','Yazan Eliwah','Yazan Alnajjar','Yousef (Joe)','Ahmad(coach)','Amer Alkharashgah','Areej Obaid','Basma Al-Tayeh','Canaan','Fatema','Hamza Olimat','Hamzeh Obiedat','Huda Al-Raee','Iman Elokour','Jomana Obaida','Laith Obeidat','Mahmoud','Medina Sheikh','Mohammad Hassan','Moatasem Fayez Alraggad','Oday Abueid','Qusai Alzunaymat','Raed Shhabeddin','Rafat Ahmed','Rawan Akram','Rubah Addad','Sahar','Samia Albess','Sara Bashaireh','Shareef','Wael','Yasser Qasem','Yazan Eliwah','Yousef Alshabah','Kelsey','Mr. Hugh Bosely','bayan Alraqqad','zainab Hammami','Seif Miehair'];                                 

function randomName(myArray){
   
   return  myArray[Math.floor(Math.random() * myArray.length)];

}

$(document).ready(function(){
    
    var result = randomName(participants);

    $('#generaten').on('click',function(myArray){
<<<<<<< HEAD
       $('#whois').html ('')
      return $('#whois').append('<h1>' + randomName(participants) + '</h1>')
     }) 

   $('#reload').on('click',function(){
=======

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
      inputs().ugly();
      inputs().famous();
      inputs().angry();
      inputs().sad();
      inputs().depressed();
      inputs().happy();
      inputs().leaving();
      inputs().dangerous();
     }) 


   $('.reload').on('click',function(){
>>>>>>> 161f09509c7fe5fca7a91ae944427481d34747a7
      location.reload()
   })

});


<<<<<<< HEAD
function ObjectOriented(){
=======
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
   instance.ugly = ugly;
   instance.famous = famous;
   instance.angry = angry;
   instance.sad = sad;
   instance.depressed = depressed;
   instance.happy = happy;
   instance.leaving = leaving;
   instance.dangerous = dangerous;

   return instance;
}

function crazy() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="crazy") {
      $('#image').html('')
      $('#image').append('<img src="https://thumbs.gfycat.com/CraftyShoddyKid-size_restricted.gif">') 
   }
>>>>>>> 161f09509c7fe5fca7a91ae944427481d34747a7

   var ins = {};
   ins.first = first
   return ins;
}


  
























<<<<<<< HEAD
=======
function happy() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="happy") {
      $('#image').html('')
      $('#image').append('<img src="http://mashable.com/wp-content/uploads/2013/07/crazy-dance.gif">') 
   }
}


function leaving() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="leaving") {
      $('#image').html('')
      $('#image').append('<img src="https://i.kym-cdn.com/photos/images/original/001/029/005/809.gif">') 
   }
}


function dangerous() {
   console.log($('#input').val().toLowerCase())
      
   if($('#input').val().toLowerCase()==="dangerous") {
      $('#image').html('')
      $('#image').append('<img src="https://media3.giphy.com/media/3ohc11UljvpPKWeNva/giphy.gif">') 
   }
}
>>>>>>> 161f09509c7fe5fca7a91ae944427481d34747a7
