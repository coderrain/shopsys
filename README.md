# 接口文档

## 验证码接口
- url: /api/user/code
- type: GET方式	
- 参数
	- 无
- 返回参数
	- 状态码

## 登录接口
- url: /api/user/login
- type: POST方式	
- 参数
	- username 用户名
	- passowrd 密码
	- code 验证码
- 返回参数
	- 用户信息


## 注册接口
- url: /api/user/reg
- type: POST方式	
- 参数
	- username 用户名
	- passowrd 密码
	- code 验证码
- 返回参数
	- 用户信息


## 修改姓名
- url: /api/user/resetname
- type: POST方式	
- 参数
	- username 用户名
- 返回参数
	- 用户信息
