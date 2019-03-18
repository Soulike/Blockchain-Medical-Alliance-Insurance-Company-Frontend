import React from 'react';
import Style from './Style.module.scss';
import {Object as SelectorObject, View as Selector} from '../../../../Components/Selector';
import {changeFilterAgeRange, changeFilterInsurancePurchasingStage} from '../../Function';
import {INSURANCE_PURCHASING_STATE_ID, INSURANCE_PURCHASING_STATE_ID_TO_TEXT} from '../../../../Constant';
import {connect} from 'react-redux';

class InsurancePurchasingProcessSelector extends React.Component
{

    render()
    {
        const {ageRange: [minAge, maxAge], stageId: currentActiveStageId} = this.props;
        const {Series, Item} = SelectorObject;
        const seriesArray = [
            new Series('年龄', [
                new Item('全部', () =>
                {
                    changeFilterAgeRange();
                }, minAge === Number.MIN_VALUE && maxAge === Number.MAX_VALUE),
                new Item('1-20 岁', () =>
                {
                    changeFilterAgeRange(1, 20);
                }, minAge === 1 && maxAge === 20),
                new Item('21-50 岁', () =>
                {
                    changeFilterAgeRange(21, 50);
                }, minAge === 21 && maxAge === 50),
                new Item('51-80 岁', () =>
                {
                    changeFilterAgeRange(51, 80);
                }, minAge === 51 && maxAge === 80),
                new Item('81 岁及以上', () =>
                {
                    changeFilterAgeRange(81);
                }, minAge === 81 && maxAge === Number.MAX_VALUE),
            ]),
            new Series('状态', /*[
                new Item('全部', () =>
                {
                    changeFilterInsurancePurchasingStage();
                }, stageId === INSURANCE_PURCHASING_STATE_ID.ALL_STAGES),
                new Item('申请', () =>
                {
                    changeFilterInsurancePurchasingStage(INSURANCE_PURCHASING_STATE_ID.APPLICATION);
                }, stageId === INSURANCE_PURCHASING_STATE_ID.APPLICATION),
                new Item('审核', () =>
                {
                    changeFilterInsurancePurchasingStage(INSURANCE_PURCHASING_STATE_ID.INSURANCE_COMPANY_VERIFY);
                }, stageId === INSURANCE_PURCHASING_STATE_ID.INSURANCE_COMPANY_VERIFY),
                new Item('缴费', () =>
                {
                    changeFilterInsurancePurchasingStage(INSURANCE_PURCHASING_STATE_ID.PAY);
                }, stageId === INSURANCE_PURCHASING_STATE_ID.PAY),
                new Item('完成', () =>
                {
                    changeFilterInsurancePurchasingStage(INSURANCE_PURCHASING_STATE_ID.COMPLETE);
                }, stageId === INSURANCE_PURCHASING_STATE_ID.COMPLETE),
            ]*/
                Object.values(INSURANCE_PURCHASING_STATE_ID).map(stageId => new Item(INSURANCE_PURCHASING_STATE_ID_TO_TEXT[stageId],
                    () =>
                    {
                        changeFilterInsurancePurchasingStage(stageId);
                    }, currentActiveStageId === stageId),
                )),
        ];
        return <Selector className={Style.InsurancePurchasingProcessSelector} seriesArray={seriesArray} />;
    }
}

const mapStateToProps = state =>
{
    const {InsurancePurchasingProcess: {ageRange, stageId}} = state;
    return {
        ageRange,
        stageId,
    };
};

export default connect(mapStateToProps)(InsurancePurchasingProcessSelector);