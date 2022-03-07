
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

username=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="Welcome, "+username+"!"
function addroom(){

      roomname=document.getElementById("roomname").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroomname"
      })
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"
  }
  function logout(){
        window.location="index.html"
        localStorage.removeItem("username")
        localStorage.removeItem("roomname")
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; Room_names = childKey; 
      //Start code
console.log(Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
      //End code
 });});}
 getData()
 function redirectToRoomName(name){
       console.log(name)
       localStorage.setItem("room_name",name)
       window.location="kwitter_page.html"
 }