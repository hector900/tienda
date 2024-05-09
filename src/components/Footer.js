import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer mt-6">
            <div className="content has-text-centered">
                <p>© {year} Tienda</p>
            </div>
        </footer>
    );
}

export default Footer;
