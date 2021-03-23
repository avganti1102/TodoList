export function passwordValidator(password) {
  if (!password || password.length <= 4) return "Password can't be empty and greater than four character."
  return ''
}
