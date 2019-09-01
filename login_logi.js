// define generatePassword function
function loginCheck(options) {
  // define things user might want
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  // create user info and check email
  const userOne = users.find(user => user.email === options.email)

  if (!userOne) {
    return 'Username/Password 錯誤'
  }

  // create user's firstname and check password
  const firstname = userOne.firstName

  if (userOne.password === options.password) {
    console.log(`Welcome back, ${firstname}`)
    return `Welcome back, ${firstname}!`
  } else {
    return 'Username/Password 錯誤'
  }
}

// export loginCheck function for other files to use
module.exports = loginCheck
