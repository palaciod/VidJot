if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: "mongodb+srv://*****:*****@vidjotdpalacio-7u3sr.mongodb.net/test?retryWrites=true&w=majority",
    }
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }
