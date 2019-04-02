
export default {
  up: (db) => {
    console.log('up users');

    db.collection('users')
      .updateMany(
        {},
        {
          $unset: { isAdmin: 1 },
        }, { multi: true }
      );
  },
  down: (db) => {
    console.log('down users');

    db.collection('users')
      .updateMany(
        {},
        {
          $set: { isAdmin: false },
        }, { multi: true }
      );
  }
};
