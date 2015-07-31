# TitaniumでTwilio 体験キット

TitaniumでTwilioを使うデモアプリです。Twilioからのリクエストを受け付けることができるサーバの用意が必要です。
サーバは付属のserver.rbを利用してください。

##準備
```
$ git clone git@github.com:yagitoshiro/TiTwilioBasicPhone.git
$ cd TiTwilioBasicPhone
$ appc new --import
```

server.rbの以下をご利用の環境に合わせて設定してください。
```
account_sid = '<ACOUNT SID>'
auth_token = '<AUTH TOKEN>'
demo_app_sid = '<APP SID>'
```

##初めてのTwilio
```
$ git checkout hello_twilio
$ appc ti build -p ios
```

server.rbの以下を有効に

```
  # ---(1) hello_twilio---
  #Twilio::TwiML::Response.new do |r|
  # r.Say "Hello Twilio"
  #end.text
```

##簡単な電話
```
$ git checkout basic_phone
$ appc ti build -p ios
```

server.rbの以下を有効に

```
# ---(2) basic_phone---
#Twilio::TwiML::Response.new do |r|
#  r.Dial callerId: "+815031597074" do |d|
#    d.Number params[:callTo].gsub(/^0/, '+81')
#  end
#end.text
```

##IP通話
```
$ git checkout ip_phone
$ appc ti build -p ios
```

server.rbの以下を有効に

```
# ---(3) ip_phone---
#Twilio::TwiML::Response.new do |r|
#  r.Dial callerId: "+815031597074" do |d|
#    d.Client params[:callTo]
#  end
#end.text
```
