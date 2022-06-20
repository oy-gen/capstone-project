import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(request, response) {
  await dbConnect();
  switch (request.method) {
    case 'PATCH':
      try {
        const { _id, ...rest } = request.body;
        let user = await User.findByIdAndUpdate(_id, rest);
        if (user) {
          user = await User.findById(_id).exec();
          response.status(201).json({ success: true, data: user });
        } else {
          response.status(404).json({ success: false });
        }
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'GET':
      try {
        const user = await User.find(
          {}
        ); /* find all the data in our database */
        response.status(200).json({ success: true, data: user });
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
