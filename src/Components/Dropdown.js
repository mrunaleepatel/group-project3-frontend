import React from "react";
import '../styles.scss'
import './dropdown.css'

const Apps = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleItemOne = () => {
        setOpen(false);
    };

    const handleItemTwo = () => {
        setOpen(false);
    };

    return (
        <Dropdown
        open={open}
        trigger={<button onClick={handleOpen}>Add New</button>}
        menu={[
            <button onClick={handleItemOne}>Item 1</button>,
            <button onClick={handleItemTwo}>Item 2</button>,
        ]}
        />
    );
};

const Dropdown = ({ open, trigger, menu }) => {
    return (
        <div className="dropdownForm">
            {trigger}
            {open ? (
                <ul className="testMenu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className="menuItem">{menuItem}</li>
                    ))})
                </ul>
            ) : null}
        </div>
    );
};

            // {open ? (
            // <ul className="test-menu">
            //     <li className="test-item">
            //         <button onClick={handleItemOne}>Item 1</button>
            //     </li>
            //     <li className="test-item">
            //         <button onClick={handleItemTwo}>Item 2</button>
            //     </li>
            // </ul>
            // ) : null}
            {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}


export default Dropdown;