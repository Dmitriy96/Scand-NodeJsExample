export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS';

export function receiveAuthors(url) {
    return {
        type: RECEIVE_AUTHORS,
        baseUrl: url
    }
};