import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {INSURANCE_PURCHASING_STAGE_ID} from '../../../../Constant';
import {browserHistory, withRouter} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../../../Config';
import InsurancePurchasingInfo from './View';

class InsurancePurchasingInfoContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.rowRef = React.createRef();
    }

    componentDidMount()
    {
        const {query: {insurancePurchasingInfoId: insurancePurchasingInfoIdInQuery}} = this.props.location;
        const {insurancePurchasingInfoId} = this.props;
        if (insurancePurchasingInfoId === insurancePurchasingInfoIdInQuery || insurancePurchasingInfoId === parseInt(insurancePurchasingInfoIdInQuery, 10))
        {
            this.rowRef.current.scrollIntoView();
            this.rowRef.current.classList.add(Style.active);
        }
    }

    onInsuranceInfoClick = () =>
    {
        const {insurancePurchasingInfoId} = this.props;
        browserHistory.push(`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL]}?insurancePurchasingInfoId=${insurancePurchasingInfoId}`);
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
        return <InsurancePurchasingInfo name={name}
                                        age={age}
                                        isMale={isMale}
                                        healthState={healthState}
                                        publicKey={publicKey}
                                        insuranceType={insuranceType}
                                        insurancePurchasingTime={insurancePurchasingTime}
                                        insurancePeriod={insurancePeriod}
                                        insurancePrice={insurancePrice}
                                        insurancePurchasingStage={insurancePurchasingStage}
                                        responsiblePersonName={responsiblePersonName}
                                        onInsuranceInfoClick={this.onInsuranceInfoClick}
                                        rowRef={this.rowRef} />;
    }
}

InsurancePurchasingInfoContainer.propTypes = {
    insurancePurchasingInfoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isMale: PropTypes.oneOf([0, 1]).isRequired,
    healthState: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
    insuranceType: PropTypes.string.isRequired,
    insurancePurchasingTime: PropTypes.string.isRequired,
    insurancePeriod: PropTypes.string.isRequired,
    insurancePrice: PropTypes.number.isRequired,
    insurancePurchasingStage: PropTypes.oneOf(Object.values(INSURANCE_PURCHASING_STAGE_ID)).isRequired,
    responsiblePersonId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    responsiblePersonName: PropTypes.string.isRequired,
};

export default withRouter(InsurancePurchasingInfoContainer);