import React from 'react';
import Style from './Style.module.scss';

function Title(props)
{
    const {children} = props;
    return (
        <div className={Style.Title}>
            {children}
        </div>
    );
}

export default Title;