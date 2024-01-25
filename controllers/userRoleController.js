// controllers/userRoleController.js

import UserModle from "../schema/UserSchema.js";
import RoomModel from "../schema/roomID.js";

export const assignRolesController = async (allUsers) => {
  try {
    // console.log(`All users for assign role`, allUsers);

    const usersLength = allUsers.length;

    if (usersLength >= 5) {
      
      // Role distribution
      const fixedRoles = ["POLICE", "DOCTOR", "KING"];
      const remainingRoles = ["CIVILIAN", "CHOR"];

      const shuffledRemainingRoles = shuffleArray(remainingRoles);

      // Assign fixed roles to the first three users
      const usersWithRoles = allUsers.slice(0, fixedRoles.length).map((user, index) => ({
        user,
        role: fixedRoles[index],
      }));

      // Assign remaining roles to the rest of the users
      usersWithRoles.push(
        ...allUsers.slice(fixedRoles.length).map((user, index) => ({
          user,
          role: shuffledRemainingRoles[index % shuffledRemainingRoles.length],
        }))
      );

      // console.log("Success");
      console.log("Assigned Roles:", usersWithRoles);

      return { success: true, assignedRoles: usersWithRoles };
 
    } else {
      console.log("Error: Number of users must be exactly 5");
      
      return { success: false, message: "Need more players" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error assigning roles" };
  }
};

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
