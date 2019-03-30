import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import InsurancePurchasingProcessSelector from './Components/InsurancePurchasingProcessSelector';
import {INSURANCE_PURCHASING_STAGE_ID, INSURANCE_PURCHASING_STAGE_ID_TO_TEXT} from '../../Constant';
import Table from 'antd/lib/table';
import ClickCopy from '../../Components/ClickCopy';
import message from 'antd/lib/message';

function InsurancePurchasingProcess(props)
{
    const {insurancePurchasingInfoList, ageRange: [minAge, maxAge], stageId, onRowClick} = props;

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: '性别',
            dataIndex: 'isMale',
            key: 'isMale',
            align: 'center',
            sorter: (a, b) => a.isMale - b.isMale,
            render: text => text === 0 ? '女' : '男',
        },
        {
            title: '健康状况',
            dataIndex: 'healthState',
            key: 'healthState',
            align: 'center',
        },
        {
            title: '公钥',
            dataIndex: 'publicKey',
            key: 'publicKey',
            className: Style.publicKey,
            align: 'center',
            render: text =>
                <ClickCopy
                    copyText={text}
                    className={Style.publicKey}
                    onCopySuccess={() =>
                    {
                        message.success('复制公钥成功');
                    }}
                    onCopyError={() =>
                    {
                        message.error('复制公钥失败');
                    }}><code>{text}</code></ClickCopy>,

        },
        {
            title: '保险类型',
            dataIndex: 'insuranceType',
            key: 'insuranceType',
            align: 'center',
            sorter: (a, b) => a.insuranceType.localeCompare(b.insuranceType),
        },
        {
            title: '投保时间',
            dataIndex: 'insurancePurchasingTime',
            key: 'insurancePurchasingTime',
            align: 'center',
        },
        {
            title: '保期',
            dataIndex: 'insurancePeriod',
            key: 'insurancePeriod',
            align: 'center',
        },
        {
            title: '投保金额',
            dataIndex: 'insurancePrice',
            key: 'insurancePrice',
            align: 'center',
            render: text => `${text} 元`,
            sorter: (a, b) => a.insurancePrice - b.insurancePrice,
        },
        {
            title: '投保阶段',
            dataIndex: 'insurancePurchasingStage',
            key: 'insurancePurchasingStage',
            align: 'center',
            render: text => INSURANCE_PURCHASING_STAGE_ID_TO_TEXT[text],
            sorter: (a, b) => a.insurancePurchasingStage - b.insurancePurchasingStage,
        },
        {
            title: '负责人',
            dataIndex: 'responsiblePersonName',
            key: 'responsiblePersonName',
            align: 'center',
        },
    ];

    const dataSource = [];
    insurancePurchasingInfoList.forEach(insurancePurchasingInfo =>
    {
        const {
            insurancePurchasingInfoId,
            name,
            age,
            isMale,
            healthState,
            publicKey,
            insuranceType,
            insurancePurchasingTime,
            insurancePeriod,
            insurancePrice,
            insurancePurchasingStage,
            responsiblePersonId,
            responsiblePersonName,
        } = insurancePurchasingInfo;

        if (age >= minAge && age <= maxAge && (insurancePurchasingStage === stageId || stageId === INSURANCE_PURCHASING_STAGE_ID.ALL_STAGES))
        {
            dataSource.push({
                key: insurancePurchasingInfoId,
                insurancePurchasingInfoId,
                name,
                age,
                isMale,
                healthState,
                publicKey,
                insuranceType,
                insurancePurchasingTime,
                insurancePeriod,
                insurancePrice,
                insurancePurchasingStage,
                responsiblePersonId,
                responsiblePersonName,
            });
        }


    });

    return (
        <div className={Style.InsurancePurchasingProcess}>
            <InsurancePurchasingProcessSelector />
            <div className={Style.tableWrapper}>
                <Table dataSource={dataSource}
                       columns={columns}
                       className={Style.processTable}
                       rowClassName={Style.row}
                       onRow={record =>
                       {
                           return {
                               onClick: () =>
                               {
                                   onRowClick(record.insurancePurchasingInfoId);
                               },
                           };
                       }}
                       pagination={{
                           hideOnSinglePage: true,
                           pageSize: 10,
                       }} />
            </div>
        </div>
    );
}

InsurancePurchasingProcess.propTypes = {
    insurancePurchasingInfoList: PropTypes.array.isRequired,
    ageRange: PropTypes.array.isRequired,
    stageId: PropTypes.oneOf(Object.values(INSURANCE_PURCHASING_STAGE_ID)).isRequired,
    onRowClick: PropTypes.func.isRequired,
};

export default InsurancePurchasingProcess;