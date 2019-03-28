import React from 'react';
import Login from './View';
import {PAGE_ID_TO_ROUTE, REGEX, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import {WarningAlert} from '../../Components/Alerts';
import Api from '../../Api';
import {browserHistory} from 'react-router';
import {Actions as AuthProcessorActions} from '../../Components/AuthProcessor';
import {connect} from 'react-redux';

class LoginContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.usernameInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }

    componentDidMount()
    {
        const {hasLoggedIn} = this.props;
        if (hasLoggedIn)
        {
            browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]);
        }
    }

    onSubmit = async e =>
    {
        e.preventDefault();
        const username = this.usernameInputRef.current.value;
        const password = this.passwordInputRef.current.value;
        if (!REGEX.USERNAME.test(username))
        {
            WarningAlert.pop('用户名不正确');
        }
        else if (!REGEX.PASSWORD.test(password))
        {
            WarningAlert.pop('密码不正确');
        }
        else
        {
            const {setLoggedIn} = this.props;
            const requestIsSuccessful = await Api.sendPostLoginRequestAsync(username, password);
            if (requestIsSuccessful)
            {
                setLoggedIn();
                browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]);
            }
        }
    };

    render()
    {
        return (
            <Login usernameInputRef={this.usernameInputRef}
                   passwordInputRef={this.passwordInputRef}
                   onSubmit={this.onSubmit} />
        );
    }
}

const mapStateToProps = state =>
{
    const {AuthProcessor: {hasLoggedIn}} = state;
    return {
        hasLoggedIn,
    };
};

const mapDispatchToProps = {
    setLoggedIn: AuthProcessorActions.setLoggedInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);