export function capitalize(string) {
  const result = string.charAt(0).toUpperCase() + string.slice(1)
  return result
}

export function capitalizeAll(string) {
  const words = string.split(" ")
  const result = words.map(word => capitalize(word))
  return result.join(" ")
}
