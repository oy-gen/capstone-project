import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case 'POST':
      try {
        const users = await User.create(
          req.body
        ); /* create a new model in the database */
        response.status(201).json({ success: true, data: users });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'GET':
      try {
        const users = await User.find(
          {}
        ); /* find all the data in our database */
        response.status(200).json({ success: true, data: users });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'PATCH':
      response.status(200).send('update data');
      break;
    case 'DELETE':
      response.status(200).send('delete data');
      break;
    default:
      response.status(400).send('not implemented');
      break;
  }
}
