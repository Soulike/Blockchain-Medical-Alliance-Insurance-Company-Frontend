import React from 'react';
import Api from '../../Api';
import NAMESPACE from '../../NAMESPACE';
import InsuranceList from './View';

class InsuranceListContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            insuranceList: [],
        };
    }

    componentDidMount()
    {
        Api.sendGetInsuranceListRequestAsync()
            .then(insuranceListWrapper =>
            {
                if (insuranceListWrapper)
                {
                    const insuranceList = insuranceListWrapper[NAMESPACE.INSURANCE_LIST.LIST.INSURANCE];
                    this.setState({
                        insuranceList,
                    });
                }
            });
    }

    render()
    {
        const {insuranceList} = this.state;
        return <InsuranceList insuranceList={insuranceList} />;
    }
}

export default InsuranceListContainer;