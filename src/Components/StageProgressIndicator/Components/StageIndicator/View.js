import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {View as StagePoint} from '../StagePoint';

class StageIndicator extends React.Component
{
    render()
    {
        const {hasReached} = this.props;
        return [
            <StagePoint hasReached={hasReached} key={'stagePoint'} />,
            <div className={Style.connectLineWrapper} key={'connectLineWrapper'}>
                <div className={`${Style.connectLine} ${hasReached ? Style.reached : null}`} />
            </div>,
        ];
    }
}

StageIndicator.propTypes = {
    hasReached: PropTypes.bool.isRequired,
};

export default StageIndicator;