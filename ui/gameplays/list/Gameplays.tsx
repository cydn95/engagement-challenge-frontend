import { LoadingIcon } from 'components/LoadingIcon';
import { NoGameplays } from 'ui/gameplays/list/NoGameplays';

import type { Game } from 'services/game/api';

interface GameplaysProps {
  gameplays: Game[];
  isLoading?: boolean;
}
export const Gameplays = ({ gameplays, isLoading }: GameplaysProps) => {
  if (isLoading)
    return (
      <div className="" data-testid="loading">
        <LoadingIcon width="100px" height="100px" />
      </div>
    );

  if (gameplays.length === 0) return <NoGameplays />;

  return (
    <div className="mt-4 h-[280px]">
      <table width="100%" className="w-full" cellSpacing={3}>
        <thead>
          <tr>
            <th className="border-b">ID</th>
            <th className="border-b">name</th>
            <th className="border-b">Date</th>
            <th className="border-b">Type</th>
            <th className="border-b">Players</th>
            <th className="border-b">Winner</th>
            <th className="border-b">Completed</th>
          </tr>
        </thead>
        <tbody>
          {gameplays.map((game) => (
            <tr key={game.id}>
              <td className="text-center">{game.id}</td>
              <td className="text-center">{game.name}</td>
              <td className="text-center">{game.date}</td>
              <td className="text-center">{game.type}</td>
              <td className="text-center">{game.players.join(', ')}</td>
              <td className="text-center">{game.winner}</td>
              <td className="text-center">{game.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
