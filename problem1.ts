function studentGrade(arr: Array<number>) {
  let grade = arr.length
  let duplicate = [...arr]

  for (let i = 0; i < grade; i++) {
    for (let j = 0; j < grade; j++)
      if (duplicate[j] > duplicate[j + 1]) {
        let value = duplicate[j]
        duplicate[j] = duplicate[j + 1]
        duplicate[j + 1] = value
      }
  }
  return duplicate
}

console.log(studentGrade([80, 65, 90, 75, 85, 70, 95, 60]))
