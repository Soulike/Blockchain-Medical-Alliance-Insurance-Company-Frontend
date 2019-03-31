import InsuranceListProcessor from './InsuranceList';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';
import DirectPaymentProcess from './DirectPaymentProcess';
import Account from './Account';
import InsurancePurchasingDetail from './InsurancePurchasingDetail';
import DirectPaymentDetail from './DirectPaymentDetail';

export default {
    ...InsuranceListProcessor,
    ...InsurancePurchasingProcess,
    ...DirectPaymentProcess,
    ...Account,
    ...InsurancePurchasingDetail,
    ...DirectPaymentDetail,
};