var twilio = require('org.selfkleptomaniac.mod.titwilio');
var authUrl = Alloy.Globals.authUrl;

function connect(){
  twilio.connect({
    url: authUrl,
    params: {callFrom: $.me.value, callTo: $.you.value}
  });
}

function disconnect(){
  twilio.disconnect();
}

if(Ti.Platform.osname === 'android'){
  intent = Ti.Android.createServiceIntent({url:'service.js', twilio: twilio});
  pendingIntent = Ti.Android.createPendingIntent({intent: intent});
}else{
  intent = null;
  pendingIntent = null;
}

function login(){
  twilio.addEventListener('loggedIn', function(e){
    alert("ログインしました！");
  });

  twilio.login({
    url: authUrl + '?name=' + $.me.value,
    params: {},
    pendingIntent: pendingIntent
  });
}

twilio.addEventListener('incomingConnection', function(e){
  alert("電話だよ！");
  twilio.acceptIncomingCall();
});

$.index.open();
