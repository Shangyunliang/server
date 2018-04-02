'use strict';

const Controller = require('egg').Controller;

class JobController extends Controller {
  async add() {
    console.log(this.ctx.request.body)
    const result = await this.ctx.model.Job.create(this.ctx.request.body)
    this.ctx.body = result;
  }

  async list() {
    this.ctx.set({
      'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    });
    const page = this.ctx.query.page || 1;
    const pageSize = 2
    const count = (page - 1) * pageSize
    const result = await this.ctx.model.Job.find({}).limit(pageSize).skip(count).exec()
    this.ctx.body = result
  }
}

module.exports = JobController;
