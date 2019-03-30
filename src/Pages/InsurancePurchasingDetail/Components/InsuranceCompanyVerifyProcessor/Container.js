import React from 'react';
import PropTypes from 'prop-types';
import {MODAL_ID} from '../../../../Constant';
import Api from '../../../../Api';
import {getInsurancePurchasingInfoAction} from '../../Actions/Actions';
import {connect} from 'react-redux';
import InsuranceCompanyVerifyProcessor from './View';
import {Actions as ModalActions} from '../../../../ComponentContainers/Modal';

class InsuranceCompanyVerifyProcessorContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentSelectedRadio: false,
            electronicInsurancePolicy: '',
            medicalRecord: '',
        };
    }

    onRadioChange = e =>
    {
        this.setState({
            currentSelectedRadio: e.target.value,
        });
    };

    onViewElectronicInsurancePolicyButtonClick = async () =>
    {
        const {insurancePurchasingInfoId, showModal} = this.props;
        const electronicInsurancePolicyWrapper = await Api.sendGetElectronicInsurancePolicyRequestAsync(insurancePurchasingInfoId);
        if (electronicInsurancePolicyWrapper)
        {
            const {electronicInsurancePolicy} = electronicInsurancePolicyWrapper;
            this.setState({
                electronicInsurancePolicy,
            }, () =>
            {
                showModal(MODAL_ID.ELECTRONIC_INSURANCE_POLICY_MODAL);
            });
        }
    };

    onViewMedicalRecordButtonClick = async () =>
    {
        const {insurancePurchasingInfoId, showModal} = this.props;
        const medicalRecordWrapper = await Api.sendGetMedicalRecordRequestAsync(insurancePurchasingInfoId);
        if (medicalRecordWrapper)
        {
            const {medicalRecord} = medicalRecordWrapper;
            this.setState({
                medicalRecord,
            }, () =>
            {
                showModal(MODAL_ID.MEDICAL_RECORD_MODAL);
            });
        }
    };

    onConfirmButtonClick = async () =>
    {
        const {currentSelectedRadio} = this.state;
        const {insurancePurchasingInfoId, getInsurancePurchasingInfo} = this.props;
        const requestIsSuccessful = await Api.sendPostSubmitInsuranceCompanyVerifyResultRequestAsync(insurancePurchasingInfoId, currentSelectedRadio);
        if (requestIsSuccessful)
        {
            getInsurancePurchasingInfo(insurancePurchasingInfoId);
        }
    };

    render()
    {
        const {electronicInsurancePolicy, medicalRecord} = this.state;
        return <InsuranceCompanyVerifyProcessor electronicInsurancePolicy={electronicInsurancePolicy}
                                                medicalRecord={medicalRecord}
                                                onViewElectronicInsurancePolicyButtonClick={this.onViewElectronicInsurancePolicyButtonClick}
                                                onViewMedicalRecordButtonClick={this.onViewMedicalRecordButtonClick}
                                                onRadioChange={this.onRadioChange}
                                                onConfirmButtonClick={this.onConfirmButtonClick} />;
    }
}

InsuranceCompanyVerifyProcessorContainer.propTypes = {
    insurancePurchasingInfoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const mapDispatchToProps = {
    getInsurancePurchasingInfo: getInsurancePurchasingInfoAction,
    showModal: ModalActions.showModalAction,
};

export default connect(null, mapDispatchToProps)(InsuranceCompanyVerifyProcessorContainer);