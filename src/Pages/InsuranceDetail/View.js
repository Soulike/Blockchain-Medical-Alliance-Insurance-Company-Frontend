import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import Card from '../../Components/Card';
import Icon from 'antd/lib/icon';
import Radio from 'antd/lib/radio';

function InsuranceDetail(props)
{
    const {insuranceImageSrc, insuranceName} = props;
    return (
        <div className={Style.InsuranceDetail}>
            <Card className={Style.insuranceDetailContainer}>
                <div className={Style.imageWrapper}>
                    <img src={insuranceImageSrc} alt="insuranceImage" className={Style.image} />
                </div>
                <div className={Style.infoWrapper}>
                    <div className={Style.info}>
                        <div className={Style.insuranceNameWrapper}>
                            <div className={Style.insuranceName}>
                                <span className={Style.icon}>
                                    <Icon type="heart" theme="twoTone" twoToneColor={'#F00'} />
                                </span>
                                {insuranceName}
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>特需医疗</div>
                            <div className={Style.itemContent}>
                                <Radio.Group defaultValue={false} disabled={true}>
                                    <Radio value={true}>包含</Radio>
                                    <Radio value={false}>不包含</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>有无社保</div>
                            <div className={Style.itemContent}>
                                <Radio.Group defaultValue={false} disabled={true}>
                                    <Radio value={true}>有</Radio>
                                    <Radio value={false}>无</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>保额</div>
                            <div className={Style.itemContent}>
                                100 万
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>保障期限</div>
                            <div className={Style.itemContent}>
                                1 年
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>保险病种</div>
                            <div className={Style.itemContent}>
                                X 种常见疾病 Y 种重大疾病
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>承包年龄</div>
                            <div className={Style.itemContent}>
                                出生满 90 天至 60 周岁人群
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>销售区域</div>
                            <div className={Style.itemContent}>
                                全国
                            </div>
                        </div>
                        <div className={Style.itemWrapper}>
                            <div className={Style.label}>保费价格</div>
                            <div className={Style.itemContent}>
                                ￥ <span className={Style.insurancePrice}>96/人</span>
                            </div>
                        </div>
                        <div className={Style.buttonWrapper} />
                    </div>
                </div>
            </Card>
        </div>
    );
}

InsuranceDetail.propTypes = {
    insuranceImageSrc: PropTypes.string.isRequired,
    insuranceName: PropTypes.string.isRequired,
};

InsuranceDetail.defaultProps = {
    insuranceName: '保险名称',
};

export default InsuranceDetail;