import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import ModalTriggeringButton from '../../../../Components/ModalTriggeringButton';
import {MODAL_ID} from '../../../../Constant';
import {SmallModal} from '../../../../Components/Modal';

function PayConfirmProcessor(props)
{
    const {insurancePurchasingInfo} = props;
    const {
        name,
        insuranceType,
        insurancePrice,
    } = insurancePurchasingInfo;
    return [
        <div className={Style.PayConfirmProcessor} key={Style.PayConfirmProcessor}>
            <ModalTriggeringButton modalId={MODAL_ID.PAY_CONFIRM_MODAL}
                                   className={`btn btn-lg btn-primary ${Style.confirmPayButton}`}>确认投保人已支付保费</ModalTriggeringButton>
        </div>,
        <SmallModal id={MODAL_ID.PAY_CONFIRM_MODAL}
                    title={'确认投保人已支付保费'}
                    onConfirmButtonClick={this.onModalConfirm}
                    key={MODAL_ID.PAY_CONFIRM_MODAL}>
            确认投保人 {name} 已支付保险 {insuranceType} 的 {insurancePrice} 元保费？
        </SmallModal>,
    ];
}

PayConfirmProcessor.propTypes = {
    insurancePurchasingInfo: PropTypes.object.isRequired,
};

export default PayConfirmProcessor;