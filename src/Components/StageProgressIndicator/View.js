import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {View as StageIndicator} from './Components/StageIndicator';
import {View as StagePoint} from './Components/StagePoint';

class StageProgressIndicator extends React.Component
{
    render()
    {
        let {currentStageNumber, maxStageNumber} = this.props;
        if (maxStageNumber < currentStageNumber)
        {
            maxStageNumber = currentStageNumber;
        }
        return (
            <div className={Style.StageProgressIndicator}>
                {
                    (() =>
                    {
                        const nodeArray = [];
                        if (currentStageNumber === maxStageNumber)
                        {
                            for (let i = 0; i <= maxStageNumber - 1; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={true} />);
                            }
                            nodeArray.push(<StagePoint hasReached={true} />);
                        }
                        else
                        {
                            for (let i = 0; i <= currentStageNumber; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={true} />);
                            }
                            for (let i = currentStageNumber + 1; i <= maxStageNumber - 1; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={false} />);
                            }
                            nodeArray.push(<StagePoint hasReached={false} />);
                        }
                        return nodeArray;
                    })()
                }
            </div>
        );
    }
}

StageProgressIndicator.propTypes = {
    currentStageNumber: PropTypes.number.isRequired,        // 从 0 开始数，当前状态的编号
    maxStageNumber: PropTypes.number.isRequired,            // 从 0 开始数，最后状态的编号
};

export default StageProgressIndicator;