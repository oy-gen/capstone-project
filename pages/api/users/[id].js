import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(request, response) {
  const {
    query: { id },
    method,
  } = request;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const users = await User.findById(id);
        if (!users) {
          return response.status(400).json({ success: false });
        }
        response.status(200).json({ success: true, data: users });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const users = await User.findByIdAndUpdate(id, request.body, {
          new: true,
          runValidators: true,
        });
        if (!users) {
          return response.status(400).json({ success: false });
        }
        response.status(200).json({ success: true, data: users });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedUser = await User.deleteOne({ _id: id });
        if (!deletedUser) {
          return response.status(400).json({ success: false });
        }
        response.status(200).json({ success: true, data: {} });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;

    default:
      response.status(400).json({ success: false });
      break;
  }
}
