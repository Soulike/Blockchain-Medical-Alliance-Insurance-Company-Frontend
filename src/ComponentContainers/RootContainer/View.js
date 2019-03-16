import React from 'react';
import {View as Root} from '../../Components/Root';
import {ROUTER} from '../../Config';

class RootContainer extends React.Component
{
    shouldInsuranceLinkBeActive = pageId =>
    {
        return (
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST ||
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_INSURANCE_PUBLICATION ||
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_INSURANCE_DETAIL
        );
    };

    shouldInsurancePurchasingLinkBeActive = pageId =>
    {
        return (
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS ||
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_DETAIL
        );
    };

    shouldDirectPaymentLinkBeActive = pageId =>
    {
        return (
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL ||
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS
        );
    };

    shouldPersonalCenterLinkBeActive = pageId =>
    {
        return (
            pageId === ROUTER.PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER
        );
    };

    render()
    {
        const {PAGE_ID, PAGE_ID_TO_ROUTE, ROUTE_TO_PAGE_ID} = ROUTER;
        const currentPageId = ROUTE_TO_PAGE_ID[this.props.location.pathname];
        return (
            <Root hasLoggedIn={true}
                  insuranceUrl={PAGE_ID_TO_ROUTE[PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]}
                  directPaymentUrl={PAGE_ID_TO_ROUTE[PAGE_ID.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]}
                  insurancePurchasingUrl={PAGE_ID_TO_ROUTE[PAGE_ID.INSURANCE_COMPANY_INSURANCE_PURCHASING_PROCESS]}
                  loginUrl={'#'}
                  signUpUrl={'#'}
                  personalCenterUrl={PAGE_ID_TO_ROUTE[PAGE_ID.INSURANCE_COMPANY_PERSONAL_CENTER]}
                  insuranceLinkIsActive={this.shouldInsuranceLinkBeActive(currentPageId)}
                  insurancePurchasingLinkIsActive={this.shouldInsurancePurchasingLinkBeActive(currentPageId)}
                  directPaymentLinkIsActive={this.shouldDirectPaymentLinkBeActive(currentPageId)}
                  personalCenterLinkIsActive={this.shouldPersonalCenterLinkBeActive(currentPageId)} />
        );
    }
}

export default RootContainer;