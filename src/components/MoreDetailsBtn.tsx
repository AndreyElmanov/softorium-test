import { NavLink } from "react-router-dom";

type MoreDetailsBtnPropsType = {
    callBack: () => void;
};

export default function MoreDetailsBtn({callBack}: MoreDetailsBtnPropsType) {
    return (
        <NavLink to='/vacancy' style={{textDecoration: 'none'}} onClick={callBack}>
            <div className='circle'>
                Подробнее
                <div className='arrow'>
                    <i className='bi bi-arrow-down-right'></i>
                </div>
            </div>
        </NavLink>
    )
}