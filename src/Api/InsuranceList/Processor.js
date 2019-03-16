import Function from '../../Function';
import {GET_INSURANCE_LIST} from './Route';
import {STATUS_CODE} from '../../Config';

export default {
    sendGetInsuranceListRequestAsync,
};

async function sendGetInsuranceListRequestAsync()
{
    try
    {
        const {code, data} = await Function.getAsync(GET_INSURANCE_LIST, false);
        switch (code)
        {
            case STATUS_CODE.SUCCESS:
            {
                return data;
            }
            case STATUS_CODE.CONTENT_NOT_FOUND:
            {
                return null;
            }
            case STATUS_CODE.WRONG_PARAMETER:
            {
                return null;
            }
            case STATUS_CODE.REJECTION:
            {
                return null;
            }
            case STATUS_CODE.INVALID_SESSION:
            {
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