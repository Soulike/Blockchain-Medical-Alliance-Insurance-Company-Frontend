import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {STAGE_ID, STATE_ID_TO_TEXT} from '../../../../Constant';
import {browserHistory} from 'react-router';
import {ROUTER} from '../../../../Config';
import ToolTip from '../../../../Components/Tooltip/View';
import {TOOLTIP_POSITION} from '../../../../Components/Tooltip';

class InsuranceInfo extends React.Component
{
    onInsuranceInfoClick = () =>
    {
        const {insuranceId} = this.props;
        browserHistory.push(`${ROUTER.PAGE_ID_TO_ROUTE[ROUTER.PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL]}?insuranceId=${insuranceId}`);
    };

    render()
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
        } = this.props;
        return (
            <tr className={`${Style.InsuranceInfo}`}
                onClick={this.onInsuranceInfoClick}>
                <th scope="row">{name}</th>
                <td>{age} 岁</td>
                <td>{isMale ? '男' : '女'}</td>
                <td>{healthState}</td>
                <td>
                    <ToolTip placement={TOOLTIP_POSITION.TOP} title={'点击复制公钥'}>
                        <div className={Style.publicKey}>{publicKey}</div>
                    </ToolTip>
                </td>
                <td>{insuranceType}</td>
                <td>{insurancePurchasingTime}</td>
                <td>{insurancePeriod}</td>
                <td>{insurancePrice} 元</td>
                <td>{STATE_ID_TO_TEXT[insurancePurchasingStage]}</td>
                <td>{responsiblePersonName}</td>
            </tr>
        );
    }
}

InsuranceInfo.propTypes = {
    insuranceId: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
    isMale: PropTypes.bool.isRequired,
    healthState: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
    insuranceType: PropTypes.string.isRequired,
    insurancePurchasingTime: PropTypes.string.isRequired,
    insurancePeriod: PropTypes.string.isRequired,
    insurancePrice: PropTypes.number.isRequired,
    insurancePurchasingStage: PropTypes.oneOf(Object.values(STAGE_ID)).isRequired,
    responsiblePersonName: PropTypes.string.isRequired,
};

export default InsuranceInfo;