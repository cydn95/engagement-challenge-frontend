import type { Game } from 'services/game/api';

export const mockGameplays: Game[] = [
  {
    name: 'pandemic',
    date: '2023-06-10T16:00:00-07:00',
    id: 5,
    type: 'cooperative',
    players: ['trini', 'tommy', 'kimberly'],
    win: false,
    completed: true,
  },
  {
    name: 'pandemic',
    date: '2023-06-07T21:30:00-07:00',
    id: 2,
    type: 'cooperative',
    players: ['trini', 'kimberly', 'zach'],
    win: true,
    completed: true,
  },
  {
    name: 'magic',
    date: '2023-06-01T18:30:00-07:00',
    id: 1,
    type: 'competitive',
    players: ['trini', 'tommy'],
    winner: 'trini',
    completed: true,
  },
  {
    name: 'magic',
    date: '2023-06-08T02:00:00-07:00',
    id: 4,
    type: 'competitive',
    players: ['billy', 'zach'],
    completed: false,
  },
  {
    name: 'magic',
    date: '2023-06-07T13:00:00-07:00',
    id: 3,
    type: 'competitive',
    players: ['billy', 'tommy'],
    winner: 'billy',
    completed: true,
  },
];
