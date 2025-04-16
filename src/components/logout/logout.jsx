import React, { useContext, useEffect } from 'react';
import { MoviesContext } from "../../context/MoviesContext";

const Logout = () => {
    const { handlLogout } = useContext(MoviesContext);

    useEffect(() => {
        handlLogout();
    }, []);

    return (
        <div>Logging out...</div>
    );
};

export default Logout;
