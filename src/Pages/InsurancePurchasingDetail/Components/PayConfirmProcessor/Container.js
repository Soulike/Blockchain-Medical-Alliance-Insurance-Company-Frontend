import React from 'react';
import PropTypes from 'prop-types';
import {MODAL_ID} from '../../../../Constant';
import Api from '../../../../Api';
import {getInsurancePurchasingInfoAction} from '../../Actions/Actions';
import {connect} from 'react-redux';
import PayConfirmProcessor from './View';
import {Actions as ModalActions} from '../../../../ComponentContainers/Modal';

class PayConfirmProcessorContainer extends React.Component
{
    onConfirmPayButtonClick = async () =>
    {
        const {showModal} = this.props;
        showModal(MODAL_ID.PAY_CONFIRM_MODAL);
    };

    onModalConfirm = async () =>
    {
        const {insurancePurchasingInfo, getInsurancePurchasingInfo, hideModal} = this.props;
        const {
            insurancePurchasingInfoId,
        } = insurancePurchasingInfo;
        const requestIsSuccessful = await Api.sendPostSubmitPayConfirmationRequestAsync(insurancePurchasingInfoId);
        if (requestIsSuccessful)
        {
            getInsurancePurchasingInfo(insurancePurchasingInfoId);
            hideModal(MODAL_ID.PAY_CONFIRM_MODAL);
        }
    };

    render()
    {
        const {insurancePurchasingInfo} = this.props;
        return <PayConfirmProcessor insurancePurchasingInfo={insurancePurchasingInfo}
                                    onModalConfirm={this.onModalConfirm}
                                    onConfirmPayButtonClick={this.onConfirmPayButtonClick} />;
    }
}

PayConfirmProcessorContainer.propTypes = {
    insurancePurchasingInfo: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
    getInsurancePurchasingInfo: getInsurancePurchasingInfoAction,
    showModal: ModalActions.showModalAction,
    hideModal: ModalActions.hideModalAction,
};

export default connect(null, mapDispatchToProps)(PayConfirmProcessorContainer);