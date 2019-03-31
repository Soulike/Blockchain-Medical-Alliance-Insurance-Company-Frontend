import REQUIRE_LOGIN_PAGE_ID from '../Config/ROUTE/REQUIRE_LOGIN_PAGE_ID';
import NOT_REQUIRE_LOGIN_PAGE_ID from '../Config/ROUTE/NOT_REQUIRE_LOGIN_PAGE_ID';
// 页面 View 从此导入
import InsuranceList from '../Pages/InsuranceList';
import InsurancePublication from '../Pages/InsurancePublication';
import PersonalCenter from '../Pages/PersonalCenter';
import InsurancePurchasingProcess from '../Pages/InsurancePurchasingProcess';
import DirectPaymentProcess from '../Pages/DirectPaymentProcess';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import InsurancePurchasingDetail from '../Pages/InsurancePurchasingDetail';
import DirectPaymentDetail from '../Pages/DirectPaymentDetail';

// 页面对应的组件
export default {
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]: InsuranceList,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PUBLICATION]: InsurancePublication,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]: DirectPaymentProcess,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL]: DirectPaymentDetail,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS]: InsurancePurchasingProcess,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL]: InsurancePurchasingDetail,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER]: PersonalCenter,
    [REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_DETAIL]: null,
    [NOT_REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_LOGIN]: Login,
    [NOT_REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_SIGN_UP]: SignUp,
};