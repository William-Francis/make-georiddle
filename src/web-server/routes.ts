import * as Router from "koa-router";

export let router = new Router(); 
var pgp = require("pg-promise")(/*options*/);

var cn = {
  host: "host", // server name or IP address;
  port: 5432,
  database: "dbname",
  user: "username",
  password: "password"
}; 

var db = pgp(cn); // database instance;

router.get("/db", async (ctx: any, next: any) => {
  ctx.body = "Hello db test Game!";
  db
    .one("SELECT * FROM riddle LIMIT 1") 
    .then(riddle => {
      console.log(riddle); 
      ctx.body = "Hello db test Game! success";
    })
    .catch(error => {
      console.log(error); // print the error;
      ctx.body = "Hello db test Game! error";
    });
});

router.get("/", async (ctx: any, next: any) => {
  ctx.body = "Hello Riddle Game!";
});
async function getRiddle(merchant) {
  return new Promise((resolve, reject) => {
    db
      .one(
        "SELECT riddle_text FROM riddle WHERE merchant_name = $1 LIMIT 1",
        merchant
      )  
      .then(message => {
        console.log("the riddle message");  
        console.log(message.riddle_text);  
        resolve(message.riddle_text);
      })
      .catch(error => {
        console.log(error); 
        resolve("No riddles here, just goods and services ^_^ ");
      });
  });
}
function saveRiddle(card,merchant)
{
  db
  .none(
    "INSERT INTO public.transaction(user_id,merchant_name,transaction_date) VALUES ('" +
      card +
      "','" +
      merchant +
      "','" +
      new Date().toLocaleString() +
      "')"
  )
  .catch(error => {
    console.log(error); // print the error;
   });
}

router.post("/visitmerchant", async (ctx: any, next: any) => {
  const returnMessage = await getRiddle(ctx.request.body.merchant);
  saveRiddle(ctx.request.body.card,ctx.request.body.merchant);
  ctx.body = returnMessage;
});
