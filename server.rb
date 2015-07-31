require 'rubygems'
require 'sinatra'
require 'twilio-ruby'
require 'json'
 
get '/auth' do
  account_sid = '<ACOUNT SID>'
  auth_token = '<AUTH TOKEN>'
  demo_app_sid = '<APP SID>'

  capability = Twilio::Util::Capability.new account_sid, auth_token

  if params[:name]
    capability.allow_client_incoming(params[:name])
    capability.allow_client_outgoing demo_app_sid, params
  else
    capability.allow_client_outgoing demo_app_sid
  end
  token = capability.generate
  "#{token}"
end

post "/talk" do
  # 以下の1-3をコメントアウトして利用
  # ---(1) hello_twilio---
  #Twilio::TwiML::Response.new do |r|
  # r.Say "Hello Twilio"
  #end.text

  # ---(2) basic_phone---
  #Twilio::TwiML::Response.new do |r|
  #  r.Dial callerId: "+815031597074" do |d| 
  #    d.Number params[:callTo].gsub(/^0/, '+81')
  #  end
  #end.text

  # ---(3) ip_phone---
  #Twilio::TwiML::Response.new do |r|
  #  r.Dial callerId: "+815031597074" do |d| 
  #    d.Client params[:callTo]
  #  end
  #end.text
end

post "/status" do
  Twilio::TwiML::Response.new do |r|
    r.Hangup
  end.text
end

post "/fallback" do
  Twilio::TwiML::Response.new do |r|
    r.Hangup
  end.text
end
