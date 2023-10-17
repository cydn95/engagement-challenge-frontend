import { mockGameplays } from 'shared/mocks/games';
import { screen, render } from 'test.utils';
import { Gameplays } from 'ui/gameplays/list/Gameplays';

describe('Gameplay List', () => {
  test('Should show no gameplays content', () => {
    render(<Gameplays gameplays={[]} isLoading={false} />);

    expect(
      screen.getByText("Sorry, we couldn't find anything that related to your search. Please try again."),
    ).toBeInTheDocument();
  });

  test('Should show loading', () => {
    render(<Gameplays gameplays={[]} isLoading />);

    expect(screen.queryByTestId('loading')).toBeInTheDocument();
  });

  test('Should show gameplays', async () => {
    render(<Gameplays gameplays={mockGameplays} isLoading={false} />);

    expect(screen.getByText(mockGameplays[0].id)).toBeInTheDocument();
  });
});
