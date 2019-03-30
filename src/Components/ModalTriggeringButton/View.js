import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Style from './Style.module.scss';
import Button from 'antd/lib/button';

class ModalTriggerButton extends Component
{
    render()
    {
        const {children, modalId, className} = this.props;
        return (
            <Button htmlType={'button'} className={`${Style.ModalTriggeringButton} ${className}`}
                    data-toggle="modal"
                    data-target={`#${modalId}`}>
                {children}
            </Button>
        );
    }
}

ModalTriggerButton.propTypes = {
    modalId: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default ModalTriggerButton;