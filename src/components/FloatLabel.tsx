import { useState } from "react"
import * as Types from "../types"

const FloatLabel = ({ onBlurFunc, className, placeholder, name, type, value, onChange }: Types.FloatLabelType) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false)
        if (onBlurFunc) {
            onBlurFunc(e)
        }
    }

    const labelClass = value || isFocused ? 'float_label active' : 'float_label'

    return (
        <div>
            <div className="input_container">
                <input
                    type={type} 
                    name={name}
                    className={className}
                    onFocus={handleFocus} 
                    onBlur={handleBlur}
                    onChange={onChange} 
                    value={value}
                />
                <label className={labelClass}>{placeholder}</label>
            </div>
        </div>
    )
}

export default FloatLabel