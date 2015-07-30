var twilio = require('org.selfkleptomaniac.mod.titwilio');
var authUrl = Alloy.Globals.authUrl;

function connect(){
  twilio.connect({
    url: authUrl,
    params: {}
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

$.connect.addEventListener('click', connect);
$.disconnect.addEventListener('click', disconnect);

$.index.addEventListener('open', function(e){
  twilio.addEventListener('loggedIn', function(e){
    alert("ログインしました！");
  });

  twilio.login({
    url: authUrl,
    params: {},
    pendingIntent: pendingIntent
  });
});

$.index.open();
