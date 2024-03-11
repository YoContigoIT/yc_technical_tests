const findAllUseCase = async () => {
  return await UserService.findAll();
}

module.exports = findAllUseCase