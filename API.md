# 接口文档

## 返回格式约定

所有后台返回的数据格式均为 JSON，JSON 对应对象格式如下

```js
{
    code: Number,
    data: Object
}
```

`code` 指定这次请求的状态，前端可以根据这个编码来决定做什么。目前需要的代码如下

- 200 请求成功
- 400 请求参数不正确，比如提交的对象需要提供键 a 但提交上来的对象没有
- 401 当前请求 Session 无效
- 403 请求被拒绝，用于处理不合理的请求，例如登录密码错误或删除别人的东西
- 404 请求的内容不存在
- 500 服务器发生错误

`data` 的具体格式根据情况决定。

---

## 名词解释

- 请求体：在 GET 请求中指查询字符串内容，在 POST 请求中指请求体中内容。项目不会出现其他请求方式
- 响应体：指返回 JSON 中 data 键对应对象的内容

---

## 各个请求的详细信息 (所有请求前缀均为 `/server`)

### 保险列表部分（请求前缀为 `/insuranceList`)

#### `/getInsuranceList`

- 功能说明：获取保险公司可供发布的保险列表
- 请求方法：GET
- 请求体：无
- 响应体：
```js
{
    insuranceList: [                    // 数组，内含多个保险
        {
            insuranceId: Number,        // 保险唯一标识 ID
            insuranceSource: String,    // 保险来源，如 "人寿保险"
            insuranceDuration: String,  // 保期，如 "2 年"
            insurancePrice: Number,     // 保金，单位是人民币元
        },
    ]
}
```
- 其他说明：无
