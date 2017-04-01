var mongoose =require('mongoose');
var assert=require('assert')
mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var shapeSchema = new Schema({
  name: String
}, { discriminatorKey: 'kind' });

var Shape = mongoose.model('Shape', shapeSchema);

var Circle = Shape.discriminator('Circle',new Schema({ radius: Number }));
var Square = Shape.discriminator('Square',new Schema({ side: Number }));

// var shapes = [
//   { name: 'Test' },
//   { kind: 'Circle', radius: 5,name:'circle',game:'ssdas'},
//   { kind: 'Square', side: 10 }
// ];

var shapes={ name:'circle',radius: 25,game:'ssdas'}

Shape.create(shapes, function(error, shapes) {
  console.log(error,shapes);
});



