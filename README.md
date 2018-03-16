# make-georiddle

## About

This is an experimental proof of concept for a game using the Root credit card system. 
The idea is to lead people on a journey to different merchants using fun riddles, with an ultimate prize at the end.

The next goal is to build a more complex game. 


## Instructions:

- setup Nodejs >8 (you can use an environmental manager like nvm) "$ nvm use 8"  
- run 'npm install'
- then run 'npm run dev'


## Setup ngrok locally
- Instructions are here https://dashboard.ngrok.com/get-started
- Download and install
- Connect your account ($ ./ngrok authtoken {token here} )
- Start your tunnel  ($ ./ngrok http 8080 ) or whatever you set your port to locally. 

it will give you an output like:

Session Status                online
Account                       William Francis (Plan: Free)
Version                       2.2.8
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://ed983283.ngrok.io -> localhost:8080
Forwarding                    https://ed983283.ngrok.io -> localhost:8080

Use the forwarding address to test locally in your root app.

## Setup Root connection
Once you have a root account, with a card attached and activated,
go here: https://app.root.co.za/cards/
Select your card.
Click "</> RootCode"

Inside the "afterTransaction" section add your custom code api, with the url from ngrok above.



function afterTransaction(transaction) {

// Making a POST request to Riddle
var options = {
  url: 'https://ed983283.ngrok.io/visitmerchant',
  json: { card: transaction.card_id, merchant: transaction.merchant.name}
};
var result = root.post(options);
// root.sendSMS(result);
}


Click "Run in Sandbox" and you should get a response from your local server to Root.


## For pull requests or more information, please feel free to contact me on github or the Make Slack if you are on there.