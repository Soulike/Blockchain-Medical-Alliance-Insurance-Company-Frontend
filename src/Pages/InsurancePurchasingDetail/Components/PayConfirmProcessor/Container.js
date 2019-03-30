import React from 'react';
import PropTypes from 'prop-types';
import {Function as ModalFunction} from '../../../../Components/Modal';
import {MODAL_ID} from '../../../../Constant';
import Api from '../../../../Api';
import {getInsurancePurchasingInfoAction} from '../../Actions/Actions';
import {connect} from 'react-redux';
import PayConfirmProcessor from './View';

class PayConfirmProcessorContainer extends React.Component
{
    onModalConfirm = async () =>
    {
        const {insurancePurchasingInfo, getInsurancePurchasingInfo} = this.props;
        const {
            insurancePurchasingInfoId,
        } = insurancePurchasingInfo;
        const requestIsSuccessful = await Api.sendPostSubmitPayConfirmationRequestAsync(insurancePurchasingInfoId);
        if (requestIsSuccessful)
        {
            getInsurancePurchasingInfo(insurancePurchasingInfoId);
            ModalFunction.hideModal(MODAL_ID.PAY_CONFIRM_MODAL);
        }
    };

    render()
    {
        const {insurancePurchasingInfo} = this.props;
        return <PayConfirmProcessor insurancePurchasingInfo={insurancePurchasingInfo} />;
    }
}

PayConfirmProcessorContainer.propTypes = {
    insurancePurchasingInfo: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
    getInsurancePurchasingInfo: getInsurancePurchasingInfoAction,
};

export default connect(null, mapDispatchToProps)(PayConfirmProcessorContainer);