import React from "react";
import '../styles.scss'

const Dropdown = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            <button onClick={handleOpen}>Add New</button>
            {open ? (
            <ul className="test-menu">
                <li className="test-item">
                    <button>Item 1</button>
                </li>
                <li className="test-item">
                    <button>Item 2</button>
                </li>
            </ul>
            ) : null}
            {open ? <div>Is Open</div> : <div>Is Closed</div>}
        </div>
    );
};

export default Dropdown;