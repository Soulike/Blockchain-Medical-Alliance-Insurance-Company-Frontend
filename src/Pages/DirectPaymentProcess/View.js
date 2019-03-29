import React from 'react';
import Style from './Style.module.scss';
import DirectPaymentProcessSelector from './Components/DirectPaymentProcessSelector';
import NAMESPACE from '../../NAMESPACE';
import {DIRECT_PAYMENT_STAGE_ID} from '../../Constant';
import DirectPaymentInfo from './Components/DirectPaymentInfo';
import DiagnosticResultModal from './Components/DiagnosticResultModal';
import MedicalDescriptionModal from './Components/MedicalDescriptionModal';
import PropTypes from 'prop-types';

function DirectPaymentProcess(props)
{
    const {
        ageRange: [minAge, maxAge],
        stageId,
        directPaymentInfoList,
        currentActiveDiagnosticResultInModal,
        currentActiveMedicalDescriptionInModal,
        onDiagnosticResultButtonClick,
        onDirectPaymentInfoClick,
        onInsurancePurchasingInfoButtonClick,
        onMedicalDescriptionButtonClick,
    } = props;
    return (
        <div className={Style.DirectPaymentProcess}>
            <DirectPaymentProcessSelector />
            <div className={Style.tableWrapper}>
                <table className={`${Style.processTable}`}>
                    <thead>
                    <tr>
                        <th scope="col">姓名</th>
                        <th scope="col">年龄</th>
                        <th scope="col">性别</th>
                        <th scope="col">健康状况</th>
                        <th scope="col">公钥</th>
                        <th scope="col">直付金额</th>
                        <th scope="col">诊断结果</th>
                        <th scope="col">医疗说明</th>
                        <th scope="col">保险信息</th>
                        <th scope="col">直付阶段</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        directPaymentInfoList.map(directPaymentInfo =>
                        {
                            const {
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.DIRECT_PAYMENT_INFO_ID]: directPaymentInfoId,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.NAME]: name,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.AGE]: age,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.IS_MALE]: isMale,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.HEALTH_STATE]: healthState,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.PUBLIC_KEY]: publicKey,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.DIRECT_PAYMENT_MONEY_AMOUNT]: directPaymentMoneyAmount,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.DIAGNOSTIC_RESULT]: diagnosticResult,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.MEDICAL_DESCRIPTION]: medicalDescription,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.DIRECT_PAYMENT_STAGE]: directPaymentStage,
                                [NAMESPACE.DIRECT_PAYMENT_PROCESS.DIRECT_PAYMENT_INFO.INSURANCE_PURCHASING_INFO_ID]: insurancePurchasingInfoId,
                            } = directPaymentInfo;
                            if (age >= minAge && age <= maxAge && (directPaymentStage === stageId || stageId === DIRECT_PAYMENT_STAGE_ID.ALL_STAGES))
                            {
                                return <DirectPaymentInfo age={age}
                                                          directPaymentMoneyAmount={directPaymentMoneyAmount}
                                                          directPaymentStage={directPaymentStage}
                                                          healthState={healthState}
                                                          isMale={isMale}
                                                          name={name}
                                                          onDiagnosticResultButtonClick={onDiagnosticResultButtonClick(diagnosticResult)}
                                                          onDirectPaymentInfoClick={onDirectPaymentInfoClick(directPaymentInfoId)}
                                                          onInsurancePurchasingInfoButtonClick={onInsurancePurchasingInfoButtonClick(insurancePurchasingInfoId)}
                                                          onMedicalDescriptionButtonClick={onMedicalDescriptionButtonClick(medicalDescription)}
                                                          publicKey={publicKey}
                                                          key={directPaymentInfoId} />;
                            }
                            else
                            {
                                return null;
                            }
                        })
                    }
                    </tbody>
                </table>
            </div>
            <DiagnosticResultModal diagnosticResult={currentActiveDiagnosticResultInModal} />
            <MedicalDescriptionModal medicalDescription={currentActiveMedicalDescriptionInModal} />
        </div>
    );
}

DirectPaymentProcess.propTypes = {
    ageRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    stageId: PropTypes.oneOf(Object.values(DIRECT_PAYMENT_STAGE_ID)).isRequired,
    directPaymentInfoList: PropTypes.array.isRequired,
    currentActiveDiagnosticResultInModal: PropTypes.node.isRequired,
    currentActiveMedicalDescriptionInModal: PropTypes.node.isRequired,
    onDiagnosticResultButtonClick: PropTypes.func.isRequired,
    onDirectPaymentInfoClick: PropTypes.func.isRequired,
    onInsurancePurchasingInfoButtonClick: PropTypes.func.isRequired,
    onMedicalDescriptionButtonClick: PropTypes.func.isRequired,
};

export default DirectPaymentProcess;