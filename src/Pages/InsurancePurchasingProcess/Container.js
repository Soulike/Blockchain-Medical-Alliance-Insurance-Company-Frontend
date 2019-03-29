import React from 'react';
// import Function from '../../Function';
import {connect} from 'react-redux';
import NAMESPACE from '../../NAMESPACE';
import Api from '../../Api';
import InsurancePurchasingProcess from './View';

class InsurancePurchasingProcessContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insurancePurchasingInfoList: [],
        };
    }

    componentDidMount()
    {
        /*const insurancePurchasingInfoList = [];
        for (let i = 0; i < 30; i++)
        {
            insurancePurchasingInfoList.push({
                insurancePurchasingInfoId: i + 1,
                name: '罗小黑',
                age: Math.round(Math.random() * 80 + 1),
                isMale: 0,
                healthState: '健康',
                publicKey: Function.randomString(52),
                insuranceType: '少年英才保险',
                insurancePurchasingTime: '2019年03月17日',
                insurancePeriod: `${Math.round(Math.random() * 10 + 1)} 年`,
                insurancePrice: Math.round(Math.random() * 20000 + 1000),
                insurancePurchasingStage: Math.round(Math.random() * 3),
                responsiblePersonId: 1,
                responsiblePersonName: '王子贤',
            });
        }

        this.setState({
            insurancePurchasingInfoList,
        });*/

        Api.sendGetInsurancePurchasingInfoListRequest()
            .then(insurancePurchasingInfoListWrapper =>
            {
                if (insurancePurchasingInfoListWrapper)
                {
                    const insurancePurchasingInfoList = insurancePurchasingInfoListWrapper[NAMESPACE.INSURANCE_PURCHASING_PROCESS.LIST.INSURANCE_PURCHASING_INFO];
                    this.setState({
                        insurancePurchasingInfoList,
                    });
                }
            });
    }


    render()
    {
        const {insurancePurchasingInfoList} = this.state;
        const {ageRange, stageId} = this.props;
        return <InsurancePurchasingProcess insurancePurchasingInfoList={insurancePurchasingInfoList}
                                           ageRange={ageRange}
                                           stageId={stageId} />;
    }
}

const mapStateToProps = state =>
{
    const {InsurancePurchasingProcess: {ageRange, stageId}} = state;
    return {
        ageRange,
        stageId,
    };
};

export default connect(mapStateToProps)(InsurancePurchasingProcessContainer);