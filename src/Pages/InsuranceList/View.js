import React from 'react';
import Style from './Style.module.scss';
import {View as CarouselContainer} from '../../ComponentContainers/CarouselContainer';

class InsuranceList extends React.Component
{
    render()
    {
        return (
            <div className={Style.InsuranceList}>
                <CarouselContainer shouldShowInsurancePublicationButton={true} className={Style.carousel} />
            </div>
        );
    }
}

export default InsuranceList;