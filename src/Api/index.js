import InsuranceListProcessor from './InsuranceList';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';
import DirectPaymentProcess from './DirectPaymentProcess';
import Account from './Account';
import InsurancePurchasingDetail from './InsurancePurchasingDetail';
import DirectPaymentDetail from './DirectPaymentDetail';
import InsuranceDetail from './InsuranceDetail';
import InsurancePublication from './InsurancePublication';

export default {
    ...InsuranceListProcessor,
    ...InsurancePurchasingProcess,
    ...DirectPaymentProcess,
    ...Account,
    ...InsurancePurchasingDetail,
    ...DirectPaymentDetail,
    ...InsuranceDetail,
    ...InsurancePublication,
};