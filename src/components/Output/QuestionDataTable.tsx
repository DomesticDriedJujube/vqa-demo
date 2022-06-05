import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { QuestionDataProps, VqaOutPutProps } from '../../types/VqaResult.types'

type QuestionDataTableType = Pick<VqaOutPutProps, 'questionData'>

function QuestionDataTable({
  questionData,
}: QuestionDataTableType) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Word</Th>
            <Th isNumeric>attention</Th>
          </Tr>
        </Thead>
        <Tbody>
          { questionData.map((x: QuestionDataProps) => (
            <Tr>
              <Th>{x.word}</Th>
              <Th isNumeric>{x.att.toFixed(2)}</Th>
            </Tr>
          )) }
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default QuestionDataTable
