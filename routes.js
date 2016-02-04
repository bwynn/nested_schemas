var mongoose = require('mongoose');
var Group = require('./models/group');
var Image = require('./models/image');
var User = require('./models/user');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.json({message: 'Yep, its working so far'});
  });

  // create a new user instance and add an image into the user's images array
  app.post('/populate', function(req, res) {

    var user = new User();
    var img = new Image();

    img.url = req.body.imgUrl;
    user.username = req.body.username;
    // if the imgUrl property has been filled out
    if (req.body.imgUrl) {
      user.image.push(img); // add the image to the user's image array
    }

    user.save(function(err, user) {
      if (err) {
        res.send(err);
      }

      res.json(user);
    });
  });

  // update images based on user id
  app.put('/populate/addImg', function(req, res) {
    User.findOne({_id: req.body.id}, function(err, user) {
      // instantiate new image
      var img = new Image();
      // url value from req.body.imgUrl
      img.url = req.body.imgUrl;
      // update based on schema definition
      User.update({username: req.body.username}, {
        $push: { // push
         image: img // into image property
        }
      }, function(err, user) {
        if (err) {
          res.send(err)
        }

        res.json(user);
      });
    });
  });

  // remove item from user image array using image id 
  app.put('/populate/removeImg', function(req, res) {
    User.findOne({_id: req.body.id}, function(err, user) {
      User.update({username: req.body.username}, {
        $pull: { image: {_id: req.body.img_id} }
      }, function(err, user) {
        if (err) {
          res.send(err);
        }

        res.json(user);
      });
    });
  });

  app.get('/find', function(req, res) {
    User.find(function(err, users) {
      if (err) {
        res.send(err);
      }

      res.json(users);
    });
  });

};
