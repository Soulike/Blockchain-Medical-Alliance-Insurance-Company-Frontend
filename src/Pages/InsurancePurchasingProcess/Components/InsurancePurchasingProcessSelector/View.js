import React from 'react';
import Style from './Style.module.scss';
import {Object as SelectorObject, View as Selector} from '../../../../Components/Selector';
import {changeFilterAgeRange, changeFilterInsurancePurchasingStage} from '../../Function';
import {STAGE_ID} from '../../../../Constant';
import {connect} from 'react-redux';

class InsurancePurchasingProcessSelector extends React.Component
{

    render()
    {
        const {ageRange: [minAge, maxAge], stageId} = this.props;
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
            new Series('状态', [
                new Item('全部', () =>
                {
                    changeFilterInsurancePurchasingStage();
                }, stageId === STAGE_ID.ALL_STAGES),
                new Item('申请', () =>
                {
                    changeFilterInsurancePurchasingStage(STAGE_ID.APPLICATION);
                }, stageId === STAGE_ID.APPLICATION),
                new Item('审核', () =>
                {
                    changeFilterInsurancePurchasingStage(STAGE_ID.VERIFY);
                }, stageId === STAGE_ID.VERIFY),
                new Item('缴费', () =>
                {
                    changeFilterInsurancePurchasingStage(STAGE_ID.PAY);
                }, stageId === STAGE_ID.PAY),
                new Item('完成', () =>
                {
                    changeFilterInsurancePurchasingStage(STAGE_ID.COMPLETE);
                }, stageId === STAGE_ID.COMPLETE),
            ]),
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