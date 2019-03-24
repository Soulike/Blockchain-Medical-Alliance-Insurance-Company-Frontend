import React from 'react';
import Style from './Style.module.scss';
import {View as Radio} from '../../../../Components/Radio';

class InsuranceCompanyVerifyProcessor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentSelectedRadio: false,
        };
        this.yesRadioRef = React.createRef();
        this.noRadioRef = React.createRef();
    }

    componentDidMount()
    {
        this.yesRadioRef.current.checked = false;
        this.noRadioRef.current.checked = true;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const {currentSelectedRadio} = this.state;
        if (prevState.currentSelectedRadio !== currentSelectedRadio)
        {
            if (currentSelectedRadio === true)
            {
                this.yesRadioRef.current.checked = true;
                this.noRadioRef.current.checked = false;
            }
            else
            {
                this.yesRadioRef.current.checked = false;
                this.noRadioRef.current.checked = true;
            }
        }
    }

    onRadioClick = isYes =>
    {
        return () =>
        {
            this.setState({
                currentSelectedRadio: isYes,
            });
        };
    };

    render()
    {
        return (
            <div className={Style.InsuranceCompanyVerifyProcessor}>
                <div className={Style.viewMedicalRecordsButtonWrapper}>
                    <button className={`btn btn-primary btn-lg ${Style.viewMedicalRecordsButton}`}>查看病历</button>
                </div>
                <div className={Style.selectorWrapper}>
                    <h4 className={Style.selectorLabel}>审核是否通过</h4>
                    <div className={Style.radioWrapper}>
                        <Radio label={'是'} onClick={this.onRadioClick(true)} radioRef={this.yesRadioRef} />
                        <Radio label={'否'} onClick={this.onRadioClick(false)} radioRef={this.noRadioRef} />
                    </div>
                </div>
                <div className={Style.confirmButtonWrapper}>
                    <button className={`btn btn-primary ${Style.confirmButton}`}>确定</button>
                </div>
            </div>
        );
    }
}

export default InsuranceCompanyVerifyProcessor;