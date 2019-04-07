var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    src: {type: String, required: true},
    author: {type: String, required: true},
    detalis: {type: Array, required: true}
});

// Virtual for book's URL
ProjectSchema
.virtual('/')
.get(function () {

    return '/projects/' + this._id;
});
ProjectSchema
.virtual('url')
.get(function () {
    return '/projects/';
});
//Export model
module.exports = mongoose.model('Projects', ProjectSchema);
