import Function from '../../Function';
import {SUBMIT_NEW_INSURANCE} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';


export async function sendPostSubmitNewInsuranceRequestAsync(insuranceName, isSpecialMedicalCare, hasSocialSecurity,
                                                             insuranceAmount, insurancePeriod, insuranceDiseaseType, coveringAge, salesArea, insurancePrice)
{
    try
    {
        const {code} = Function.postAsync(SUBMIT_NEW_INSURANCE, {
            insuranceName,
            isSpecialMedicalCare,
            hasSocialSecurity,
            insuranceAmount,
            insurancePeriod,
            insuranceDiseaseType,
            coveringAge,
            salesArea,
            insurancePrice,
        });

        switch (code)
        {
            case STATUS_CODE.OK:
            {
                message.success('新建保险成功');
                return true;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                message.error('未登录操作');
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('新建保险操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('保险不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的新建保险失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}