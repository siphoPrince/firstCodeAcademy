import React from "react";
import "../Footer.css"; // Import the CSS file for styling

function Footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    {/* About Me Section */}
                    <div className="footer-section about">
                        <h3>About Me</h3>
                        <p>
                            Hi! I'm a passionate developer focused on creating innovative solutions
                            and i enjoy teaching and creating opportunities for others.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-section contact">
                        <h3>Contact</h3>
                        <p>Email: mabirimisesipho@gmail.com</p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/sipho-mabirimise-27ba1a226/" target="_blank" rel="noopener noreferrer">Click here</a></p>
                    </div>

                    {/* Copyright and Additional Info */}
                    <div className="footer-section copyright">
                        <p>Created 2025&copy; | All rights reserved</p>
                        <p>
                            Built with <span className="heart">❤️</span> by Sipho Mabirimise.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
