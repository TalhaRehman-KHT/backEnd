import UserModle from "../schema/UserSchema.js";

export const moderatorCheckingAllUsersRolesController = async (req, res) => {
  try {
    // Check if the user making the request is a moderator
    const isModerator = req.user.role === 'Moderator'; 

    if (!isModerator) {
      return res.status(403).json({ success: false, message: 'Permission denied' });
    }

    // Fetch all users' data from the database
    const allUsers = await UserModle.find({}, 'username role');

    res.json({
      success: true,
      message: 'Moderator successfully retrieved all users data',
      users: allUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users data');
  }
};
