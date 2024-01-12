import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET
const webToken = {}

// Create a middleware to check if the token is valid
webToken.generateToken = async (user) => {
  const payload = {
    id: user._id,
    email: user.email
  }

  try {
    return jwt.sign(
      payload,
      secret,
      { expiresIn: '1d' }
    )
  } catch (error) {
    throw new Error('Error generating token')
  }
}

webToken.validateToken = (request, response, next) => {
  const token = request.headers.authorization

  if (!token) {
    return response.status(401).json({
      message: 'Token not found'
    })
  }

  try {
    const payload = jwt.verify(token, secret)
    request.user = payload
    next()
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid token'
    })
  }
}

export default webToken