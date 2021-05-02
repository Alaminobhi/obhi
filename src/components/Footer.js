import React from 'react';

const Footer = () => {
    return (
        <div className="mt-3">
            <div className="mb-2 m-3">
                <a href="mailto:alaminobhi2@gmail.com">alaminobhi2@gmail.com</a><br />
                            01744891919 <a href="tel:+8801744891919"> Calling...</a>
            </div>

            <div className="bg-secondary text-center">
                <p>Copyright {(new Date()).getFullYear()} Al-Amin Obhi</p>
            </div>
        </div>

    );
};

export default Footer;