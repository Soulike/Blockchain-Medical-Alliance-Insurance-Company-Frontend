import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {Modal} from '../../../../Components/Modal';
import {MODAL_ID} from '../../../../Constant';

function MedicalDescriptionModal(props)
{
    const {medicalDescription} = props;
    return (
        <Modal id={MODAL_ID.MEDICAL_DESCRIPTION_MODAL} title={'医疗说明'} className={Style.MedicalDescriptionModal}>
            {medicalDescription}
        </Modal>
    );
}

MedicalDescriptionModal.propTypes = {
    medicalDescription: PropTypes.string.isRequired,
};

export default MedicalDescriptionModal;