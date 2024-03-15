import { FC } from 'react';
import { Formik, Form } from 'formik';
import Input from '../input/Input';
import './mainForm.scss';

const MainForm: FC = () => {
  return (
    <div className="main-form">
      <h2>Контент таба 2</h2>
      <Formik
        initialValues={{ first: '', second: '', third: '' }}
        onSubmit={(values) => console.log(values)}>
        <Form>
          <Input placeholder="Имя*" name="first" className="main-form__field" />
          <Input placeholder="Имя*" name="second" className="main-form__field" />
          <Input placeholder="Имя*" name="third" className="main-form__field" />
        </Form>
      </Formik>
    </div>
  );
};

export default MainForm;
