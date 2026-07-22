const bcrypt = require("bcrypt");
const prisma = require("./lib/prisma.js");
async function localStrat(email, password, done) {
  try {
    const user = await prisma.user.findUnique({where: {email}})

    if (!user) {
      return done(null, false, { message: "Email does not exist" });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return done(null, false, { message: "Incorrect password" });
    }
    return done(null, user);
  } catch (err) {
    if (err) {
      return done(err);
    }
  }
}

async function desUser(id, done) {
  try {
    const user = await prisma.user.findUnique({ where: {id}})
    done(null, user);
  } catch (err) {
    done(err);
  }
}

module.exports = { localStrat, desUser };