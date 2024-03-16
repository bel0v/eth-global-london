import { IReq, IRes } from './types/express/misc';

async function add(
  req: IReq<{ eventId: string; name: string; venueImageURI: string }>,
  res: IRes
) {
  // ...
}
