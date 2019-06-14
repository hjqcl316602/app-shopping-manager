
export const HTTP_LOCATION = function(){
  if(window.location.href.indexOf('dev.bstchain') > -1){
    return 'dev'; // 测试环境
  }
  if(window.location.href.indexOf('m.bstchain') > -1){
    return 'production'; // 生产环境
  }
  if(window.location.href.indexOf('192.168') > -1 || window.location.href.indexOf('localhost') > -1 ){
    return 'localhost'; //开发环境
  }
}();

// 接口请求地址 - 微信相关
export const HTTP_REQUEST = function(){
  if(HTTP_LOCATION == 'localhost'){
    return 'http://192.168.0.103:8092/bus';
  }else{
    return '/bus';
  }
}();

// 当前域名
export const HTTP_WEB = window.location.href.split('#')[0];
