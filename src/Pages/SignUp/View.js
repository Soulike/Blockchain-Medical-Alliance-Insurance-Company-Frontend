import React from 'react';
import Style from './Style.module.scss';
import {View as AccountPageCard} from '../../Components/AccountPageCard';
import {Link} from 'react-router';
import {NOT_REQUIRE_LOGIN_PAGE_ID, PAGE_ID_TO_ROUTE, REGEX, REGEX_TEXT} from '../../Config';
import Api from '../../Api';
import {WarningAlert} from '../../Components/Alerts';

class SignUp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.usernameInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.repeatPasswordInputRef = React.createRef();
        this.nameInputRef = React.createRef();
        this.ageInputRef = React.createRef();
        this.addressInputRef = React.createRef();
        this.emailInputRef = React.createRef();
        this.verificationCodeInputRef = React.createRef();

        this.state = {
            hasSendVerificationCode: false,
            timeToNextSend: 0,
        };

    }

    onGetVerificationCodeButtonClick = async () =>
    {
        const {hasSendVerificationCode} = this.state;
        if (!hasSendVerificationCode)
        {
            const email = this.emailInputRef.current.value;
            if (!REGEX.EMAIL.test(email))
            {
                WarningAlert.pop('请输入正确的邮箱');
            }
            else
            {
                const requestIsSuccessful = await Api.sendGetVerificationCodeRequestAsync(email);
                if (requestIsSuccessful)
                {
                    this.setState({
                        hasSendVerificationCode: true,
                        timeToNextSend: 30,
                    }, () =>
                    {
                        const interval = setInterval(() =>
                        {
                            const {timeToNextSend} = this.state;
                            this.setState({
                                timeToNextSend: timeToNextSend - 1,
                            });
                        }, 1000);

                        setTimeout(() =>
                        {
                            clearInterval(interval);
                            this.setState({
                                hasSendVerificationCode: false,
                            });
                        }, 30 * 1000);
                    });
                }
            }
        }
    };

    onFormSubmit = async e =>
    {
        e.preventDefault();
    };


    render()
    {
        const {hasSendVerificationCode, timeToNextSend} = this.state;
        return (
            <AccountPageCard>
                <div className={Style.SignUp}>
                    <div className={Style.title}>注册</div>
                    <form className={Style.signUpForm} onSubmit={this.onFormSubmit}>
                        <div className={Style.inputWrapper}>
                            <input type="text"
                                   placeholder={`用户名 (${REGEX_TEXT.USERNAME})`}
                                   autoFocus={true}
                                   ref={this.usernameInputRef} />
                            <input type="password"
                                   placeholder={`密码 (${REGEX_TEXT.PASSWORD})`}
                                   ref={this.passwordInputRef} />
                            <input type="password" placeholder={'确认密码'} ref={this.repeatPasswordInputRef} />
                            <input type="text" placeholder={'姓名'} ref={this.nameInputRef} />
                            <input type="number" placeholder={'年龄'} ref={this.ageInputRef} />
                            <input type="text" placeholder={'家庭住址'} ref={this.addressInputRef} />
                            <input type="email" placeholder={'邮箱 (接收验证码的邮箱)'} ref={this.emailInputRef} />
                            <div className={`input-group ${Style.verificationCodeInputWrapper}`}>
                                <input type="text"
                                       placeholder={'验证码'}
                                       className={`form-control ${Style.verificationCodeInput}`}
                                       ref={this.verificationCodeInputRef} />
                                <div className={`input-group-append ${Style.verificationCodeInputLabelWrapper}`}
                                     onClick={this.onGetVerificationCodeButtonClick}>
                                    <span className={`input-group-text ${Style.verificationCodeInputLabel}`}>
                                        {
                                            hasSendVerificationCode ? timeToNextSend : '发送'
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={Style.linkWrapper}>
                            <Link onlyActiveOnIndex={false}
                                  to={PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_LOGIN]}>已有帐号？</Link>
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

export default SignUp;