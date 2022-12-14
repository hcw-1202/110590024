"use strict";
var providerGoogle=new firebase.auth.GoogleAuthProvider;
var google=document.getElementById("google");
var googleCode=document.getElementById("googleCode");
var googleError=document.getElementById("googleError");
var providerFb=new firebase.auth.FacebookAuthProvider;
var fb=document.getElementById("fb");
var fbCode=document.getElementById("fbCode");
var fbError=document.getElementById("fbError");

function openOut(){
  document.getElementById("out").classList.remove("d-none")
}

function signOut(){
  document.getElementById("signOut").addEventListener("click",(
    function(){
      firebase.auth().signOut().then((
        function(){
          window.alert("登出成功，將重新整理一次頁面！"),window.location.reload()
        }
      )).catch((
        function(e){
          document.getElementById("userError").innerHTML=JSON.stringify(e)
        }
      ))
    }
  ))
}

function deleteUser(){
  var e=firebase.auth().currentUser;
  null!==e?document.getElementById("deleteUser").addEventListener("click",(
    function(){
      e.delete().then((
        function(){
          window.alert("刪除成功，將重新整理一次頁面！"),window.location.reload()
        }
      )).catch((
        function(e){
          document.getElementById("userError").innerHTML=JSON.stringify(e)
        }
      ))
    }
  )):document.getElementById("userError").innerHTML="請重新登入會員，再執行刪除功能"
}


google.addEventListener("click",(function(){for(var e,n=document.getElementsByName("googleType"),t=n.length,o=0;o<t;o++)if(n[o].checked){e=n[o].value;break}"popup"===e?firebase.auth().signInWithPopup(providerGoogle).then((function(e){e.credential.accessToken;var n=e.user;console.log("🚀 ~ file: main.js ~ line 70 ~ .then ~ user",n),googleCode.innerHTML=JSON.stringify(n),openOut(),signOut(),deleteUser(),fbCode.innerHTML="登入完後的資料會出現在這"})).catch((function(e){e.code,e.message,e.email,e.credential;googleError.innerHTML=JSON.stringify(e)})):"redirect"===e&&firebase.auth().signInWithRedirect(providerGoogle)})),fb.addEventListener("click",(function(){for(var e,n=document.getElementsByName("fbType"),t=n.length,o=0;o<t;o++)if(n[o].checked){e=n[o].value;break}"popup"===e?firebase.auth().signInWithPopup(providerFb).then((function(e){e.credential.accessToken;var n=e.user;console.log("🚀 ~ file: main.js ~ line 113 ~ .then ~ user",n),fbCode.innerHTML=JSON.stringify(n),openOut(),signOut(),deleteUser(),googleCode.innerHTML="登入完後的資料會出現在這"})).catch((function(e){e.code,e.message,e.email,e.credential})):"redirect"===e&&firebase.auth().signInWithRedirect(providerFb)})),document.addEventListener("DOMContentLoaded",(function(){firebase.auth().getRedirectResult().then((function(e){if(e.credential)e.credential.accessToken;var n=e.user;if(n){var t=n.providerData[0].providerId;console.log("🚀 ~ file: main.js ~ line 148 ~ .then ~ provider",t),t.indexOf("google")>-1?googleCode.innerHTML=JSON.stringify(n):fbCode.innerHTML=JSON.stringify(n),openOut(),signOut(),deleteUser()}})).catch((function(e){e.code,e.message,e.email,e.credential;fbError.innerHTML=JSON.stringify(e)}))}));