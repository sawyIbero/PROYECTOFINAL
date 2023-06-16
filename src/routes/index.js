const router = require('express').Router();
const passport = require('passport');


router.get('/', (req, res, next) => {
  res.render('index');
});
//routes //


router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  passReqToCallback: true
})); 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/signin',
  passReqToCallback: true
}));

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});
//salir de profile por terminacion de sesion//
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

// funcion para deslogearse //
function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}







module.exports = router;
