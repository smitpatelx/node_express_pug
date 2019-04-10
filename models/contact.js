var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
});

// Virtual for book's URL
ContactSchema
.virtual('url')
.get(function () {
    return '/contact/' + this._id;
});

//Export model
module.exports = mongoose.model('Contact', ContactSchema);
