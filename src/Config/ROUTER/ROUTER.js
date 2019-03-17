// 页面 View 从此导入
import {View as InsuranceList} from '../../Pages/InsuranceList';
import {View as InsurancePublication} from '../../Pages/InsurancePublication';
import {View as PersonalCenter} from '../../Pages/PersonalCenter';
import {View as InsurancePurchasingProcess} from '../../Pages/InsurancePurchasingProcess';

// 页面的 ID，目前设想用于识别当前所在页面。Value 必须从 0 开始且连续（考虑到以后可能的需求），值可以随意修改
export const PAGE_ID = {
    INSURANCE_COMPANY_INSURANCE_LIST: 0,
    INSURANCE_COMPANY_INSURANCE_PUBLICATION: 1,
    INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS: 2,
    INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL: 3,
    INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS: 4,
    INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL: 5,
    INSURANCE_COMPANY_PERSONAL_CENTER: 6,
    INSURANCE_COMPANY_INSURANCE_DETAIL: 7,
};

// 页面的路由，用于在 React-Router 中使用
export const PAGE_ID_TO_ROUTE = {
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]: '/insuranceList',
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PUBLICATION]: '/insurancePublication',
    [PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]: '/directPaymentProcess',
    [PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL]: '/directPaymentDetail',
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS]: '/insurancePurchasingProcess',
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL]: '/insurancePurchasingDetail',
    [PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER]: '/personalCenter',
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_DETAIL]: '/insuranceDetail',
};

// 由路由反向得到 PAGE ID，动态生成
export const ROUTE_TO_PAGE_ID = {};
Object.keys(PAGE_ID_TO_ROUTE).forEach(PAGE_ID =>
{
    ROUTE_TO_PAGE_ID[PAGE_ID_TO_ROUTE[PAGE_ID]] = parseInt(PAGE_ID, 10);
});

// 页面对应的组件
export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]: InsuranceList,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PUBLICATION]: InsurancePublication,
    [PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]: null,
    [PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL]: null,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS]: InsurancePurchasingProcess,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL]: null,
    [PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER]: PersonalCenter,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_DETAIL]: null,
};