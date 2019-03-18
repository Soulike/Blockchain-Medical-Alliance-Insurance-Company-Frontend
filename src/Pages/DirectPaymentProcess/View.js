import React from 'react';
import Style from './Style.module.scss';
import {View as DirectPaymentProcessSelector} from './Components/DirectPaymentProcessSelector';

class DirectPaymentProcess extends React.Component
{
    render()
    {
        return (
            <div className={Style.DirectPaymentProcess}>
                <DirectPaymentProcessSelector />
            </div>
        );
    }
}

export default DirectPaymentProcess;