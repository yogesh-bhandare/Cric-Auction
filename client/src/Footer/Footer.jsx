import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#262626] py-8">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div>
                    <p className="text-white">Contact me:</p>
                    <div className="flex mt-2 space-x-4">
                        <a href="https://github.com/yogesh-bhandare" target="_blank" rel="noopener noreferrer" className="text-[#BFF207] hover:underline">GitHub</a>
                        <a href="https://www.linkedin.com/in/yogesh-bhandare/" target="_blank" rel="noopener noreferrer" className="text-[#BFF207] hover:underline">LinkedIn</a>
                        <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer" className="text-[#BFF207] hover:underline">Twitter</a>
                    </div>
                </div>
                <div>
                    <p className="text-white">Personal website:</p>
                    <a href="https://x.com/yogeshbhandare_" target="_blank" rel="noopener noreferrer" className="text-[#BFF207] hover:underline">x.com/yogeshbhandare_</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
