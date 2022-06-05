import React from 'react';
let date = new Date();
const year = date.getFullYear();

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__copyright">&#169; {year} Mesto Russia</p>
        </footer>
    )
}

export default Footer;