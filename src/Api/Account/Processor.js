import Function from '../../Function';
import {LOGIN} from './ROUTE';
import NAMESPACE from '../../NAMESPACE';
import {STATUS_CODE} from '../../Constant';
import {DangerAlert, WarningAlert} from '../../Components/Alerts';

export default {
    sendPostLoginRequestAsync,
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
        WarningAlert.pop('登录失败');
        return null;
    }
}