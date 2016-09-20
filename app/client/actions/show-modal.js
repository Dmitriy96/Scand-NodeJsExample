export const SHOW_MODAL = 'SHOW_MODAL';

export function showModal(modalType, surname) {
    return {
        type: SHOW_MODAL,
        modalType: modalType,
        surname: surname
    }
};