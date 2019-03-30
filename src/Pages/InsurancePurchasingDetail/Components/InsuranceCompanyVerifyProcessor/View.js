import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {Modal} from '../../../../Components/Modal';
import {MODAL_ID} from '../../../../Constant';
import Radio from 'antd/lib/radio';
import Button from 'antd/lib/button';

const RadioGroup = Radio.Group;

function InsuranceCompanyVerifyProcessor(props)
{
    const {
        electronicInsurancePolicy,
        medicalRecord,
        onViewElectronicInsurancePolicyButtonClick,
        onViewMedicalRecordButtonClick,
        onRadioChange,
        onConfirmButtonClick,
    } = props;
    return [
        <div className={Style.InsuranceCompanyVerifyProcessor} key={Style.InsuranceCompanyVerifyProcessor}>
            <div className={Style.buttonsWrapper}>
                <Button htmlType={'button'} onClick={onViewElectronicInsurancePolicyButtonClick}>查看电子保单</Button>
                <Button htmlType={'button'} onClick={onViewMedicalRecordButtonClick}>查看病历</Button>
            </div>
            <div className={Style.selectorWrapper}>
                <div className={Style.selectorLabel}>审核通过：</div>
                <div className={Style.radioWrapper}>
                    <RadioGroup onChange={onRadioChange} defaultValue={false}>
                        <Radio value={true}>是</Radio>
                        <Radio value={false}>否</Radio>
                    </RadioGroup>
                </div>
            </div>
            <div className={Style.confirmButtonWrapper}>
                <Button htmlType={'button'} type={'primary'} className={Style.confirmButton}
                        onClick={onConfirmButtonClick}>确定
                </Button>
            </div>
        </div>,
        <Modal id={MODAL_ID.ELECTRONIC_INSURANCE_POLICY_MODAL}
               title={'电子保单'}
               key={MODAL_ID.ELECTRONIC_INSURANCE_POLICY_MODAL}>
            {electronicInsurancePolicy}
        </Modal>,
        <Modal id={MODAL_ID.MEDICAL_RECORD_MODAL} title={'病历'} key={MODAL_ID.MEDICAL_RECORD_MODAL}>
            {medicalRecord}
        </Modal>,
    ];
}

InsuranceCompanyVerifyProcessor.propTypes = {
    electronicInsurancePolicy: PropTypes.node.isRequired,
    medicalRecord: PropTypes.node.isRequired,
    onViewElectronicInsurancePolicyButtonClick: PropTypes.func.isRequired,
    onViewMedicalRecordButtonClick: PropTypes.func.isRequired,
    onRadioChange: PropTypes.func.isRequired,
    onConfirmButtonClick: PropTypes.func.isRequired,
};

export default InsuranceCompanyVerifyProcessor;