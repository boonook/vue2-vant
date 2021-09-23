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

后期将加入如何与小程序的web-view进行通讯主要是为了向小程序传递数据以供小程序分享以及监听小程序分享成功之后触犯h5的回调函数
```bash


```