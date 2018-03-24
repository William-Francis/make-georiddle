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
  db
  .catch(error => {
    console.log(error); // print the error;

router.post("/visitmerchant", async (ctx: any, next: any) => {
  console.log("ctx.request.body", ctx.request.body);
});
