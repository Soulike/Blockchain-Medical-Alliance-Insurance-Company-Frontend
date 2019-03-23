import Function from '../../Function';
import {GET_VERIFICATION_CODE, LOGIN} from './ROUTE';
import NAMESPACE from '../../NAMESPACE';
import {STATUS_CODE} from '../../Constant';
import {DangerAlert, WarningAlert} from '../../Components/Alerts';

export default {
    sendPostLoginRequestAsync,
    sendGetVerificationCodeRequestAsync,
};

async function sendPostLoginRequestAsync(username, password)
{
    try
    {
        const {code} = await Function.postAsync(LOGIN, {
            [NAMESPACE.ACCOUNT.ACCOUNT.USERNAME]: username,
            [NAMESPACE.ACCOUNT.ACCOUNT.PASSWORD]: password,
        });
        switch (code)
        {
            case STATUS_CODE.SUCCESS:
            {
                return true;
            }
            case STATUS_CODE.CONTENT_NOT_FOUND:
            {
                WarningAlert.pop('用户名或密码错误');
                return null;
            }
            case STATUS_CODE.WRONG_PARAMETER:
            {
                WarningAlert.pop('参数错误');
                return null;
            }
            case STATUS_CODE.REJECTION:
            {
                WarningAlert.pop('用户名或密码错误');
                return null;
            }
            case STATUS_CODE.INVALID_SESSION:
            {
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                DangerAlert.pop('服务器错误');
                return null;
            }
            default:
            {
                WarningAlert.pop('登录失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        WarningAlert.pop('登录失败');
        return null;
    }
}

async function sendGetVerificationCodeRequestAsync(email)
{
    try
    {
        const {code} = await Function.getAsync(GET_VERIFICATION_CODE, false, {
            [NAMESPACE.ACCOUNT.SIGN_UP.EMAIL]: email,
        });
        switch (code)
        {
            case STATUS_CODE.SUCCESS:
            {
                return true;
            }
            case STATUS_CODE.WRONG_PARAMETER:
            {
                WarningAlert.pop('参数错误');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                DangerAlert.pop('服务器错误');
                return null;
            }
            default:
            {
                WarningAlert.pop('获取验证码失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        WarningAlert.pop('获取验证码失败');
        return null;
    }
}