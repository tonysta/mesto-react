import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
    return (
        <PopupWithForm title='Новое место' name ='card' isOpen={isOpen} onOpen={onClose}>
            <label className="popup__field">
                <input
                    type="text"
                    placeholder="Название"
                    name="title"
                    className="popup__input popup__input_type_name"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span className="popup__input-error title-error"></span>
            </label>
            <label className="popup__field">
                <input
                    type="url"
                    placeholder="Ссылка на картинку"
                    name="link"
                    className="popup__input popup__input_type_link"
                    required
                />
                <span className="popup__input-error link-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;