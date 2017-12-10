const userController = require('../controllers/user');
module.exports = (router) => {
  router.route('/users')
    .post(userController.create);
  router.route('/users/login')
    .post(userController.login);
  router.route('/users/me')
    .delete(userController.delete);
};
