import { useSelector } from "react-redux";
import { CustomerForm } from "./orderForms/CustomerForm/CustomerForm";
import { FinalForm } from "./orderForms/FinalForm/FinalForm";
import { PriceForm } from "./orderForms/PriceForm/PriceForm";
import { TotalForm } from "./orderForms/TotalForm/TotalForm";
import { modalSelector } from "../selectors/modalSelector"


export function Container () {
    const visible = useSelector(modalSelector)

    return (
        <div className='container'>
        {visible.priceForm ? (<PriceForm />) : null}
        {visible.customerForm ? (<CustomerForm />) : null}
        {visible.totalForm ? (<TotalForm />) : null}
        {visible.finalForm ? (<FinalForm />) : null}
        </div>
)
}