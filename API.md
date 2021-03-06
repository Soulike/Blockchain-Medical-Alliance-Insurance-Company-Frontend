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
- 409 请求存在冲突，例如注册已存在的用户名
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
            insuranceId: String,        // 保险唯一标识 ID
            insuranceSource: String,    // 保险来源，如 "人寿保险"
            insuranceDuration: String,  // 保期，如 "2 年"
            insurancePrice: Number,     // 保金，单位是人民币元
        },
    ]
}
```
- 其他说明：无

### 投保信息列表部分（请求前缀为 `/insurancePurchasingProcess`）

#### `/getInsurancePurchasingInfoList`

- 功能说明：获取保险公司投保信息列表
- 请求方法：GET
- 请求体：无
- 响应体：
```js
{
    insurancePurchasingInfoList: [                  // 数组，内含多条投保信息
        {
            insurancePurchasingInfoId: String,      // 这条信息的唯一识别 ID
            name: String,                           // 投保人姓名
            age: Number,                            // 投保人年龄
            isMale: Number,                         // 投保人是不是男性，0为女，1为男
            healthState: String,                    // 投保人健康状况
            publicKey: String,                      // 投保人公钥
            insuranceType: String,                  // 保险类型
            insurancePurchasingTime: String,        // 投保时间
            insurancePeriod: String,                // 保险时长
            insurancePrice: Number,                 // 保金，单位人民币元
            insurancePurchasingStage: ENUM_NUMBER,  // 投保阶段，枚举值
            responsiblePersonId: Number,            // 负责人 ID，用于获取负责人信息
            responsiblePersonName: String,          // 负责人姓名
        },
    ]
}
```
- 其他说明
  - 投保阶段枚举值
```js
{
    APPLICATION: 0, // 投保人申请
    INSURANCE_COMPANY_VERIFY: 1,      // 保险公司审核
    PAY: 2,         // 投保人缴费，保险公司确认并发布保单
    COMPLETE: 3,    // 完成
    INSURANCE_COMPANY_VERIFY_DECLINED: -1,  // 保险公司审核未通过
};
```

---

### 直付处理列表部分（请求前缀为 `/directPaymentProcess`）

#### `/getDirectPaymentInfoList`

- 功能说明：获取直付处理信息列表
- 请求方法：GET
- 请求体：无
- 响应体：
```js
{
    directPaymentInfoList: [        // 数组，内含多条直付信息
        {
            directPaymentInfoId: String,            // 这条直付信息的唯一识别 ID
            name: String,                           // 投保人姓名
            age: Number,                            // 投保人年龄
            isMale: Number,                         // 投保人是不是男性，0为女，1为男
            healthState: String,                    // 投保人健康状况
            publicKey: String,                      // 投保人公钥
            directPaymentMoneyAmount: Number,       // 直付金额，单位是人民币元
            diagnosticResult: String,               // 诊断结果
            medicalDescription: String,             // 医疗说明
            insurancePurchasingInfoId: String,      // 对应保险投保信息的 ID
            directPaymentStage: ENUM_NUMBER,        // 枚举值，直付阶段
        },
    ]
}
```
- 其他说明
  - 直付阶段枚举值
```js
{
    APPLICATION: 0,                         // 投保人申请
    HOSPITAL_CONFIRM_PAYABLE: 1,            // 待医院确认是否可以直付
    INSURANCE_COMPANY_VERIFY_AND_PAY: 2,    // 待保险公司审核及支付
    HOSPITAL_CONFIRM_PAYMENT: 3,            // 等待医院确认收款
    COMPLETE: 4,                            // 完成
    HOSPITAL_CONFIRM_PAYABLE_DECLINED: -1,            // 医院确认不可直付
    INSURANCE_COMPANY_VERIFY_AND_PAY_DECLINED: -2,    // 保险公司审核不通过
};
```

--- 

### 帐号相关部分（请求前缀为 `/account`）

#### `/login`

- 功能说明：登录
- 请求方法：POST
- 请求体：
```js
{
    username: String,
    password: String,
}
```
- 响应体：无
- 其他说明：
  - 如果登录成功，返回 200
  - 如果密码错误，返回 403
  - 如果帐号不存在，返回 404
  - 格式限制：
```js
{
    USERNAME: /^\w{5,20}$/,
    PASSWORD: /^\w{10,}$/,
};
```

#### `/getVerificationCode`

- 功能说明：获取验证码
- 请求方法：GET
- 请求体：
```js
{
    email: String,  // 接收验证码的邮箱
}
```
- 响应体：无
- 其他说明：无

#### `/signUp`

- 功能说明：注册
- 请求方法：POST
- 请求体：
```js
{
    username: String,           // 用户名
    password: String,           // 密码
    name: String,               // 姓名
    age: Number,                // 年龄
    address: String,            // 家庭住址
    email: String,              // 邮箱
    verificationCode: String    // 验证码
}
```
- 响应体：无
- 其他说明：验证码错误返回 403，用户名重复返回 409

### 投保详情部分（请求前缀为 `/insurancePurchasingDetail`

#### `/getInsurancePurchasingInfo`

- 功能说明：获取投保详细信息
- 请求方法：GET
- 请求体：
```js
{
    insurancePurchasingInfoId: String,  // 投保信息 ID
}
```
- 响应体：
```js
{
    insurancePurchasingInfoId: String,      // 这条信息的唯一识别 ID
    name: String,                           // 投保人姓名
    age: Number,                            // 投保人年龄
    isMale: Number,                         // 投保人是不是男性，0为女，1为男
    healthState: String,                    // 投保人健康状况
    publicKey: String,                      // 投保人公钥
    insuranceType: String,                  // 保险类型
    insurancePurchasingTime: String,        // 投保时间
    insurancePeriod: String,                // 保险时长
    insurancePrice: Number,                 // 保金，单位人民币元
    insurancePurchasingStage: ENUM_NUMBER,  // 投保阶段，枚举值
    responsiblePersonId: Number,            // 负责人 ID，用于获取负责人信息
    responsiblePersonName: String,          // 负责人姓名
}
```
- 其他说明：无

#### `/getElectronicInsurancePolicy`

- 功能说明：获取电子保单
- 请求方法：GET
- 请求体：
```js
{
    insurancePurchasingInfoId: String,
}
```
- 响应体：
```js
{
    electronicInsurancePolicy: String,  // 电子保单内容
}
```
- 其他说明：无

#### `/getMedicalRecord`

- 功能说明：获取病历
- 请求方法：GET
- 请求体：
```js
{
    insurancePurchasingInfoId: String,
}
```
- 响应体：
```js
{
    medicalRecord: String,  // 病历内容
}
```
- 其他说明：无

#### `/submitInsuranceCompanyVerifyResult`

- 功能说明：提交保险公司审核结果
- 请求方法：POST
- 请求体：
```js
{
    insurancePurchasingInfoId: String,  // 被审核投保信息
    verifyResult: Boolean,  // 是否审核通过
}
```
- 响应体：无
- 其他说明：无

#### `/submitPayConfirmation`

- 功能说明：提交确认投保人已缴费信息
- 请求方法：POST
- 请求体：
```js
{
    insurancePurchasingInfoId: String,
}
```
- 响应体：无
- 其他说明：无

### 直付详情部分（请求前缀为 `/directPaymentDetail`）

#### `/getDirectPaymentInfo`

- 功能说明：获取直付详细信息
- 请求方法：GET
- 请求体：
```js
{
    directPaymentInfoId: String,    // 直付信息 ID
}
```
- 响应体：
```js
{
    directPaymentInfoId: String,            // 这条直付信息的唯一识别 ID
    name: String,                           // 投保人姓名
    age: Number,                            // 投保人年龄
    isMale: Number,                         // 投保人是不是男性，0为女，1为男
    healthState: String,                    // 投保人健康状况
    publicKey: String,                      // 投保人公钥
    directPaymentMoneyAmount: Number,       // 直付金额，单位是人民币元
    diagnosticResult: String,               // 诊断结果
    medicalDescription: String,             // 医疗说明
    insurancePurchasingInfoId: String,      // 对应保险投保信息的 ID
    directPaymentStage: ENUM_NUMBER,        // 枚举值，直付阶段
}
```
- 其他说明：无

#### `/submitInsuranceCompanyVerifyAndPayResult`

- 功能说明：提交保险公司直付审核结果
- 请求方法：POST
- 请求体：
```js
{
    directPaymentInfoId: String,  // 被审核投保信息
    verifyResult: Boolean,  // 是否审核通过
}
```
- 响应体：无
- 其他说明：无

### 保险详情部分（请求前缀为 `/insuranceDetail`）

#### `/getInsuranceDetail`

- 功能说明：根据 ID 获取对应保险的信息
- 请求方法：GET
- 请求体：
```js
{
    insuranceId: String,    // 保险的 ID
}
```
- 响应体：
```js
{
    insuranceId: String,            // 保险的 ID
    insuranceName: String,          // 保险的名字
    isSpecialMedicalCare: Number,   // 是否是特殊医疗，0 或 1
    hasSocialSecurity: Number,      // 有无社保，0 或 1
    insuranceAmount: Number,        // 保额，单位是人民币元
    insurancePeriod: String,        // 保险期限
    insuranceDiseaseType: String,   // 保险病种
    coveringAge: String,            // 承保年龄
    salesArea: String,              // 销售区域
    insurancePrice: Number,         // 保费价格，单位是人民币元
}
```
- 其他说明：无

#### 新建保险部分（请求前缀为 `/insurancePublication`）

#### `/submitNewInsurance`

- 功能说明：新建保险
- 请求方法：POST
- 请求体：
```js
{
    insuranceName: String,          // 保险的名字
    isSpecialMedicalCare: Number,   // 是否是特殊医疗，0 或 1
    hasSocialSecurity: Number,      // 有无社保，0 或 1
    insuranceAmount: Number,        // 保额，单位是人民币元
    insurancePeriod: String,        // 保险期限
    insuranceDiseaseType: String,   // 保险病种
    coveringAge: String,            // 承保年龄
    salesArea: String,              // 销售区域
    insurancePrice: Number,         // 保费价格，单位是人民币元
}
```
- 响应体：无
- 其他说明：无