import React from 'react';
import Style from './Style.module.scss';
import {View as HorizontalStageProgressIndicator} from '../../Components/HorizontalStageProgressIndicator';
import {View as StageTextIndicator} from '../../Components/StageTextIndicator';
import {INSURANCE_PURCHASING_STAGE_ID, INSURANCE_PURCHASING_STAGE_ID_TO_TEXT} from '../../Constant';
import {browserHistory, withRouter} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import Api from '../../Api';
import NAMESPACE from '../../NAMESPACE';
import InsuranceCompanyVerifyProcessor from './Components/InsuranceCompanyVerifyProcessor/View';

class InsurancePurchasingDetail extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            stageNumber: -1,
        };
    }

    componentDidMount()
    {
        const {insurancePurchasingInfoId} = this.props.location.query;
        if (insurancePurchasingInfoId === undefined)
        {
            browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS]);
        }
        else
        {
            Api.sendGetInsurancePurchasingInfoRequestAsync(insurancePurchasingInfoId)
                .then(insurancePurchasingInfo =>
                {
                    if (insurancePurchasingInfo)
                    {
                        const {[NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO.INSURANCE_PURCHASING_STAGE]: stageNumber} = insurancePurchasingInfo;
                        this.setState({
                                stageNumber: parseInt(stageNumber, 10),
                            },
                        );
                    }
                });
        }
    }


    render()
    {
        const stageTextArray = [...INSURANCE_PURCHASING_STAGE_ID_TO_TEXT];
        const {stageNumber} = this.state;
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
                                    return <InsuranceCompanyVerifyProcessor />;
                                }
                                case INSURANCE_PURCHASING_STAGE_ID.PAY:
                                {
                                    return null;
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
}

export default withRouter(InsurancePurchasingDetail);