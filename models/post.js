var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var postSchema = new Schema({
   title:      String,
   subtitle:   String,
   body:       String,
   author:     String,
   date:       { type: Date, default: Date.now }
});

// Add Methods
postSchema.methods.print = function() {
   console.log(this.title);
   console.log(this.subtitle);
   console.log(this.body);
   console.log("Written by " + this.author);
   console.log("Written on " + this.date);
};

module.exports = mongoose.model('Post', postSchema);
