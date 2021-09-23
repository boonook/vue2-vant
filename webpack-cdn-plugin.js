const path = require('path');
const fs = require( 'vinyl-fs' );
const ftp = require( 'vinyl-ftp' );
const rm = require('rimraf');
const NODE_ENV = process.env.NODE_ENV;
const UNI_PLATFORM = 'vue2-vant';
const APP_NAME = 'vue2-vant';

class WebpackCndPlugin {
  apply(compliler) {
    compliler.hooks.done.tap('WebpackCdnPlugin', function(compilation, callback) {
      if (NODE_ENV === 'production') {
        var conn = ftp.create({
          host: '000.00.00.00',///IP地址
          user: '******',///用户名
          password: '*******',///密码
          parallel: 5
        });
        
        const globs = [path.resolve(__dirname, `dist/build/${UNI_PLATFORM}/cdn/img/**`)];
        fs.src(globs, {base: `dist/build/${UNI_PLATFORM}/cdn/img`, buffer: false})
        .pipe(conn.dest(`/h5/${UNI_PLATFORM}/${APP_NAME}/img`))
        .on('end', function(){
          console.log('Upload finished.');
          rm(globs[0], () => {
            // 可能会遇到 operation not permitted的错误，但是实际上以己经删除成功了
          });
        });
        // .pipe(conn.newerOrDifferentSize('/h5/images'));
      }
    })
  }
}

module.exports = WebpackCndPlugin;