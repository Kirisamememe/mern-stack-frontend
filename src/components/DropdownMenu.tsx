import { Link } from "react-router-dom"
import * as Types from "../types"

function DropdownMenu({isOpen, menuItems}: Types.DropdownMenuType) {
    return (
        <div className={`dropdown ${isOpen ? 'show' : ''}`}>{/* trueの場合、dropdownとshow二つのスタイルが適用される */}
            <div className="menu">
                {menuItems.map((item, index) => (
                    <Link key={index} className={`menuItem ${item.className || ''}`} to={item.link}>
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DropdownMenu;
