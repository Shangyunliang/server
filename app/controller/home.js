'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.set({
      'Access-Control-Allow-Origin': '127.0.0.1:3000',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    });
    this.ctx.body = 'hi, syl';
  }
}

module.exports = HomeController;
