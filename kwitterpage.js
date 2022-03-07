var firebaseConfig = {
    apiKey: "AIzaSyDSptJUznj9RliBjpYD9rFQ6GUxpczq6co",
  authDomain: "spark-chat-8a612.firebaseapp.com",
  databaseURL: "https://spark-chat-8a612-default-rtdb.firebaseio.com",
  projectId: "spark-chat-8a612",
  storageBucket: "spark-chat-8a612.appspot.com",
  messagingSenderId: "870803445026",
  appId: "1:870803445026:web:4310f6c7477d31da40c17b"
};
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username")
room_name=localStorage.getItem("roomname")
function send(){
    msg=document.getElementById("message").value
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("message").value=""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data['name']
message=message_data['message']
like=message_data['like']
namewithtag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
likebutton="<button class='btn btn-warninng id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button>"
row=namewithtag+messagewithtag+likebutton+spanwithtag
document.getElementById("output").innerHTML+=row
//End code
 } });  }); }
getData();

function updateLike(message_id){
    button_id=message_id
    likes=document.getElementById(button_id).value
    updatelikes=Number(likes)+1
    firebase.database().ref(room_name).child(message_id).update({
        like:updatelikes
    })
}








function logout(){
    window.location="index.html"
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")
}