var game_record = {
  replay_speed: 2, // Updates per second
  start_tiles: [{x: 0, y: 0, val: 4}, {x: 1, y: 0, val: 2}],
  moves: [
    {
      move_num: 1,
      direction: 0,
      new_tile: {x: 1, y: 1, val: 4}
    },
    {
      move_num: 2,
      direction: 1,
      new_tile: {x: 2, y: 2, val: 2}
    },
    {
      move_num: 3,
      direction: 2,
      new_tile: null
    },
    {
      move_num: 4,
      direction: 3,
      new_tile: {x: 3, y: 3, val: 2}
    }
  ]
};