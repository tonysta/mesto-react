import React from 'react';

function PopupWithForm({name, title, children}) {
    return(
        <div className={`popup popup_section_${name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close-btn"></button>
                <form name={name} className="popup__form popup__form_type_profile" noValidate>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button type="submit" className="popup__submit">Сохранить</button>
                </form>
            </div>
        </div>
    )
}
export default PopupWithForm;