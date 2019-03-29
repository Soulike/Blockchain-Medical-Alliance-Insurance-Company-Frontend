import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import Radio from '../../../../Components/Radio';
import {Modal} from '../../../../Components/Modal';
import {MODAL_ID} from '../../../../Constant';

function InsuranceCompanyVerifyProcessor(props)
{
    const {
        electronicInsurancePolicy,
        medicalRecord,
        onViewElectronicInsurancePolicyButtonClick,
        onViewMedicalRecordButtonClick,
        onRadioClick,
        yesRadioRef,
        noRadioRef,
        onConfirmButtonClick,
    } = props;
    return [
        <div className={Style.InsuranceCompanyVerifyProcessor} key={Style.InsuranceCompanyVerifyProcessor}>
            <div className={Style.buttonsWrapper}>
                <button className={`btn`} onClick={onViewElectronicInsurancePolicyButtonClick}>查看电子保单</button>
                <button className={`btn`} onClick={onViewMedicalRecordButtonClick}>查看病历</button>
            </div>
            <div className={Style.selectorWrapper}>
                <div className={Style.selectorLabel}>审核通过：</div>
                <div className={Style.radioWrapper}>
                    <Radio label={'是'} onClick={onRadioClick(true)} radioRef={yesRadioRef} />
                    <Radio label={'否'} onClick={onRadioClick(false)} radioRef={noRadioRef} />
                </div>
            </div>
            <div className={Style.confirmButtonWrapper}>
                <button className={`btn btn-primary ${Style.confirmButton}`}
                        onClick={onConfirmButtonClick}>确定
                </button>
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
    onRadioClick: PropTypes.func.isRequired,
    yesRadioRef: PropTypes.object.isRequired,
    noRadioRef: PropTypes.object.isRequired,
    onConfirmButtonClick: PropTypes.func.isRequired,
};

export default InsuranceCompanyVerifyProcessor;