'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class UploadController extends Controller {
  // this.ctx.getFileStream() 只适用于上传但一文件 且必须上传在所有filed之后, 否则拿不到stream.fields
  async upload() {
    const stream = await this.ctx.getFileStream();
    const { filename } = stream
    // const filename = encodeURIComponent(stream.fields.name) + path.extname(stream.filename).toLowerCase();
    const target = path.join(this.config.baseDir, 'app/public', filename);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
    this.ctx.redirect('/public/' + filename);
  }
}

module.exports = UploadController;
