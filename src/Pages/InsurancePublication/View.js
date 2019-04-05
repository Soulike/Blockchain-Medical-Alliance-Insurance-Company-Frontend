import React from 'react';
import Style from './Style.module.scss';
import Title from './Components/Title';
import Card from '../../Components/Card';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';

// const TextArea = Input.TextArea;
const ButtonGroup = Button.Group;

function InsurancePublication(props)
{
    const {
        insuranceNameInputRef,
        onIsSpecialMedicalCareRadioChange,
        onHasSocialSecurityRadioChange,
        insuranceAmountInputRef,
        insurancePeriodInputRef,
        insuranceDiseaseTypeInputRef,
        coveringAgeInputRef,
        salesAreaInputRef,
        insurancePriceInputRef,
        onSubmit,
        onCancel,
    } = props;
    return (
        <div className={Style.InsurancePublication}>
            <Card className={Style.contentWrapper}>
                <Title>新建保险</Title>
                <div className={Style.formWrapper}>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保险名称：</span>
                        <Input className={Style.input} type="text" autoFocus={true} ref={insuranceNameInputRef} />
                    </label>
                    <div className={Style.inputWrapper}>
                        <span className={Style.label}>特需医疗：</span>
                        <Radio.Group defaultValue={false} onChange={onIsSpecialMedicalCareRadioChange}>
                            <Radio value={true}>包含</Radio>
                            <Radio value={false}>不包含</Radio>
                        </Radio.Group>
                    </div>
                    <div className={Style.inputWrapper}>
                        <span className={Style.label}>有无社保：</span>
                        <Radio.Group defaultValue={false} onChange={onHasSocialSecurityRadioChange}>
                            <Radio value={true}>有</Radio>
                            <Radio value={false}>无</Radio>
                        </Radio.Group>
                    </div>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保额（人民币元）：</span>
                        <Input className={Style.input}
                               type={'number'}
                               step={0.01}
                               placeholder={'0.00'}
                               min={0}
                               ref={insuranceAmountInputRef} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保障期限：</span>
                        <Input className={Style.input} type="text" ref={insurancePeriodInputRef} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保险病种：</span>
                        <Input className={Style.input} type="text" ref={insuranceDiseaseTypeInputRef} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>承保年龄：</span>
                        <Input className={Style.input} type="text" ref={coveringAgeInputRef} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>销售区域：</span>
                        <Input className={Style.input} type="text" ref={salesAreaInputRef} />
                    </label>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>保费价格（人民币元）：</span>
                        <Input className={Style.input}
                               type="number"
                               step={0.01}
                               placeholder={'0.00'}
                               min={0}
                               ref={insurancePriceInputRef} />
                    </label>
                    {/*<label className={Style.inputWrapper}>
                        <span className={Style.label}>保险详情：</span>
                        <TextArea className={`${Style.textarea} ${Style.insuranceDetailTextArea}`} />
                    </label>*/}
                </div>
            </Card>
            <ButtonGroup className={Style.buttonGroup}>
                <Button htmlType="button" className={Style.cancelButton} onClick={onCancel}>取消
                </Button>
                <Button htmlType="button"
                        className={Style.publishButton}
                        type={'primary'}
                        onClick={onSubmit}>发布</Button>
            </ButtonGroup>
        </div>
    );
}

InsurancePublication.propTypes = {
    insuranceNameInputRef: PropTypes.object.isRequired,
    onIsSpecialMedicalCareRadioChange: PropTypes.func.isRequired,
    onHasSocialSecurityRadioChange: PropTypes.func.isRequired,
    insuranceAmountInputRef: PropTypes.object.isRequired,
    insurancePeriodInputRef: PropTypes.object.isRequired,
    insuranceDiseaseTypeInputRef: PropTypes.object.isRequired,
    coveringAgeInputRef: PropTypes.object.isRequired,
    salesAreaInputRef: PropTypes.object.isRequired,
    insurancePriceInputRef: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default InsurancePublication;