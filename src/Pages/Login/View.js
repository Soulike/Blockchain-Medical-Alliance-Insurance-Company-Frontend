import React from 'react';
import Style from './Style.module.scss';
import AccountPageCard from '../../Components/AccountPageCard';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

function Login(props)
{
    const {usernameInputRef, passwordInputRef, onSubmit} = props;
    return (
        <AccountPageCard>
            <div className={Style.Login}>
                <div className={Style.title}>登录</div>
                <form className={Style.loginForm} onSubmit={onSubmit}>
                    <div className={Style.inputWrapper}>
                        <input type="text" placeholder={'用户名'} autoFocus={true} ref={usernameInputRef} />
                        <input type="text" placeholder={'密码'} ref={passwordInputRef} />
                    </div>
                    <div className={Style.linkWrapper}>
                        <Link onlyActiveOnIndex={false} to={'#'}>忘记密码？</Link>
                    </div>
                    <div className={Style.buttonWrapper}>
                        <button className={Style.submitButton}>确认</button>
                    </div>
                </form>
            </div>
        </AccountPageCard>
    );
}


Login.propTypes = {
    usernameInputRef: PropTypes.object.isRequired,
    passwordInputRef: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Login;