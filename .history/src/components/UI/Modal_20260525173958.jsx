import React, { useState } from "react";
import Nav from "../Nav";
import AuthForm from "../../AuthForm";
import 


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Nav setIsOpen={setIsOpen} />
        {isOpen && <AuthForm setIsOpen={setIsOpen} />}
        </>
    )
}

export default Modal;