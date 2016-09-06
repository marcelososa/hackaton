$(document).ready(function(){
  var config = {
    emote: ["afraid", "bored", "calm", "dislike","happy","rage","sad","love","pannic","serene","surprise"],
    action: ["fart","flirt","kiss","laugh","scream","smile","sneeze"],
    pose: ["crying", "sleeping", "dancing"]
  };

  SDK.applicationId = "5175262913063533655";
  var sdk = new SDKConnection();
  var web = new WebAvatar();
  web.connection = sdk;
  web.avatar = "11557990";
  web.voice = "cmu-slt";
  web.width = "300";
  web.height = "360";
  web.createBox();
  web.openBox();
  web.addMessage("");
  web.processMessages();

  var topics = [{
    id: 1,
    title: "What Is an Object?",
    shortDesc: "An object is a software bundle of related state and behavior.",
    description: "An object is a software bundle of related state and behavior. Software objects are often used to model the real-world objects that you find in everyday life. This lesson explains how state and behavior are represented within an object, introduces the concept of data encapsulation, and explains the benefits of designing your software in this manner."
  },{
    id: 2,
    title: "What Is a Class?",
    shortDesc: "A class is a blueprint or prototype from which objects are created",
    description: "A class is a blueprint or prototype from which objects are created. This section defines a class that models the state and behavior of a real-world object. It intentionally focuses on the basics, showing how even a simple class can cleanly model state and behavior."
  },{
    id: 3,
    title: "What Is Inheritance?",
    shortDesc: "Inheritance provides a powerful and natural mechanism for organizing and structuring your software.",
    description: "Inheritance provides a powerful and natural mechanism for organizing and structuring your software. This section explains how classes inherit state and behavior from their superclasses, and explains how to derive one class from another using the simple syntax provided by the Java programming language."
  }];

  var $topics = $(".topics-wrapper");

  for(var i = 0; i<topics.length; i++){
    var $playBtn = $("<button>Play</button>").attr("id", topics[i].id),
    $li = $("<li>").text(topics[i].title).append($playBtn);

    $playBtn.data("content", topics[i].shortDesc);
    $topics.append($li);
  }

  var fart = function fart() {
    web.addMessage("","","fart");
    web.processMessages();
  };

  $topics.find('button').each(function(index){
    var $btn = $(this),
    text = $btn.data('content');

    $btn.on("click", function(){
      web.addMessage(text, "", "", "");
      //web.message(text,"","","", fart);
      web.processMessages();
    });
  });

  //--------------------------------

  //var sdk = new SDKConnection();
  var chat = new WebChatbotListener();
  chat.connection = sdk;
  chat.instance = "13929737";
  chat.instanceName = "Pepito";
  chat.prefix = "botlibre";
  chat.caption = "Chat Now";
  chat.boxLocation = "bottom-right";
  chat.color = "#009900";
  chat.background = "#fff";
  chat.bubble = true;
  chat.backlink = true;
  chat.popupURL = "http://www.botlibre.com/chat?&id=13929737&embedded=true&application=5175262913063533655&background=%23fff&prompt=You+say&send=Send";
  chat.createBox();
  chat.maximizeBox();
  
  $("#botBtn").on("click", function(){
    chat.response("Pepito","hi!");
  });

});
