import React from 'react';
import Style from './Style.module.scss';
import Title from './Components/Title';
import Card from '../../Components/Card';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import {browserHistory} from 'react-router';

function InsurancePublication()
{
    //TODO：项目未确定，后台待补充
    return (
        <div className={Style.InsurancePublication}>
            <Card className={Style.contentWrapper}>
                <Title>新建保险</Title>
                <div className={Style.formWrapper}>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保险名称：</span>
                        <input type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保额：</span>
                        <input type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>承保年龄：</span>
                        <input type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保障期限：</span>
                        <input type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保费价格：</span>
                        <input type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保险详情：</span>
                        <textarea className={Style.insuranceDetailTextArea} />
                    </label>
                </div>
            </Card>
            <div className={Style.buttonGroup} role="group">
                <button type="button" className={Style.cancelButton} onClick={() =>
                {
                    browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]);
                }}>取消
                </button>
                <button type="button" className={Style.publishButton}>发布</button>
            </div>
        </div>
    );
}

export default InsurancePublication;