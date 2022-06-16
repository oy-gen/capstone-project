import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(request, response) {
  await dbConnect();
  console.log('requestbody', request.body);
  switch (request.method) {
    case 'PATCH':
      try {
        const { _id, ...rest } = request.body;
        await User.findByIdAndUpdate(
          _id,
          rest
        ); /* create a new model in the database */
        const user = await User.findById(_id).exec();
        console.log('Hier', user);
        response.status(201).json({ success: true, data: user });
      } catch (error) {
        console.error(error);
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
    case 'PUT':
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
