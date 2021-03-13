const path=require('path')

module.exports={
    mode:'development',
    // 入口
    entry:'./src/index.js',

    // 
    output:{
        filename:'bundle.js',
        
    },
    devServer:{
        // 静态文件目录

        contentBase:path.join(__dirname,'www'),
        //不压缩
        compress:false,
        // 端口号
        port:8080,
        //虚拟打包路径，bundle.js没有真正生成

        publicPath:'/xuni/',
        open:true
    }
}