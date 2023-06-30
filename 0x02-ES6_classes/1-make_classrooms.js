import ClassRoom from './0-classroom';

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = [];

  for (const i of roomSizes) {
    const room = new ClassRoom(roomSizes[i]);
    rooms.push(room);
  }

  return rooms;
}

export default initializeRooms;
