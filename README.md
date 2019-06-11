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

## 获取商品分类（更新）
- url: /api/shopMark
- type: GET方式	
- 参数
	- page 页数（可选）
	- pageSize 条数（可选）
- 返回参数
	- 信息

## 获取商品列表（更新）
- url: /api/shopListPage
- type: GET方式	
- 参数
	- page 页数（可选）
	- pageSize 条数（可选）
- 返回参数
	- 信息


## 搜索接口分类
- url: /api/search
- type: GET方式	
- 参数
	- title 商品名字
	- 其他字段都可以（作为扩充）
- 返回参数
	- 信息


## 商品列表接口分类
- url: /api/shopList
- type: GET方式	
- 参数
	- title 商品名字
	- hot 热门商品 1为热门
	- shopId 分类商品id
	- 其他字段都可以（作为扩充）
- 返回参数
	- 信息

## 广告展示接口分类
- url: /api/ad
- type: GET方式	
- 参数
	- 无
- 返回参数
	- 信息



## 后台管理系统接口

- 登录接口
	- url: /api/user/login
	- type: POST方式	
	- 参数
		- username 用户名
		- passowrd 密码
		- code 验证码
	- 返回参数
		- 用户信息

- 用户列表接口
	- url: /api/user
	- type: GET方式	
	- 参数
		- page 用户名
		- pageSize 密码
	- 返回参数
		- 用户列表

- 修改用户接口
	- url: /api/update
	- type: POST方式	
	- 参数
		- id 用户id
		- username
		- password
		- imgUrl

	- 返回参数
		- 用户信息

- 修改删除接口
	- url: /api/del
	- type: GET方式	
	- 参数
		- id 用户id
	- 返回参数
		- 用户信息

- 用户添加接口
	- url: /api/add
	- type: POST方式	
	- 参数
		- username
		- password
	- 返回参数
		- 用户信息

- 用户修改头像接口
	- url: /upload/profile
	- type: POST方式	
	- 参数
		- avatar 上传表单的值
		- id
	- 返回参数
		- 用户信息
		