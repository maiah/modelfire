module.exports = function (firebaseLocation) {
  var firebaseRef = new Firebase(firebaseLocation);
  var firebaseProps = {};

  return function (Model) {
    Model.on('construct', function (model, attrs) {
      model.on('change', function (name, val, prev) {
        if (!firebaseProps[name]) {
          firebaseProps[name] = firebaseRef.child(name);
        }
  
        firebaseProps[name].set(val);
      });
  
      firebaseRef.on('child_added', function (snapshot) {
        updateModel(model, snapshot);
      });

      firebaseRef.on('child_changed', function (snapshot) {
        updateModel(model, snapshot);
      });
    });

  };

};

function updateModel(model, snapshot) {
  var objProp = {};
  objProp[snapshot.name()] = snapshot.val();
  model.set(objProp);
}