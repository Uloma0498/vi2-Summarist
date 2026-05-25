import React, { useState } from "react";
import Nav from "../Nav";


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <Nav setIsOpen={setIsOpen} />
        {isOpen && <AuthForm set}
        </>
    )
}

export default Modal;