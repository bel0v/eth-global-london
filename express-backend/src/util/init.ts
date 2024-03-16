import { db } from '@src/config';
import fs from 'fs';

export async function initEvents() {
  await db.event.deleteMany({});

  for (let i = 1; i <= 3; i++) {
    const eventImage =
      'data:image/png;base64,' +
      fs.readFileSync(__dirname + `/../public/events/event-${i}.png`, 'base64');
    const organizerImage =
      'data:image/png;base64,' +
      fs.readFileSync(
        __dirname + `/../public/events/organizer-${i}.png`,
        'base64'
      );

    console.log('event', i);

    await db.event.create({
      data: {
        eventImage,
        organizerImage,
        date: new Date(),
      },
    });
  }
}
