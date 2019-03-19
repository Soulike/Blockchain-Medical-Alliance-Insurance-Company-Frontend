import React from 'react';
import Style from './Style.module.scss';
import {View as AccountPageCard} from '../../Components/AccountPageCard';
import {Link} from 'react-router';

class Login extends React.Component
{
    render()
    {
        return (
            <AccountPageCard>
                <div className={Style.Login}>
                    <div className={Style.title}>登录</div>
                    <form className={Style.loginForm}>
                        <div className={Style.inputWrapper}>
                            <input type="text" placeholder={'用户名'} autoFocus={true} />
                            <input type="text" placeholder={'密码'} />
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
}

export default Login;