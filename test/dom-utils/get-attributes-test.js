var assert = require('assert');
var getAttributes = require('../../src/get-attributes');

describe('getAttributes', function() {

  it('returns an object representation of the element attributes', function() {
    var div = document.createElement('div');
    document.body.appendChild(div);

    div.setAttribute('foo', 'FOO');
    div.setAttribute('bar', 'BAR');
    div.setAttribute('qux', 'QUX');
    assert.deepEqual(getAttributes(div), {
      'foo': 'FOO',
      'bar': 'BAR',
      'qux': 'QUX'
    });

    document.body.removeChild(div);
  });


  it('returns an empty object when there are no attributes', function() {
    var div = document.createElement('div');
    document.body.appendChild(div);

    assert.deepEqual(getAttributes(div), {});

    document.body.removeChild(div);
  });

});

