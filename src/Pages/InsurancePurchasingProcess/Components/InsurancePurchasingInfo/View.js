import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import ClickCopy from '../../../../Components/ClickCopy';
import Tooltip from 'antd/lib/tooltip';
import {INSURANCE_PURCHASING_STAGE_ID, INSURANCE_PURCHASING_STAGE_ID_TO_TEXT} from '../../../../Constant';
import message from 'antd/lib/message';

function InsurancePurchasingInfo(props)
{
    const {
        name,
        age,
        isMale,
        healthState,
        publicKey,
        insuranceType,
        insurancePurchasingTime,
        insurancePeriod,
        insurancePrice,
        insurancePurchasingStage,
        responsiblePersonName,
        onInsuranceInfoClick,
        rowRef,
    } = props;
    return (
        <tr className={`${Style.InsuranceInfo}`}
            onClick={onInsuranceInfoClick}
            ref={rowRef}>
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
            <td>{insuranceType}</td>
            <td>{insurancePurchasingTime}</td>
            <td>{insurancePeriod}</td>
            <td>{insurancePrice} 元</td>
            <td>{INSURANCE_PURCHASING_STAGE_ID_TO_TEXT[insurancePurchasingStage]}</td>
            <td>{responsiblePersonName}</td>
        </tr>
    );
}

InsurancePurchasingInfo.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMale: PropTypes.oneOf([0, 1]).isRequired,
    healthState: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
    insuranceType: PropTypes.string.isRequired,
    insurancePurchasingTime: PropTypes.string.isRequired,
    insurancePeriod: PropTypes.string.isRequired,
    insurancePrice: PropTypes.number.isRequired,
    insurancePurchasingStage: PropTypes.oneOf(Object.values(INSURANCE_PURCHASING_STAGE_ID)).isRequired,
    responsiblePersonName: PropTypes.string.isRequired,
    onInsuranceInfoClick: PropTypes.func.isRequired,
    rowRef: PropTypes.object.isRequired,
};

export default InsurancePurchasingInfo;