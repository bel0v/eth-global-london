import { db } from '@src/config';
import fs from 'fs';

export async function initEvents() {
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

    const exists = await db.event.findFirst({
      where: {
        eventImage,
        organizerImage,
      },
    });

    let teamIcons: string[] = [];
    if (i === 2) {
      teamIcons = [
        'data:image/png;base64,' +
          fs.readFileSync(
            __dirname + `/../public/events/arsanal.png`,
            'base64'
          ),
        eventImage,
      ];
    }

    if (exists) {
      continue;
    }

    console.log('event', i);

    await db.event.create({
      data: {
        eventImage,
        organizerImage,
        teamIcons,
        date: new Date(),
      },
    });
  }
}
