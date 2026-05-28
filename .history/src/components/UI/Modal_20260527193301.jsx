import React, { useState } from "react";
import Nav from "../Nav";



const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Nav setIsOpen={setIsOpen} />
        {isOpen && <AuthForm setIsOpen={setIsOpen} />}
        {isOpen && <AuthFormUp setIsOpen={setIsOpen} />}
        </>
    )
}

export default Modal;