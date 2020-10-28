/*
 * @Description: ;
 * @Author: shengnan
 * @Date: 2020-10-28 16:02:34
 * @LastEditors: shengnan
 * @LastEditTime: 2020-10-28 21:01:05
 */

/*--------------切换登录/注册页面-------------*/
$('.toregister').on('click',function(){
  $('.login').hide().next().show();
});
$('.tologin').on('click',function(){
  $('.login').show().next().hide();
});

/*--------------提交注册表单-------------*/
$('.layui-form').on('submit',function(ev){
  ev.preventDefault();
  let data = $(this).serialize();

  $.ajax({
    type:'post',
    url:'http://ajax.frontend.itheima.net/api/reguser',
    data:data,
    success:res => {
      this.reset();
      layer.msg(res.message);
      if(res.status == 0){
        $('.login').show().next().hide();
      }
    }
  });
});

/*--------------自定义表单验证-------------*/
let form = layui.form;
form.verify({
  len:[/^\S{6,12}$/,'请输入6-12个字符！'],
  same:function(val){
    if($('.reg-pwd').val() !== val){
      return '密码不一致！';
    }
  }
});