if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://dpalacio:<NetFlix05>@vidjot-prod-59z5o.mongodb.net/test?retryWrites=true&w=majority'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }