import classNames from 'classnames';
import style from 'components/Form/Form.module.css';
import stringTool from 'shared/tools/stringTool';

import type { FormControlWrapperProps } from 'components/Form/types';

interface FormSelectProps extends FormControlWrapperProps {
  options: (string | number | boolean)[];
}

export const FormSelect = ({
  options,
  title,
  show = true,
  stacked,
  showErrors = false,
  error,
  className,
  value,
  onChange,
  required,
}: FormSelectProps) => {
  if (!show) return null;

  return (
    <section className={classNames(style.container, className)}>
      <div className={classNames(style.inputWrapper, { [style.stacked]: stacked })}>
        {title && (
          <label className={style.title}>
            {title}
            {required && <span className={style.required}>*</span>}
          </label>
        )}
        <select value={value.toString()} onChange={(e) => onChange?.(e.target.value)} className={style.select}>
          <option value="" disabled>
            -Select-
          </option>
          {options.map((item) => (
            <option key={`option-${item}`} value={item.toString()}>
              {stringTool.captalize(item.toString())}
            </option>
          ))}
        </select>
      </div>
      {showErrors && <div className={style.error}>{error}</div>}
    </section>
  );
};
