import Store from '../../Store';
import {browserHistory} from 'react-router';
import {NOT_REQUIRE_LOGIN_PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config';

export function requireLogin()
{
    const {AuthProcessor: {hasLoggedIn}} = Store.getState();
    if (!hasLoggedIn)
    {
        browserHistory.push(PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_LOGIN]);
    }
}