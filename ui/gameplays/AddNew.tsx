import { useState } from 'react';

import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import { usePostGameplayMutation } from 'services/game/api';
import { StaticLink } from 'shared/configs/links';
import { useSingleForm } from 'shared/hooks/useSingleForm';
import { GameplayForm } from 'ui/gameplays/form/GameplayForm';
import { SectionContainer } from 'ui/layout';

import type { FormikValues } from 'formik';
import type { Game } from 'services/game/api';

export const AddNew = () => {
  const router = useRouter();

  const [postAddNewGameplay] = usePostGameplayMutation();
  const { formValues, showErrors, handleUpdateForm, handleValidateForm } = useSingleForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const couldSave = handleValidateForm();
    if (!couldSave) return;

    setIsLoading(true);

    const payload = {
      ...formValues,
      players: formValues['players'].split(' '),
    } as Game;

    const res = await postAddNewGameplay(payload);

    if (res['error'] || !res['data']) {
      throw new Error('Add failed');
    }

    setIsLoading(false);

    router.push(StaticLink.Home);
  };

  return (
    <SectionContainer>
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-[40px] font-bold">Add New Gameplay</h1>
      </div>
      <GameplayForm showErrors={showErrors} initialValues={{} as FormikValues} onUpdate={handleUpdateForm} />

      <div className="flex justify-between items-center mt-6">
        <Button
          variant="secondary"
          onClick={() => {
            router.push(StaticLink.Home);
          }}
          disabled={isLoading}
        >
          Back
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Add New'}
        </Button>
      </div>
    </SectionContainer>
  );
};
