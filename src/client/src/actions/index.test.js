const { createMessage, updateMessages } = require('./');

test('Update Message', () => {
  expect(updateMessages(3, [1, 2])).toEqual({
    type: 'UPDATE_MESSAGES',
    val: [1, 2, 3],
  });
});

test('Set User', () => {
  expect(updateMessages({ foo: 'bar' })).toEqual({
    type: 'SET_USER',
    val: {
      foo: 'bar',
    },
  });
});

test('Create Message: should return an object created for the snapshot passed to it', () => {
  expect(
    createMessage({
      val: () => 'foo',
      key: 123,
    })
  ).toEqual({
    text: 'foo',
    id: 123,
  });
});
