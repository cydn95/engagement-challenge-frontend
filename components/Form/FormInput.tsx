import classNames from 'classnames';
import style from 'components/Form/Form.module.css';
import { TextInput } from 'components/TextInput';

import type { FormControlWrapperProps } from 'components/Form/types';

interface FormInputProps extends FormControlWrapperProps {
  type?: 'text' | 'password' | 'date';
}

export const FormInput = ({
  type = 'text',
  title,
  show = true,
  stacked,
  showErrors = false,
  error,
  className,
  value,
  onChange,
  required,
}: FormInputProps) => {
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
        <TextInput type={type} value={value.toString()} onChange={onChange} fullWidth className={style.input} />
      </div>
      {showErrors && <div className={style.error}>{error}</div>}
    </section>
  );
};
