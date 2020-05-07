//Created By: Yash Paliwal
//Date: 07-05-2020
//Reviewer: RajjatB

// funtion to send msg
function sendMsg(p_Sender){
    // VARS Delcaration
    var  LGetMsg, LNewSendDiv, LNewRcvDiv, LNewSendDateSpan, 
    LNewRcvDateSpan, LDateString, LUser1ChatDiv, LUser2ChatDiv;
  
    // getting message from text box of user 1
    LGetMsg = document.getElementById(p_Sender).value;  
    console.log(LGetMsg);
    //check for empty string
    if(LGetMsg != "") {
      //defining a send side div
      LNewSendDiv = document.createElement("DIV");
      LNewSendDiv.className = "tsclsMsgDiv";
      LNewSendDiv.style.cssFloat ="right";
      LNewSendDiv.style.borderRadius = "8px 0 8px 8px";
      LNewSendDiv.style.backgroundImage ="linear-gradient(-50deg,  rgb(2, 0, 136), rgb(71, 63, 182), #0f2b44)";
      // inserting text msg detween div tag ie inside div element
      LNewSendDiv.innerHTML = LGetMsg;
  
      //def reciver side div
      LNewRcvDiv = document.createElement("DIV");
      LNewRcvDiv.className = "tsclsMsgDiv";
      LNewRcvDiv.style.cssFloat = "left";
      LNewRcvDiv.style.borderRadius = "0px 8px 8px 8px";
      LNewRcvDiv.style.backgroundImage ="linear-gradient(50deg,  rgb(2, 0, 136), rgb(71, 63, 182), #0f2b44)";
      // inserting text msg detween div tag ie inside div element
      LNewRcvDiv.innerHTML = LGetMsg; 
  
      //getting sent date and time
      LDateString = new Date().toLocaleString();
  
      // creating span element to print date sender side
      LNewSendDateSpan = document.createElement("SPAN");
      LNewSendDateSpan.innerHTML = LDateString;
      LNewSendDateSpan.className = "tsclsDTStamp";
      LNewSendDateSpan.style.cssFloat = "right";
  
      //creating date span for reciever's side
      LNewRcvDateSpan = document.createElement("SPAN");
      LNewRcvDateSpan.innerHTML = LDateString;
      LNewRcvDateSpan.className = "tsclsDTStamp";
      LNewRcvDateSpan.style.cssFloat = "left";

    //Getting User Chat Area
      LUser1ChatDiv = document.getElementById("tsUser1ChatArea");
      LUser2ChatDiv = document.getElementById("tsUser2ChatArea");

    //APPENDINg childs
    //if msg is sent from user1 textbox
    if(p_Sender == 'tsUser1Msg'){
    //user1 is sender so appending sender elements to user1 side
    LUser1ChatDiv.appendChild(LNewSendDiv);
    LUser1ChatDiv.appendChild(LNewSendDateSpan);
    // and appending reciver's element in user2
    LUser2ChatDiv.appendChild(LNewRcvDiv);
    LUser2ChatDiv.appendChild(LNewRcvDateSpan);
    }

    //if msg is sent from user2 textbox
    if(p_Sender == 'tsUser2Msg'){
    //user2 is sender so appending sender elements to user2 side
    LUser2ChatDiv.appendChild(LNewSendDiv);
    LUser2ChatDiv.appendChild(LNewSendDateSpan);
    // and appending reciver's element in user1
    LUser1ChatDiv.appendChild(LNewRcvDiv);
    LUser1ChatDiv.appendChild(LNewRcvDateSpan);
    }

    // adusting view to the bottRclsUsrMsgDTRecvom
    LNewSendDateSpan.scrollIntoView();
    LNewRcvDateSpan.scrollIntoView();

    // clearing msg box value
    document.getElementById(p_Sender).value = "";
    
    //updating footer
    document.getElementById("tsFooterUpdate").innerHTML = "Copyrights @ Yash Paliwal | Latest Update: " + LDateString;

    
    } else {
        alert("Enter some message bruh!");
    }
  }
//  For Enter key
var LMsgFromUser1 = document.getElementById("tsUser1Msg");
LMsgFromUser1.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { sendMsg('tsUser1Msg'); }
} );


var LMsgFromUser2 = document.getElementById("tsUser2Msg");
LMsgFromUser2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { sendMsg('tsUser2Msg'); }
} );

// clear chat function
function clearChat(p_Parent){
    var LChilds, LPara;

    LChilds = document.getElementById(p_Parent);
    while (LChilds.hasChildNodes()) {
        LChilds.removeChild(LChilds.firstChild);
    }

    LPara = document.createElement("p");
    LPara.className = "tsclsClearChat";
    LPara.innerHTML = "No messages to show"; 
    LChilds.append(LPara);
}
