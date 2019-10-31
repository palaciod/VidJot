if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://dpalacio:palacio@vidjot-prod-59z5o.mongodb.net/test?retryWrites=true&w=majority',
    secretOrKey: 'Secret'
    }
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }