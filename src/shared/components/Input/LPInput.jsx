import './LPInput.scss';

const LPInput = ({ className = '', id, type = 'text', value, onChange, placeholder, ...rest }) => {
    return (
        <input
            className={`lp-input ${className}`}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
        />
    );
};

export default LPInput;