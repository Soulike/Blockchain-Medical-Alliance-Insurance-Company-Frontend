import InsuranceListProcessor from './InsuranceList';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';
import DirectPaymentProcess from './DirectPaymentProcess';

export default {
    ...InsuranceListProcessor,
    ...InsurancePurchasingProcess,
    ...DirectPaymentProcess,
};