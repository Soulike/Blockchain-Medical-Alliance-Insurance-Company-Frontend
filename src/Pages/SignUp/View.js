import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import AccountPageCard from '../../Components/AccountPageCard';
import {browserHistory, Link} from 'react-router';
import {NOT_REQUIRE_LOGIN_PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import {REGEX_TEXT} from '../../Config';

function SignUp(props)
{
    const {
        signUpHasSucceeded,
        onSubmit,
        usernameInputRef,
        passwordInputRef,
        repeatPasswordInputRef,
        nameInputRef,
        ageInputRef,
        addressInputRef,
        emailInputRef,
        verificationCodeInputRef,
        hasSendVerificationCode,
        timeToNextSend,
        onGetVerificationCodeButtonClick,
    } = props;
    return (
        <AccountPageCard>
            <div className={Style.SignUp}>
                {signUpHasSucceeded ?
                    <div className={Style.signUpSuccessPart}>
                        <div className={Style.title}>注册成功</div>
                        <div className={Style.buttonWrapper}>
                            <button className={Style.toLoginButton} onClick={() =>
                            {
                                browserHistory.push(PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_LOGIN]);
                            }
                            }>去登录
                            </button>
                        </div>
                    </div> :
                    <div className={Style.signUpPart}>
                        <div className={Style.title}>注册</div>
                        <form className={Style.signUpForm} onSubmit={onSubmit}>
                            <div className={Style.inputWrapper}>
                                <input type="text"
                                       placeholder={`用户名 (${REGEX_TEXT.USERNAME})`}
                                       autoFocus={true}
                                       ref={usernameInputRef} />
                                <input type="password"
                                       placeholder={`密码 (${REGEX_TEXT.PASSWORD})`}
                                       ref={passwordInputRef} />
                                <input type="password" placeholder={'确认密码'} ref={repeatPasswordInputRef} />
                                <input type="text" placeholder={'姓名'} ref={nameInputRef} />
                                <input type="number" placeholder={'年龄'} ref={ageInputRef} />
                                <input type="text" placeholder={'家庭住址'} ref={addressInputRef} />
                                <input type="email" placeholder={'邮箱 (接收验证码的邮箱)'} ref={emailInputRef} />
                                <div className={`input-group ${Style.verificationCodeInputWrapper}`}>
                                    <input type="text"
                                           placeholder={'验证码'}
                                           className={`form-control ${Style.verificationCodeInput}`}
                                           ref={verificationCodeInputRef} />
                                    <div className={`input-group-append ${Style.verificationCodeInputLabelWrapper}`}
                                         onClick={onGetVerificationCodeButtonClick}>
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
                }
            </div>
        </AccountPageCard>
    );
}

SignUp.propTypes = {
    signUpHasSucceeded: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    usernameInputRef: PropTypes.object.isRequired,
    passwordInputRef: PropTypes.object.isRequired,
    repeatPasswordInputRef: PropTypes.object.isRequired,
    nameInputRef: PropTypes.object.isRequired,
    ageInputRef: PropTypes.object.isRequired,
    addressInputRef: PropTypes.object.isRequired,
    emailInputRef: PropTypes.object.isRequired,
    verificationCodeInputRef: PropTypes.object.isRequired,
    hasSendVerificationCode: PropTypes.bool.isRequired,
    timeToNextSend: PropTypes.number.isRequired,
    onGetVerificationCodeButtonClick: PropTypes.func.isRequired,
};

export default SignUp;