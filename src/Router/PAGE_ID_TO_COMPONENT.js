import PAGE_ID from '../Config/ROUTE/PAGE_ID';
// 页面 View 从此导入
import {View as InsuranceList} from '../Pages/InsuranceList';
import {View as InsurancePublication} from '../Pages/InsurancePublication';
import {View as PersonalCenter} from '../Pages/PersonalCenter';
import {View as InsurancePurchasingProcess} from '../Pages/InsurancePurchasingProcess';
import {View as DirectPaymentProcess} from '../Pages/DirectPaymentProcess';

// 页面对应的组件
export default {
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]: InsuranceList,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PUBLICATION]: InsurancePublication,
    [PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]: DirectPaymentProcess,
    [PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL]: null,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS]: InsurancePurchasingProcess,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL]: null,
    [PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER]: PersonalCenter,
    [PAGE_ID.INSURANCE_COMPANY_INSURANCE_DETAIL]: null,
};