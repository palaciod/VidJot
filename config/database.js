if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://CHmongodb+srv://dpalacio:<password>@vidjot-prod-59z5o.mongodb.net/test?retryWrites=true&w=majorityANGEME'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }