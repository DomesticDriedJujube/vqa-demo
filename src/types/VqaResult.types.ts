export interface QuestionDataProps {
  word: string,
  att: number,
}

export interface ImportantBoxProps {
  att: number,
  str: string,
}

export interface VqaOutPutProps {
  oriQuestion: string,
  oriImage: string,
  questionData: Array<QuestionDataProps>
  boxedImage: string
  importantBoxes: Array<ImportantBoxProps>,
  answer: string,
}

interface VqaResultProps {
  MCAoAN: VqaOutPutProps
}

export default VqaResultProps
