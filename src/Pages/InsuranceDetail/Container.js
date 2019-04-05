import React from 'react';
import InsuranceDetail from './View';
import leftImage from '../../Static/InsuranceDetail/leftImage.png';

class InsuranceDetailContainer extends React.Component
{
    render()
    {
        return (
            <InsuranceDetail insuranceImageSrc={leftImage} />
        );
    }
}

export default InsuranceDetailContainer;