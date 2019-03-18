import Store from '../../Store';
import {changeFilterAgeRangeAction, changeFilterInsurancePurchasingStageAction} from './Actions/Actions';
import {DIRECT_PAYMENT_STAGE_ID} from '../../Constant';

export function changeFilterAgeRange(minAge = Number.MIN_VALUE, maxAge = Number.MAX_VALUE)
{
    Store.dispatch(changeFilterAgeRangeAction(minAge, maxAge));
}

export function changeFilterInsurancePurchasingStage(stageId = DIRECT_PAYMENT_STAGE_ID.ALL_STAGES)
{
    Store.dispatch(changeFilterInsurancePurchasingStageAction(stageId));
}