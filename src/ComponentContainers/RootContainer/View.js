import React from 'react';
import {View as Root} from '../../Components/Root';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID, ROUTE_TO_PAGE_ID} from '../../Config';

class RootContainer extends React.Component
{
    shouldInsuranceLinkBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST ||
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PUBLICATION ||
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_DETAIL
        );
    };

    shouldInsurancePurchasingLinkBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS ||
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL
        );
    };

    shouldDirectPaymentLinkBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL ||
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS
        );
    };

    shouldPersonalCenterLinkBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER
        );
    };

    render()
    {
        const {children} = this.props;
        const currentPageId = ROUTE_TO_PAGE_ID[this.props.location.pathname];
        return (
            <Root hasLoggedIn={true}
                  insuranceUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]}
                  directPaymentUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]}
                  insurancePurchasingUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS]}
                  loginUrl={'#'}
                  signUpUrl={'#'}
                  personalCenterUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER]}
                  insuranceLinkIsActive={this.shouldInsuranceLinkBeActive(currentPageId)}
                  insurancePurchasingLinkIsActive={this.shouldInsurancePurchasingLinkBeActive(currentPageId)}
                  directPaymentLinkIsActive={this.shouldDirectPaymentLinkBeActive(currentPageId)}
                  personalCenterLinkIsActive={this.shouldPersonalCenterLinkBeActive(currentPageId)}>{children}</Root>
        );
    }
}

export default RootContainer;