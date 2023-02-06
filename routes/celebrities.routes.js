const Celeb = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

router.post("/created", async (req, res) => {   
    try{
        console.log(req.body)
        Celeb.create(req.body); 
        res.redirect("/celebs/celebrities")
      } catch (error) {
      console.log("there is an error:", error);
      }
  });

router.get('/celebrities', async (req, res) => {
try {
    const allCelebrities = await Celeb.find()
    res.render('celebrities/celebrities.ejs', { hopper: allCelebrities })
} catch (error) {
    console.log('There is an error: ', error)
}
})

module.exports = router