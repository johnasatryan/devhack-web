
const validateUserData = (userData) => {
  if (!userData.username || !userData.password) {
    throw new Error()
  }
} 