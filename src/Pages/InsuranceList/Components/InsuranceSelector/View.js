import React from 'react';
import Style from './Style.module.scss';
import {Object as SelectorObject, View as Selector} from '../../../../Components/Selector';

class InsuranceSelector extends React.Component
{
    render()
    {
        const {Series, Item} = SelectorObject;
        const seriesArray = [
            new Series('来源', [
                new Item('全部', () => null, true),
                new Item('中国人寿', () => null),
                new Item('泰康人寿', () => null),
                new Item('太平洋保险', () => null),
            ]),
            new Series('分类', [
                new Item('全部', () => null, true),
                new Item('少年', () => null),
                new Item('中年', () => null),
                new Item('老年', () => null),
            ]),
        ];

        return (
            <Selector seriesArray={seriesArray} className={Style.InsuranceSelector} />
        );
    }
}

export default InsuranceSelector;