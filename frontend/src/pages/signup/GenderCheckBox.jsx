const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex justify-center gap-x-10 mt-2">
      <div className="form-control">
        <label
          htmlFor="male"
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-info border-2 border-white/40"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          htmlFor="female"
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-info border-2 border-white/40"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
