function employee(arr: Array<any>, target: any) {
  let first: number = 0
  let last: number = arr.length - 1

  while (first <= last) {
    let middle = Math.floor((first + last) / 2)

    if (arr[middle].id === target) {
      return arr[middle]
    } else if (arr[middle].id < target) {
      first = middle + 1
    } else {
      last = middle - 1
    }
  }

  return null // Employee not found
}

const dataKaryawan = [
  { id: 101, nama: "Rani" },
  { id: 203, nama: "Andi" },
  { id: 305, nama: "Budi" },
  { id: 410, nama: "Cindy" },
  { id: 520, nama: "Dodi" },
  { id: 635, nama: "Eka" },
  { id: 742, nama: "Fani" },
]

function findAndLogEmployee(target: number) {
  const resultEmployee = employee(dataKaryawan, target)

  if (resultEmployee !== null) {
    console.log(`karyawan = {id: ${target} nama: ${resultEmployee.nama}}`)
  } else {
    console.log(null)
  }
}

findAndLogEmployee(305)
