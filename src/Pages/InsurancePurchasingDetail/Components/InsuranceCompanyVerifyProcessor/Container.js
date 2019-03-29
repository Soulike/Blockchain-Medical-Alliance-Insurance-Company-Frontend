import React from 'react';
import PropTypes from 'prop-types';
import {Function as ModalFunction} from '../../../../Components/Modal';
import {MODAL_ID} from '../../../../Constant';
import Api from '../../../../Api';
import NAMESPACE from '../../../../NAMESPACE';
import {getInsurancePurchasingInfoAction} from '../../Actions/Actions';
import {connect} from 'react-redux';
import InsuranceCompanyVerifyProcessor from './View';

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
        this.yesRadioRef = React.createRef();
        this.noRadioRef = React.createRef();
    }

    componentDidMount()
    {
        this.yesRadioRef.current.checked = false;
        this.noRadioRef.current.checked = true;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const {currentSelectedRadio} = this.state;
        if (prevState.currentSelectedRadio !== currentSelectedRadio)
        {
            if (currentSelectedRadio === true)
            {
                this.yesRadioRef.current.checked = true;
                this.noRadioRef.current.checked = false;
            }
            else
            {
                this.yesRadioRef.current.checked = false;
                this.noRadioRef.current.checked = true;
            }
        }
    }

    onRadioClick = isYes =>
    {
        return () =>
        {
            this.setState({
                currentSelectedRadio: isYes,
            });
        };
    };

    onViewElectronicInsurancePolicyButtonClick = async () =>
    {
        const {insurancePurchasingInfoId} = this.props;
        const electronicInsurancePolicyWrapper = await Api.sendGetElectronicInsurancePolicyRequestAsync(insurancePurchasingInfoId);
        if (electronicInsurancePolicyWrapper)
        {
            this.setState({
                electronicInsurancePolicy: electronicInsurancePolicyWrapper[NAMESPACE.INSURANCE_PURCHASING_DETAIL.INSURANCE_COMPANY_VERIFY.ELECTRONIC_INSURANCE_POLICY],
            }, () =>
            {
                ModalFunction.showModal(MODAL_ID.ELECTRONIC_INSURANCE_POLICY_MODAL);
            });
        }
    };

    onViewMedicalRecordButtonClick = async () =>
    {
        const {insurancePurchasingInfoId} = this.props;
        const medicalRecord = await Api.sendGetMedicalRecordRequestAsync(insurancePurchasingInfoId);
        if (medicalRecord)
        {
            this.setState({
                medicalRecord: medicalRecord[NAMESPACE.INSURANCE_PURCHASING_DETAIL.INSURANCE_COMPANY_VERIFY.MEDICAL_RECORD],
            }, () =>
            {
                ModalFunction.showModal(MODAL_ID.MEDICAL_RECORD_MODAL);
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
                                                onRadioClick={this.onRadioClick}
                                                yesRadioRef={this.yesRadioRef}
                                                noRadioRef={this.noRadioRef}
                                                onConfirmButtonClick={this.onConfirmButtonClick} />;
    }
}

InsuranceCompanyVerifyProcessorContainer.propTypes = {
    insurancePurchasingInfoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const mapDispatchToProps = {
    getInsurancePurchasingInfo: getInsurancePurchasingInfoAction,
};

export default connect(null, mapDispatchToProps)(InsuranceCompanyVerifyProcessorContainer);