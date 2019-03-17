import React from 'react';
import Style from './Style.module.scss';
import {View as InsurancePurchasingProcessSelector} from './Components/InsurancePurchasingProcessSelector';
import {View as InsurancePurchasingInfo} from './Components/InsurancePurchasingInfo';
import Function from '../../Function';
import {connect} from 'react-redux';
import {STAGE_ID} from '../../Constant';

class InsurancePurchasingProcess extends React.Component
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
        const insurancePurchasingInfoList = [];
        for (let i = 0; i < 30; i++)
        {
            insurancePurchasingInfoList.push({
                insuranceId: i + 1,
                name: '罗小黑',
                age: Math.round(Math.random() * 80 + 1),
                isMale: false,
                healthState: '健康',
                publicKey: Function.randomString(52),
                insuranceType: '少年英才保险',
                insurancePurchasingTime: '2019年03月17日',
                insurancePeriod: `${Math.round(Math.random() * 10 + 1)} 年`,
                insurancePrice: Math.round(Math.random() * 20000 + 1000),
                insurancePurchasingStage: Math.round(Math.random() * 3),
                responsiblePersonName: '王子贤',
            });
        }

        this.setState({
            insurancePurchasingInfoList,
        });
    }


    render()
    {
        const {insurancePurchasingInfoList} = this.state;
        const {ageRange: [minAge, maxAge], stageId} = this.props;
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
                                const {insuranceId, age, insurancePurchasingStage} = insurancePurchasingInfo;
                                if (age >= minAge && age <= maxAge && (insurancePurchasingStage === stageId || stageId === STAGE_ID.ALL_STAGES))
                                {
                                    return <InsurancePurchasingInfo {...insurancePurchasingInfo} key={insuranceId} />;
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
}

const mapStateToProps = state =>
{
    const {InsurancePurchasingProcess: {ageRange, stageId}} = state;
    return {
        ageRange,
        stageId,
    };
};

export default connect(mapStateToProps)(InsurancePurchasingProcess);