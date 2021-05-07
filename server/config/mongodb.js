const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1234@cluster0.4geja.mongodb.net/to_do_list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(res=>{
    console.log('conected to mongo...');
}).catch(err=>{
    console.log('error:',err);
});