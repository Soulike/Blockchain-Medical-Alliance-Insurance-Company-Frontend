import PAGE_ID_TO_ROUTE from './PAGE_ID_TO_ROUTE';

// 由路由反向得到 PAGE ID，动态生成
export const ROUTE_TO_PAGE_ID = {};
Object.keys(PAGE_ID_TO_ROUTE).forEach(PAGE_ID =>
{
    ROUTE_TO_PAGE_ID[PAGE_ID_TO_ROUTE[PAGE_ID]] = parseInt(PAGE_ID, 10);
});

export default ROUTE_TO_PAGE_ID;