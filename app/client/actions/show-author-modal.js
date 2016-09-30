export const SHOW_AUTHOR_MODAL = 'SHOW_AUTHOR_MODAL';

export function showAuthorModal(modalType, id) {
    return {
        type: SHOW_AUTHOR_MODAL,
        modalType: modalType,
        id: id
    }
};