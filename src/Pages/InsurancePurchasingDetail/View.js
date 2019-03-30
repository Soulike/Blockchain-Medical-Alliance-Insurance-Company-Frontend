import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {INSURANCE_PURCHASING_STAGE_ID, INSURANCE_PURCHASING_STAGE_ID_TO_TEXT} from '../../Constant';
import HorizontalStageProgressIndicator from '../../Components/HorizontalStageProgressIndicator';
import StageTextIndicator from '../../Components/StageTextIndicator';
import InsuranceCompanyVerifyProcessor from './Components/InsuranceCompanyVerifyProcessor';
import PayConfirmProcessor from './Components/PayConfirmProcessor';

function InsurancePurchasingDetail(props)
{
    const stageTextArray = [...INSURANCE_PURCHASING_STAGE_ID_TO_TEXT];
    const {insurancePurchasingInfo} = props;
    const {
        insurancePurchasingInfoId,
        stageNumber,
    } = insurancePurchasingInfo;
    return (
        <div className={Style.InsurancePurchasingDetail}>
            <div className={Style.stageProgressIndicatorWrapper}>
                <HorizontalStageProgressIndicator currentStageNumber={stageNumber}
                                                  maxStageNumber={stageTextArray.length - 1} />
            </div>
            <div className={Style.title}>进度详情</div>
            <div className={Style.stageTextIndicatorWrapper}>
                <StageTextIndicator currentStageNumber={stageNumber}
                                    stageTextArray={stageTextArray} />
            </div>
            <div className={Style.stageProcessorWrapper}>
                {
                    (() =>
                    {
                        switch (stageNumber)
                        {
                            case INSURANCE_PURCHASING_STAGE_ID.INSURANCE_COMPANY_VERIFY:
                            {
                                return <InsuranceCompanyVerifyProcessor insurancePurchasingInfoId={insurancePurchasingInfoId} />;
                            }
                            case INSURANCE_PURCHASING_STAGE_ID.PAY:
                            {
                                return <PayConfirmProcessor insurancePurchasingInfo={insurancePurchasingInfo} />;
                            }
                            default:
                            {
                                return null;
                            }
                        }
                    })()
                }
            </div>
        </div>
    );
}

InsurancePurchasingDetail.propTypes = {
    insurancePurchasingInfo: PropTypes.object.isRequired,
};

export default InsurancePurchasingDetail;