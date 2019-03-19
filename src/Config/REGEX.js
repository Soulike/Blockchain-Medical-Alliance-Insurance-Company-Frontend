export const REGEX = {
    USERNAME: /^\w{5,20}$/,
    PASSWORD: /^\w{10,}$/,
    AGE: /^\d+$/,
    EMAIL: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
};

export const REGEX_TEXT = {
    USERNAME: '5~20位的字母、数字或下划线',
    PASSWORD: '10位以上的字母、数字或下划线',
};