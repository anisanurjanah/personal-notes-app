import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function AddButton() {
    return (
        <div className="homepage__action">
            <div className="add-new-page__action">
                <Link to="/add-note" className='action'><FiPlus /></Link>
            </div>
        </div>
    )
}

export default AddButton;