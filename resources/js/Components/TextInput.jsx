import React, { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default forwardRef(function TextInput(
    {
        type = "text",
        name,
        value,
        defaultValue,
        className = "",
        variant = "primary",
        autoComplete,
        required,
        isFocused = false,
        isError,
        placeholder,
        ...props
    },
    ref
) {
    TextInput.propTypes = {
        type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
        autoComplete: PropTypes.string,
        required: PropTypes.bool,
        isFocused: PropTypes.bool,
        isError: PropTypes.bool,
        placeholder: PropTypes.string,
    };

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={`rounded-md dark:bg-[#212121] bg-slate-300  py-[13px] w-full focus:border-blue-400 ${
                isError && "input-error"
            } input-${variant} ${className}`}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            placeholder={placeholder}
        />
    );
});
