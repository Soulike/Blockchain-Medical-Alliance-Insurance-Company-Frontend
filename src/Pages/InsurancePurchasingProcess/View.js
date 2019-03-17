import React from 'react';
import Style from './Style.module.scss';
import {View as InsurancePurchasingProcessSelector} from './Components/InsurancePurchasingProcessSelector';
import {View as InsuranceInfo} from './Components/InsuranceInfo';
import Function from '../../Function';

class InsurancePurchasingProcess extends React.Component
{
    render()
    {
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
                            (() =>
                            {
                                const nodeArray = [];
                                for (let i = 0; i < 20; i++)
                                {
                                    nodeArray.push(<InsuranceInfo insuranceId={i + 1}
                                                                  name={'罗小黑'}
                                                                  age={Math.round(Math.random() * 60)}
                                                                  isMale={false}
                                                                  healthState={'健康'}
                                                                  publicKey={Function.randomString(52)}
                                                                  insuranceType={'少年英才保险'}
                                                                  insurancePurchasingTime={'2019年01月06日'}
                                                                  insurancePeriod={`${Math.round(Math.random() * 10) + 1} 年`}
                                                                  insurancePrice={Math.round(Math.random() * 10000)}
                                                                  insurancePurchasingStage={Math.round(Math.random() * 3)}
                                                                  responsiblePersonName={'王子贤'} />);
                                }
                                return nodeArray;
                            })()
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default InsurancePurchasingProcess;