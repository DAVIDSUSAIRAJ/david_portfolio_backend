const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    name:{
     type:String,
     require:true,
    },
    feedback:{
        type:String,

    }

},
{
    timestamps:true,
}

);

module.exports = mongoose.model("Feedback",FeedbackSchema)