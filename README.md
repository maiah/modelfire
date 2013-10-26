
# modelfire

  Model plugin that uses Firebase datasource

## Installation

  Install with [component(1)](http://component.io):

    $ component install maiah/modelfire

## Usage
```js
var model = require('model'),
    modelfire = require('modelfire');

var Person = model('Person')
  .attr('name', { type: 'string' })
  .attr('job', { type: 'string' })
  .attr('address', { type: 'string' })
  .use(modelfire('https://myapp.firebaseio.com/'));

var gohan = new Person();
```

## API

### modelfire(firebaseLocation)

  Enables your [model](https://github.com/component/model)` to use and bind to the specified `firebaseLocation`.

## License

  MIT
