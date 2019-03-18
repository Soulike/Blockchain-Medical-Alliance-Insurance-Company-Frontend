import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
// import 所有 Reducer
import {Reducer as InsurancePurchasingProcessReducer} from './Pages/InsurancePurchasingProcess';
import {INSURANCE_PURCHASING_STATE_ID} from './Constant';

// Store 中的初始值，根据开发需要进行改变
const initValues = {
    InsurancePurchasingProcess: {
        ageRange: [Number.MIN_VALUE, Number.MAX_VALUE],
        stageId: INSURANCE_PURCHASING_STATE_ID.ALL_STAGES,
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
});

export default createStore(Reducer, initValues, storeEnhancers);