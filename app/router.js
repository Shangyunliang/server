'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/upload', controller.upload.upload);
  router.post('/job/add', controller.job.add);
  router.get('/job', controller.job.list);
};
