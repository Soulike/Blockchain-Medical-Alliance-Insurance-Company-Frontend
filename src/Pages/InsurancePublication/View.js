import React from 'react';
import Style from './Style.module.scss';
import Title from './Components/Title';
import Card from '../../Components/Card';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import {browserHistory} from 'react-router';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';

// const TextArea = Input.TextArea;
const ButtonGroup = Button.Group;

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
                        <Input className={Style.input} type="text" autoFocus={true} />
                    </label>
                    <div className={Style.inputWrapper}>
                        <span className={Style.label}>特需医疗：</span>
                        <Radio.Group defaultValue={false}>
                            <Radio value={true}>包含</Radio>
                            <Radio value={false}>不包含</Radio>
                        </Radio.Group>
                    </div>
                    <div className={Style.inputWrapper}>
                        <span className={Style.label}>有无社保：</span>
                        <Radio.Group defaultValue={false}>
                            <Radio value={true}>有</Radio>
                            <Radio value={false}>无</Radio>
                        </Radio.Group>
                    </div>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保额（人民币元）：</span>
                        <Input className={Style.input} type={'number'} step={0.01} defaultValue={0} min={0} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保障期限：</span>
                        <Input className={Style.input} type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保险病种：</span>
                        <Input className={Style.input} type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>承保年龄：</span>
                        <Input className={Style.input} type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>销售区域：</span>
                        <Input className={Style.input} type="text" />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保费价格（人民币元）：</span>
                        <Input className={Style.input} type="number" step={0.01} defaultValue={0} min={0} />
                    </label>
                    {/*<label className={Style.inputWrapper}>
                        <span className={Style.label}>保险详情：</span>
                        <TextArea className={`${Style.textarea} ${Style.insuranceDetailTextArea}`} />
                    </label>*/}
                </div>
            </Card>
            <ButtonGroup className={Style.buttonGroup}>
                <Button htmlType="button" className={Style.cancelButton} onClick={() =>
                {
                    browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]);
                }}>取消
                </Button>
                <Button htmlType="button" className={Style.publishButton} type={'primary'}>发布</Button>
            </ButtonGroup>
        </div>
    );
}

export default InsurancePublication;