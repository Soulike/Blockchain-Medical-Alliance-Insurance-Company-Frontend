import Function from '../../Function';

export function insurancePublicationPrefix(url)
{
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/insurancePublication/${url}`);
}