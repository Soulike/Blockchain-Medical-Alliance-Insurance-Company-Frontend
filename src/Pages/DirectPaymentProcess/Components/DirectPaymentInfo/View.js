import React from 'react';
import Style from './Style.module.scss';
import ClickCopy from '../../../../Components/ClickCopy';
import {DIRECT_PAYMENT_STAGE_ID, DIRECT_PAYMENT_STAGE_ID_TO_TEXT} from '../../../../Constant';
import PropTypes from 'prop-types';
import message from 'antd/lib/message';
import Tooltip from 'antd/lib/tooltip';

function DirectPaymentInfo(props)
{
    const {
        name,
        age,
        isMale,
        healthState,
        directPaymentMoneyAmount,
        publicKey,
        directPaymentStage,
        onDirectPaymentInfoClick,
        onDiagnosticResultButtonClick,
        onMedicalDescriptionButtonClick,
        onInsurancePurchasingInfoButtonClick,
    } = props;
    return (
        <tr className={`${Style.DirectPaymentInfo}`}
            onClick={onDirectPaymentInfoClick}>
            <th scope="row">{name}</th>
            <td>{age} 岁</td>
            <td>{isMale ? '男' : '女'}</td>
            <td>{healthState}</td>
            <td>
                <ClickCopy copyText={publicKey} onCopySuccess={
                    () =>
                    {
                        message.success('公钥复制成功');
                    }} onCopyError={
                    () =>
                    {
                        message.warning('公钥复制失败');
                    }}>
                    <Tooltip title={'点击复制公钥'}>
                        <div className={Style.publicKey}>{publicKey}</div>
                    </Tooltip>
                </ClickCopy>
            </td>
            <td>{directPaymentMoneyAmount} 元</td>
            <td>
                <button onClick={onDiagnosticResultButtonClick}>查看</button>
            </td>
            <td>
                <button onClick={onMedicalDescriptionButtonClick}>查看</button>
            </td>
            <td>
                <button onClick={onInsurancePurchasingInfoButtonClick}>查看</button>
            </td>
            <td>{DIRECT_PAYMENT_STAGE_ID_TO_TEXT[directPaymentStage]}</td>
        </tr>
    );
}

DirectPaymentInfo.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isMale: PropTypes.oneOf([0, 1]).isRequired,
    healthState: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
    directPaymentMoneyAmount: PropTypes.number.isRequired,
    directPaymentStage: PropTypes.oneOf(Object.values(DIRECT_PAYMENT_STAGE_ID)).isRequired,
    onDirectPaymentInfoClick: PropTypes.func.isRequired,
    onDiagnosticResultButtonClick: PropTypes.func.isRequired,
    onMedicalDescriptionButtonClick: PropTypes.func.isRequired,
    onInsurancePurchasingInfoButtonClick: PropTypes.func.isRequired,
};

export default DirectPaymentInfo;