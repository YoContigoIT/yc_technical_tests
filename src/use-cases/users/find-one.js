const findAllUseCase = async () => {
  const user = await UserService.findOne();
  
  if (!user) {
    throw new Error('User not found');
  }

  return user
}

module.exports = findAllUseCase