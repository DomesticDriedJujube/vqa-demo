export interface QuestionDataProps {
  word: string,
  att: number,
}

export interface VqaOutPutProps {
  oriQuestion: string,
  oriImage: string,
  questionData: Array<QuestionDataProps>
  boxedImage: string
  importantBoxes: Array<string>,
  answer: string,
}

interface VqaResultProps {
  MCAoAN: VqaOutPutProps
}

export default VqaResultProps
