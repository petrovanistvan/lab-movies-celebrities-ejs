// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

router.post("/create", (req, res) => {
    console.log(req.body)
  });

module.exports = router

router.post("/create", async (req, res) => {

    try{
      const body = await req.body
      res.redirect("/celebrities")
    } catch (error) {
      res.render("celebrities/new-celebrity");
    }
  })