'use client';

interface BaseProps {
  name: string;
  label: string;
  className?: string;
}

interface InputFieldProps extends BaseProps {
  as?: 'input';
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
}

interface TextareaFieldProps extends BaseProps {
  as: 'textarea';
  rows?: number;
  placeholder?: string;
}

interface SelectFieldProps extends BaseProps {
  as: 'select';
  options: ReadonlyArray<string>;
  placeholderOption?: string;
}

export type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-muted';
const CONTROL_BASE =
  'border border-divider px-4 py-3 text-base text-foreground focus:outline-none focus:border-foreground/40 transition-colors';
const CONTROL_INPUT = `${CONTROL_BASE} placeholder:text-muted/50 bg-transparent`;
const CONTROL_TEXTAREA = `${CONTROL_INPUT} resize-none`;
const CONTROL_SELECT = `${CONTROL_BASE} bg-background appearance-none cursor-pointer`;

export default function FormField(props: FormFieldProps) {
  const { name, label, className = '' } = props;

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <label htmlFor={name} className={LABEL_CLASSES}>
        {label}
      </label>
      {renderControl(props)}
    </div>
  );
}

function renderControl(props: FormFieldProps) {
  const { name } = props;

  if (props.as === 'textarea') {
    return (
      <textarea
        id={name}
        name={name}
        rows={props.rows ?? 5}
        placeholder={props.placeholder}
        className={CONTROL_TEXTAREA}
      />
    );
  }

  if (props.as === 'select') {
    return (
      <select id={name} name={name} className={CONTROL_SELECT} defaultValue="">
        <option value="" disabled>
          {props.placeholderOption ?? 'Select an option...'}
        </option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      id={name}
      name={name}
      type={props.type ?? 'text'}
      placeholder={props.placeholder}
      className={CONTROL_INPUT}
    />
  );
}
