import React from "react";

function ImagePopup() {
    return (
        <div className="popup viewer">
            <div className="viewer__container">
                <button
                    type="button"
                    className="viewer__close-btn popup__close-btn"
                ></button>
                <img src="src/components/App#" alt="" className="viewer__img"/>
                <h2 className="viewer__title"></h2>
            </div>
        </div>
    )
}

export default ImagePopup;