export const SHOW_MODAL = 'SHOW_MODAL';

export function showModal(modalType, id) {
    return {
        type: SHOW_MODAL,
        modalType: modalType,
        id: id
    }
};