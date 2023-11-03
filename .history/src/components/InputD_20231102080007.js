import "../App.css"

const InputD = ({ handleChange, value, title, name, color }) => {
    return (
        <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value={value} name={name} />
            <span className="checkmark" style={{ backgroundColor: "color" }}></span>
            <p>{title}</p>
        </label>
    );
};

export default InputD;
