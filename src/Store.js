import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
// import 所有 Reducer
import {Reducer as InsurancePurchasingProcessReducer} from './Pages/InsurancePurchasingProcess';
import {Reducer as DirectPaymentProcessReducer} from './Pages/DirectPaymentProcess';
import {INSURANCE_PURCHASING_STAGE_ID} from './Constant';

// Store 中的初始值，根据开发需要进行改变
const initValues = {
    InsurancePurchasingProcess: {
        ageRange: [Number.MIN_VALUE, Number.MAX_VALUE],     // 筛选器年龄范围
        stageId: INSURANCE_PURCHASING_STAGE_ID.ALL_STAGES,  // 筛选器阶段
    },
    DirectPaymentProcess: {
        ageRange: [Number.MIN_VALUE, Number.MAX_VALUE],     // 筛选器年龄范围
        stageId: INSURANCE_PURCHASING_STAGE_ID.ALL_STAGES,  // 筛选器阶段
    },
};

// 所有中间件放在此处
const middleWares = [thunk];

const storeEnhancers = compose(
    applyMiddleware(...middleWares),
);

// 所有 Reducer 放在此处
const Reducer = combineReducers({
    InsurancePurchasingProcess: InsurancePurchasingProcessReducer,
    DirectPaymentProcess: DirectPaymentProcessReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);