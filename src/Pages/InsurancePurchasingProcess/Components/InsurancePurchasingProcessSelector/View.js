import React from 'react';
import Style from './Style.module.scss';
import {Object as SelectorObject, View as Selector} from '../../../../Components/Selector';

class InsurancePurchasingProcessSelector extends React.Component
{
    render()
    {
        const {Series, Item} = SelectorObject;
        const seriesArray = [
            new Series('年龄', [
                new Item('全部', () => null, true),
                new Item('1-20 岁', () => null),
                new Item('21-50 岁', () => null),
                new Item('51-80 岁', () => null),
                new Item('80 岁以上', () => null),
            ]),
            new Series('状态', [
                new Item('全部', () => null, true),
                new Item('申请', () => null),
                new Item('审核', () => null),
                new Item('缴费', () => null),
                new Item('完成', () => null),
            ]),
        ];
        return <Selector className={Style.InsurancePurchasingProcessSelector} seriesArray={seriesArray} />;
    }
}

export default InsurancePurchasingProcessSelector;