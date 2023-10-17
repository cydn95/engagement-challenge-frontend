import { useEffect } from 'react';

import { FormInput, FormSelect } from 'components/Form';
import { useFormik } from 'formik';
import { gameNames, gameTypes } from 'shared/configs/game';
import { addNewGameSchema } from 'shared/schemas';

export interface FormValue {
  name?: string;
  date?: string;
  type?: string;
  players?: string;
  winner?: string;
  win?: boolean;
  completed?: boolean;
}

interface GameplayFormProps {
  showErrors: boolean;
  initialValues: FormValue;
  onUpdate: (values: FormValue, errors: object) => void;
}

export const GameplayForm = ({ showErrors, initialValues, onUpdate }: GameplayFormProps) => {
  const formik = useFormik({
    validationSchema: addNewGameSchema,
    initialValues,
    validateOnMount: false,
    enableReinitialize: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  useEffect(() => {
    onUpdate(formik.values, formik.errors);
  }, [formik.values, formik.errors, onUpdate]);

  return (
    <section className="w-full mt-6">
      <section className="grid grid-cols-2 gap-x-4 gap-y-6">
        <FormSelect
          options={gameNames}
          stacked
          title="Name"
          value={formik.values.name ?? ''}
          error={formik.errors.name}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('name', val)}
        />
        <FormInput
          stacked
          title="Date"
          type="date"
          value={formik.values.date ?? ''}
          error={formik.errors.date}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('date', val)}
        />
        <FormSelect
          options={gameTypes}
          stacked
          title="Type"
          value={formik.values.type ?? ''}
          error={formik.errors.type}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('type', val)}
        />
        <FormInput
          stacked
          title="Players"
          value={formik.values.players ?? ''}
          error={formik.errors.players}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('players', val)}
        />
        <FormSelect
          options={[true, false]}
          stacked
          title="Win"
          value={formik.values.win ?? false}
          error={formik.errors.win}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('win', val)}
        />
        <FormInput
          stacked
          title="Winner"
          value={formik.values.winner ?? ''}
          error={formik.errors.winner}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('winner', val)}
        />
        <FormSelect
          options={[true, false]}
          stacked
          title="Completed"
          value={formik.values.completed ?? false}
          error={formik.errors.completed}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('completed', val)}
        />
      </section>
    </section>
  );
};
