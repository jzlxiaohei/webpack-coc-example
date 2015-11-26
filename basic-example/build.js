var  path = require('path')

var  WebpackCoc = require('webpack-coc')

var configMgr = new  WebpackCoc({
    project_name:'webpack-coc',
    src_path:path.join(__dirname , './assets/src'),
    dist_path:path.join(__dirname, './assets/dist'),
    node_module_path:path.join(__dirname,'../node_modules'),
    map_json_filename:'./assets/assets-map.json',
    map_json_path:__dirname,
    libs:['react','react-dom','jquery'],
    cdn_path:'/dist',
    dev_port:'9527'
})

console.log(configMgr.buildProduction());
configMgr.runProduction();
//configMgr.buildDevelopment()
//configMgr.runDevelopment()