# TitaniumでTwilio 体験キット

TitaniumでTwilioを使うデモアプリです。Twilioからのリクエストを受け付けることができるサーバの用意が必要です。

##準備
```
$ git clone git@github.com:yagitoshiro/TiTwilioBasicPhone.git
$ cd TiTwilioBasicPhone
$ appc new --import
```

##初めてのTwilio
```
$ git checkout hello_twilio
$ appc ti build -p ios
```

##簡単な電話
```
$ git checkout basic_phone
$ appc ti build -p ios
```

##IP通話
```
$ git checkout ip_phone
$ appc ti build -p ios
```
