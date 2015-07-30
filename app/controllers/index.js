var twilio = require('org.selfkleptomaniac.mod.titwilio');
var authUrl = Alloy.Globals.authUrl;

function connect(){
  twilio.connect({
    url: authUrl,
    params: {callTo: $.number.text}
  });
}

function disconnect(){
  twilio.disconnect();
}

function appendNumber(e){
  var number = $.number.text;
  $.number.text = number + e.source.title;
}

if(Ti.Platform.osname === 'android'){
  intent = Ti.Android.createServiceIntent({url:'service.js', twilio: twilio});
  pendingIntent = Ti.Android.createPendingIntent({intent: intent});
}else{
  intent = null;
  pendingIntent = null;
}

$.clear.addEventListener('click', function(e){
  $.number.text = '';
});

var status = true;
$.mainButton.addEventListener('click', function(e){
  if(status){
    if($.number.text){
      connect();
      status = false;
      $.mainButton.applyProperties({backgroundColor:'Red', title: '通話終了'});
    }else{
      alert("電話番号を入力してね");
    }
  }else{
    disconnect();
    status = true;
    $.mainButton.applyProperties({backgroundColor:'#67BC45', title: '通話開始'});
  }
});

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
