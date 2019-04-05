import React from 'react';
import InsurancePublication from './View';
import {browserHistory} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config/ROUTE';
import Api from '../../Api';
import {REGEX} from '../../Config';
import message from 'antd/lib/message';

class InsurancePublicationContainer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isSpecialMedicalCare: 0,
            hasSocialSecurity: 0,
        };

        this.insuranceNameInputRef = React.createRef();
        this.insuranceAmountInputRef = React.createRef();
        this.insurancePeriodInputRef = React.createRef();
        this.insuranceDiseaseTypeInputRef = React.createRef();
        this.coveringAgeInputRef = React.createRef();
        this.salesAreaInputRef = React.createRef();
        this.insurancePriceInputRef = React.createRef();
    }

    onIsSpecialMedicalCareRadioChange = e =>
    {
        this.setState({
            isSpecialMedicalCare: e.target.value ? 1 : 0,
        });
    };

    onHasSocialSecurityRadioChange = e =>
    {
        this.setState({
            hasSocialSecurity: e.target.value ? 1 : 0,
        });
    };

    onSubmit = async () =>
    {
        const insuranceName = this.insuranceNameInputRef.current.input.value;
        const insuranceAmount = this.insuranceAmountInputRef.current.input.value;
        const insurancePeriod = this.insurancePeriodInputRef.current.input.value;
        const insuranceDiseaseType = this.insuranceDiseaseTypeInputRef.current.input.value;
        const coveringAge = this.coveringAgeInputRef.current.input.value;
        const salesArea = this.salesAreaInputRef.current.input.value;
        const insurancePrice = this.insurancePriceInputRef.current.input.value;
        const {isSpecialMedicalCare, hasSocialSecurity} = this.state;

        if (!REGEX.INSURANCE_NAME.test(insuranceName))
        {
            message.warning('保险名称不合法');
        }
        else if (!REGEX.INSURANCE_AMOUNT.test(insuranceAmount))
        {
            message.warning('保额不合法');
        }
        else if (!REGEX.INSURANCE_PERIOD.test(insurancePeriod))
        {
            message.warning('保险期限不合法');
        }
        else if (!REGEX.INSURANCE_DISEASE_TYPE.test(insuranceDiseaseType))
        {
            message.warning('保险病种不合法');
        }
        else if (!REGEX.COVERING_AGE.test(coveringAge))
        {
            message.warning('承保年龄不合法');
        }
        else if (!REGEX.SALES_AREA.test(salesArea))
        {
            message.warning('销售区域不合法');
        }
        else if (!REGEX.INSURANCE_PRICE.test(insurancePrice))
        {
            message.warning('保费价格不合法');
        }
        else
        {
            const requestIsSuccessful = await Api.sendPostSubmitNewInsuranceRequestAsync(
                insuranceName,
                isSpecialMedicalCare,
                hasSocialSecurity,
                Number.parseFloat(insuranceAmount),
                insurancePeriod,
                insuranceDiseaseType,
                coveringAge,
                salesArea,
                Number.parseFloat(insurancePrice),
            );
            if (requestIsSuccessful)
            {
                browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]);
            }
        }
    };

    onCancel = () =>
    {
        browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_LIST]);
    };

    render()
    {
        return (
            <InsurancePublication insuranceNameInputRef={this.insuranceNameInputRef}
                                  onIsSpecialMedicalCareRadioChange={this.onIsSpecialMedicalCareRadioChange}
                                  onHasSocialSecurityRadioChange={this.onHasSocialSecurityRadioChange}
                                  insuranceAmountInputRef={this.insuranceAmountInputRef}
                                  insurancePeriodInputRef={this.insurancePeriodInputRef}
                                  insuranceDiseaseTypeInputRef={this.insuranceDiseaseTypeInputRef}
                                  coveringAgeInputRef={this.coveringAgeInputRef}
                                  salesAreaInputRef={this.salesAreaInputRef}
                                  insurancePriceInputRef={this.insurancePriceInputRef}
                                  onSubmit={this.onSubmit}
                                  onCancel={this.onCancel} />
        );
    }
}

export default InsurancePublicationContainer;