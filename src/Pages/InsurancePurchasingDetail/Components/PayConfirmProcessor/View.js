import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {MODAL_ID} from '../../../../Constant';
import Modal from '../../../../ComponentContainers/Modal';
import Button from 'antd/lib/button';

function PayConfirmProcessor(props)
{
    const {insurancePurchasingInfo} = props;
    const {
        name,
        insuranceType,
        insurancePrice,
        onModalConfirm,
        onConfirmPayButtonClick,
    } = insurancePurchasingInfo;
    return [
        <div className={Style.PayConfirmProcessor} key={Style.PayConfirmProcessor}>
            <Button htmlType={'button'}
                    type={'primary'}
                    className={`btn btn-lg btn-primary ${Style.confirmPayButton}`}
                    onClick={onConfirmPayButtonClick}>确认投保人已支付保费</Button>
        </div>,
        <Modal modalId={MODAL_ID.PAY_CONFIRM_MODAL}
               size={300}
               title={'确认投保人已支付保费'}
               onOk={onModalConfirm}
               key={MODAL_ID.PAY_CONFIRM_MODAL}>
            确认投保人 {name} 已支付保险 {insuranceType} 的 {insurancePrice} 元保费？
        </Modal>,
    ];
}

PayConfirmProcessor.propTypes = {
    insurancePurchasingInfo: PropTypes.object.isRequired,
    onModalConfirm: PropTypes.func.isRequired,
    onConfirmPayButtonClick: PropTypes.func.isRequired,
};

export default PayConfirmProcessor;