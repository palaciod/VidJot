if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: "mongodb+srv://dpalacio:<password>@vidjot1234-pj2bq.mongodb.net/test?retryWrites=true&w=majority",
    
    }
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }