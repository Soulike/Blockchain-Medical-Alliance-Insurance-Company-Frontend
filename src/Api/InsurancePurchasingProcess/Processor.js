import Function from '../../Function';
import {STATUS_CODE} from '../../Constant';
import {GET_INSURANCE_PURCHASING_INFO_LIST} from './ROUTE';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';

export async function sendGetInsurancePurchasingInfoListRequest()
{
    try
    {
        const {code, data} = await Function.getAsync(GET_INSURANCE_PURCHASING_INFO_LIST, false);

        switch (code)
        {
            case STATUS_CODE.OK:
            {
                return data;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                return null;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                return null;
            }
            default:
            {
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        return null;
    }
}