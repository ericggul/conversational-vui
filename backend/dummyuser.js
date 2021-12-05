const c_users = [];

const join_User = (id, userName, room) => {
  console.log(userName);
  const p_user = { id: id, userName: userName, room: room };
  c_users.push(p_user);
  return p_user;
};

const get_Current_User = (id) => {
  return c_users.find((p_user) => p_user.id === id);
};

const user_Disconnect = (id) => {
  const index = c_users.findIndex((p_user) => p_user.id === id);
  if (index !== -1) {
    return c_users.splice(index, 1)[0];
  }
};

module.exports = {
  join_User,
  get_Current_User,
  user_Disconnect,
};
