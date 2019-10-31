
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Load routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');


// Passport congig

require('./config/passport')(passport);

const db = require('./config/database');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// connect to mongoose
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function(){
  console.log('MongoDB Connected...')
}).catch(err => console.log(err));

// Load Idea model



// handlebars middleware
app.engine('handlebars', exphbs({
  defaultlayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Method override middleware
app.use(methodOverride('_method'))


// Express middleware
app.use(session({
  secret: 'Secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


// Global variables for expression-session
app.use((req,res,next)=>{
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
res.locals.user = req.user || null;
next();
});
// Index route
app.get('/', (req,res) => {
  const title = 'Welcome';
  res.render("index", {
    title: title
  });
});

app.get('/about',(req, res) => {
  res.render("about");
});

//




// User routes
app.use('/ideas',ideas);
app.use('/users',users);


const port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log(`Server started on port ${port}`);

});
