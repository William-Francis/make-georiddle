import * as Router from "koa-router";

export let router = new Router();
let cards = [];
let merchants = [];
let locationRiddles= {"Woolworths":"next riddle", "pnp":"another riddle"}

router.get("/", async (ctx: any, next: any) => {
  ctx.body = "HELLO WORLD!";
});

router.post("/addcard", async (ctx: any, next: any) => {
  console.log("ctx.request.body", ctx.request.body);
  //let token = ctx.request.body.event_id;
  //cards s
  if(!cards[ctx.request.body.card])
  {
    cards[ctx.request.body.card] = []
  }
  
  if (merchants.indexOf(ctx.request.body.merchant) != -1) { // Visit the same merchant twice and you get infected
    console.log(
      "\x1b[36m%s\x1b[34m%s\x1b[0m",
      "You are now an infected Zombie!?",
      "Brains! "
    );
    ctx.body = "Zombie";
  } else {
    console.log("You are still human");
    ctx.body = "Human";
  }
  merchants.push(ctx.request.body.merchant);
  console.log("cards", cards);
  console.log("merchants", merchants);
});
