const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js") ;

router.get("/", (req, res) =>{
    res.render("users/home.ejs");
});

router
    .route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUp));

router
    .route("/login")
    .get(userController.renderLogInForm)
    .post( 
        saveRedirectUrl, 
        passport.authenticate("local", {
        failureRedirect: "/login", 
        failureFlash: true
        }),
        userController.logIn
    );

router.get("/logout", userController.logOut);

router.get("/terms",(req, res) =>{
    res.render("users/terms.ejs");
});

router.get("/privacy",(req, res) =>{
    res.render("users/privacy.ejs");
});

router.get("/signup", (req, res) =>{
    res.render("users/signup.ejs");
});

router.get("/login", (req, res) =>{
    res.render("users/login.ejs");
});

module.exports = router;