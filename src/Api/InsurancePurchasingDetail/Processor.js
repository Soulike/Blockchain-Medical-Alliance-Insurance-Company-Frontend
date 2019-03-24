import Function from '../../Function';
import NAMESPACE from '../../NAMESPACE';
import {GET_INSURANCE_PURCHASING_INFO} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';
import {DangerAlert, WarningAlert} from '../../Components/Alerts';

export default {
    sendGetInsurancePurchasingInfoRequestAsync,
};

async function sendGetInsurancePurchasingInfoRequestAsync(insurancePurchasingInfoId)
{
    try
    {
        const {code, data} = Function.getAsync(GET_INSURANCE_PURCHASING_INFO, false, {
            [NAMESPACE.INSURANCE_PURCHASING_PROCESS.INSURANCE_PURCHASING_INFO_ID]: insurancePurchasingInfoId,
        });

        switch (code)
        {
            case STATUS_CODE.SUCCESS:
            {
                return data;
            }
            case STATUS_CODE.CONTENT_NOT_FOUND:
            {
                WarningAlert.pop('投保信息不存在');
                return null;
            }
            case STATUS_CODE.WRONG_PARAMETER:
            {
                WarningAlert.pop('参数错误');
                return null;
            }
            case STATUS_CODE.REJECTION:
            {
                return null;
            }
            case STATUS_CODE.INVALID_SESSION:
            {
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                DangerAlert.pop('服务器错误');
                return null;
            }
            default:
            {
                WarningAlert.pop('获取投保信息失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        WarningAlert.pop('获取投保信息失败');
        return null;
    }
}