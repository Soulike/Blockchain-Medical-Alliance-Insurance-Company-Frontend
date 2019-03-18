import React from 'react';
import Style from './Style.module.scss';
import {Object as SelectorObject, View as Selector} from '../../../../Components/Selector';
import {DIRECT_PAYMENT_STAGE_ID, DIRECT_PAYMENT_STAGE_ID_TO_TEXT} from '../../../../Constant';

class DirectPaymentProcessSelector extends React.Component
{
    render()
    {
        const {Series, Item} = SelectorObject;
        const seriesArray = [
            new Series('年龄', [
                new Item('全部', () => null),
                new Item('1-20 岁', () => null),
                new Item('21-50 岁', () => null),
                new Item('51-80 岁', () => null),
                new Item('81 岁及以上', () => null),
            ]),
            new Series('状态', Object.values(DIRECT_PAYMENT_STAGE_ID).map(stageId => new Item(DIRECT_PAYMENT_STAGE_ID_TO_TEXT[stageId], () => null))),
        ];
        return (<Selector seriesArray={seriesArray} className={Style.DirectPaymentProcessSelector} />);
    }
}

export default DirectPaymentProcessSelector;