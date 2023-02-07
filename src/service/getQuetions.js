
export async function getQuetions() {
  const quiz = await fetch("https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple")
    .then((res) => res.json())
    .then((res) => res.results)
  return quiz
}


export function randomizeOptions(correct = "test", incorrect = ["1", "2", "3"]) {
  const optionsArr = [{ [correct]: true }]
  incorrect.forEach((value) => optionsArr.push({ [value]: false }))

  const randomArr = []
  while (randomArr.length !== 4) {
    const testNum = Math.floor(Math.random() * 4)
    if (!randomArr.includes(testNum)) {
      randomArr.push(testNum)
    }
  }

  const orderArr = []
  for (let i = 0; i < randomArr.length; i++) {
    orderArr.push(optionsArr[randomArr[i]])
  }
  return orderArr
}