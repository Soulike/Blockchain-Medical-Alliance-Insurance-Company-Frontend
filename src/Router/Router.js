import React from 'react';
import {browserHistory, IndexRedirect, Route, Router} from 'react-router';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../Config';
import PAGE_ID_TO_COMPONENT from './PAGE_ID_TO_COMPONENT';
// 所有页面的 View 在此处导入
import {View as RootContainer} from '../ComponentContainers/RootContainer';


const Routes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={RootContainer}>
            <IndexRedirect to={PAGE_ID_TO_ROUTE[PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]} />
            {
                Object.values(PAGE_ID).map(PAGE_ID => <Route path={PAGE_ID_TO_ROUTE[PAGE_ID]}
                                                             component={PAGE_ID_TO_COMPONENT[PAGE_ID]}
                                                             key={PAGE_ID} />)
            }
        </Route>
    </Router>
);

export default Routes;