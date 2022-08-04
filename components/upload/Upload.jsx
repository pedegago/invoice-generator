import style from "./upload.module.scss";

function Upload({ children, className, ...props }) {
    return (
        <label className={`${style.upload} ${className ?? ""}`}>
            <span>Drag & drop a logo file or click to upload</span>
            <input type="file" accept="image/*" {...props} />
        </label>
    );
}

export default Upload;
