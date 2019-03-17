import Store from '../../Store';
import {changeFilterAgeRangeAction, changeFilterInsurancePurchasingStageAction} from './Actions/Actions';
import {STAGE_ID} from '../../Constant';

export function changeFilterAgeRange(minAge = Number.MIN_VALUE, maxAge = Number.MAX_VALUE)
{
    Store.dispatch(changeFilterAgeRangeAction(minAge, maxAge));
}

export function changeFilterInsurancePurchasingStage(stageId = STAGE_ID.ALL_STAGES)
{
    Store.dispatch(changeFilterInsurancePurchasingStageAction(stageId));
}