require("dotenv").config();

const express = require("express");
const bp = require("body-parser");
const db = require("./src/models");
//const Poem = db.poem

const app = express();
const port = 4000;

db.mongoose
  .connect("mongodb://localhost:27017/firstapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

/*function i() {
  const p = new Poem(
    {title:"I Say Nothing Anywhere",
    content:"I say nothing anywhere, I am silent\nWhile you, as if my lord, order me silent\n\nThe story has something to say\nBut its characters are silent\n\nBlame rains down\nYet, like a stone, I am silent\n\nTill now the killer has been quite safe\nBecause the walls and doors are silent\n\nPeople demand the killer's whereabouts\nBut the village guards are silent.\n\nThe same chained evening, same time of year\nBut why this time is everyone silent?",
    url:"https:\/\/www.poemist.com\/noshi-gilani\/i-say-nothing-anywhere",
    poet:{
      name:"Noshi Gilani",
      url:"https:\/\/www.poemist.com\/noshi-gilani"}
  })
  p.save()
  console.log("poema guardado")
}*/

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

require("./src/routes/auth.routes")(app);
require("./src/routes/user.routes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
