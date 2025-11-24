import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPlus, FiCheck } from 'react-icons/fi';

function AddButton() {
    const location = useLocation();

    const isHome = location.pathname === "/";
    const isAddPage = location.pathname === "/new-note";

    return (
        <div className="homepage__action">
            <div className="add-new-page__action">
                {isHome && (<Link to="/new-note" className="action"><FiPlus /></Link>)}
                {isAddPage && (<button type="submit" form="note-form" className="action"><FiCheck /></button>)}
            </div>
        </div>
    );
}

export default AddButton;