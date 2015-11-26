var  path = require('path')
var  WebpackCoc = require('webpack-coc')

var webpack = WebpackCoc.webpack

WebpackCoc.LibMap = {
    vue:{
        path:'[node_module_path]/vue/dist/vue.min.js',
        externals:'Vue'
    }
}

var configMgr = new  WebpackCoc({
    project_name:'vue-coc',
    src_path:path.join(__dirname , './assets/src'),
    dist_path:path.join(__dirname, './assets/dist'),
    node_module_path:path.join(__dirname,'../node_modules'),
    map_json_filename:'./assets/assets-map.json',
    map_json_path:__dirname,
    libs:['vue'],
    cdn_path:'/dist',
    dev_port:'9527',
    uglify_lib_options:{
        warnings:false
    }
})


configMgr.defaultConfig.development.module.loaders.push(
    { test: /\.vue$/, loader: 'vue' }
)
configMgr.defaultConfig.production.module.loaders.push(
    { test: /\.vue$/, loader: 'vue' }
)


console.log(configMgr.buildProduction())
configMgr.runProduction();

