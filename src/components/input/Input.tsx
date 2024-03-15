import { FC } from 'react';
import { Field, FieldAttributes } from 'formik';
import './input.scss';
import cn from 'classnames';

const InputRender: FC<FieldAttributes<any>> = (props) => {
  const { field } = props;
  const isFilled = field.value && 'filled';

  return (
    <label className={cn(props.className, 'input-wrap', isFilled)}>
      <input {...field} />
      <div className="input-wrap__placeholder">{props.placeholder}</div>
    </label>
  );
};

const Input: FC<FieldAttributes<any>> = (props) => {
  return <Field component={InputRender} {...props} />;
};

export default Input;
