export default (input, len) => {
  if (input.length > len) {
    return `${input.substring(0, len)}...`
  }
  return input
}
