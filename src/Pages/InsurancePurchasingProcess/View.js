import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import InsurancePurchasingProcessSelector from './Components/InsurancePurchasingProcessSelector';
import NAMESPACE from '../../NAMESPACE';
import {INSURANCE_PURCHASING_STAGE_ID} from '../../Constant';
import InsurancePurchasingInfo from './Components/InsurancePurchasingInfo';

function InsurancePurchasingProcess(props)
{
    const {insurancePurchasingInfoList, ageRange: [minAge, maxAge], stageId} = props;
    return (
        <div className={Style.InsurancePurchasingProcess}>
            <InsurancePurchasingProcessSelector />
            <div className={Style.tableWrapper}>
                <table className={`${Style.processTable}`}>
                    <thead>
                    <tr>
                        <th scope="col">姓名</th>
                        <th scope="col">年龄</th>
                        <th scope="col">性别</th>
                        <th scope="col">健康状况</th>
                        <th scope="col">公钥</th>
                        <th scope="col">保险种类</th>
                        <th scope="col">投保时间</th>
                        <th scope="col">保期</th>
                        <th scope="col">投保金额</th>
                        <th scope="col">投保阶段</th>
                        <th scope="col">负责人</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        insurancePurchasingInfoList.map(insurancePurchasingInfo =>
                        {
                            const {
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.INSURANCE_PURCHASING_INFO_ID]: insurancePurchasingInfoId,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.NAME]: name,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.AGE]: age,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.IS_MALE]: isMale,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.HEALTH_STATE]: healthState,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.PUBLIC_KEY]: publicKey,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.INSURANCE_TYPE]: insuranceType,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.INSURANCE_PURCHASING_TIME]: insurancePurchasingTime,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.INSURANCE_PERIOD]: insurancePeriod,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.INSURANCE_PRICE]: insurancePrice,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.INSURANCE_PURCHASING_STAGE]: insurancePurchasingStage,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.RESPONSIBLE_PERSON_ID]: responsiblePersonId,
                                [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.RESPONSIBLE_PERSON_NAME]: responsiblePersonName,
                            } = insurancePurchasingInfo;
                            if (age >= minAge && age <= maxAge && (insurancePurchasingStage === stageId || stageId === INSURANCE_PURCHASING_STAGE_ID.ALL_STAGES))
                            {
                                return <InsurancePurchasingInfo name={name}
                                                                age={age}
                                                                publicKey={publicKey}
                                                                insurancePeriod={insurancePeriod}
                                                                responsiblePersonName={responsiblePersonName}
                                                                healthState={healthState}
                                                                insurancePurchasingInfoId={insurancePurchasingInfoId}
                                                                insurancePrice={insurancePrice}
                                                                insurancePurchasingStage={insurancePurchasingStage}
                                                                insurancePurchasingTime={insurancePurchasingTime}
                                                                insuranceType={insuranceType}
                                                                isMale={isMale}
                                                                responsiblePersonId={responsiblePersonId}
                                                                key={insurancePurchasingInfoId} />;
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
        </div>
    );
}

InsurancePurchasingProcess.propTypes = {
    insurancePurchasingInfoList: PropTypes.array.isRequired,
    ageRange: PropTypes.array.isRequired,
    stageId: PropTypes.oneOf(Object.values(INSURANCE_PURCHASING_STAGE_ID)).isRequired,
};

export default InsurancePurchasingProcess;