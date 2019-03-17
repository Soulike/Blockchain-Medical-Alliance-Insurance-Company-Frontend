import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {STAGE_ID, STATE_ID_TO_TEXT} from '../../../../Constant';
import {browserHistory} from 'react-router';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Config';
import {TOOLTIP_POSITION, View as ToolTip} from '../../../../Components/Tooltip';
import Clipboard from 'clipboard';
import {SuccessAlert, WarningAlert} from '../../../../Components/Alerts';

class InsurancePurchasingInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.publicKeyRef = React.createRef();
    }


    componentDidMount()
    {
        const clipboard = new Clipboard(this.publicKeyRef.current);
        clipboard.on('success', () =>
        {
            SuccessAlert.pop('复制成功');
        });

        clipboard.on('error', () =>
        {
            WarningAlert.pop('复制失败');
        });
    }

    onInsuranceInfoClick = () =>
    {
        const {insurancePurchasingInfoId} = this.props;
        browserHistory.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL]}?insurancePurchasingInfoId=${insurancePurchasingInfoId}`);
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
                <td data-clipboard-text={publicKey}
                    ref={this.publicKeyRef}
                    onClick={e =>
                    {
                        e.preventDefault();
                        e.stopPropagation();
                        e.cancelBubble = true;
                    }}>
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

InsurancePurchasingInfo.propTypes = {
    insurancePurchasingInfoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isMale: PropTypes.bool.isRequired,
    healthState: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
    insuranceType: PropTypes.string.isRequired,
    insurancePurchasingTime: PropTypes.string.isRequired,
    insurancePeriod: PropTypes.string.isRequired,
    insurancePrice: PropTypes.number.isRequired,
    insurancePurchasingStage: PropTypes.oneOf(Object.values(STAGE_ID)).isRequired,
    responsiblePersonId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    responsiblePersonName: PropTypes.string.isRequired,
};

export default InsurancePurchasingInfo;