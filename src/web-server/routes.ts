import * as Router from "koa-router";

export let router = new Router();
let cards = [];
let merchants = [];
let locationRiddles = {
  Woolworths: "Once you pick then you can Pay", // "Shop name needs to be "Woolworths"
  pnp: "Now you need to shopright to win!", // "Shop name needs to be "pnp"
  shopright: "Congrats you win!!" // "Shop name needs to be "shopright"
};
router.get("/", async (ctx: any, next: any) => {
  ctx.body = "Hello Riddle Game!";
});

router.post("/visitmerchant", async (ctx: any, next: any) => {
  console.log("ctx.request.body", ctx.request.body);
  if (!cards[ctx.request.body.card]) {
    cards[ctx.request.body.card] = [];
  }
  if (locationRiddles[ctx.request.body.merchant]) {
    ctx.body = locationRiddles[ctx.request.body.merchant];
    if (cards[ctx.request.body.card].indexOf(ctx.request.body.merchant) == -1) {
      cards[ctx.request.body.card].push(ctx.request.body.merchant);
    }
  } else {
    ctx.body = "No riddle, go to another shop (start at a place with wool)";
  }

  console.log("cards", cards);
  console.log("merchants", merchants);
});
