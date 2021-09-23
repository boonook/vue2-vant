```bash
    yarn install
```

```bash
    yarn start
```

将图片上传到cdn中需要修改webpack-cdn-plugin.js对应的排至文件
```bash
    var conn = ftp.create({
        host: '000.00.00.00',///IP地址
        user: '******',///用户名
        password: '*******',///密码
        parallel: 5
    });
```