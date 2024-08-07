import './Input.css'

// eslint-disable-next-line react/prop-types
export default function Textarea({ label, id, ...props }) {
    return (
      <p className="control">
        <label htmlFor={id}>{label}</label>
        <textarea id={id} name={id} required {...props} />
      </p>
    );
  }