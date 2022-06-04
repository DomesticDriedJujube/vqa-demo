import { Box, Container, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import { useMemo } from 'react'
import _ from 'lodash'

const B64toimg = ({ data }: any) => <img src={`data:image/jpeg;base64,${data}`} />

function VQAOutPutScreen(props: any) {
  // const mockResult = {
  //   'model1': 'black',
  //   'model2': 'black',
  //   'model3': 'gray',
  //   'model4': 'black',
  // }
  // const resultPairs = _.toPairs(mockResult)
  const { vqaResult } = props
  const mcaoanData = vqaResult.MCAoAN
  const ResultComponent = useMemo(() => (
    <VStack
      divider={<Divider />}
    >
      {
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' style={{ width: '100%' }}>
          <Box>
            MCAoAN
          </Box>
          <Box alignSelf={'flex-start'}>
            <Text fontSize='md'>
              Question: {mcaoanData.oriQuestion}
            </Text>
            <Text fontSize='md'>
              Answer: {mcaoanData.answer}
            </Text>
            {
              mcaoanData.oriImage != "" && <B64toimg data={mcaoanData.oriImage} />
            }
            <Text fontSize='md'>
              Question Data: {mcaoanData.questionData.map((x: any) => `${x.word}(${x.att.toFixed(2)})`).join(' ')}
            </Text>
            Image with attention box: {
              mcaoanData.boxedImage != "" && <B64toimg data={mcaoanData.boxedImage} />
            }
            attention box list which has attention weight more than avg
            {
              mcaoanData.importantBoxes.map((boxStr: string)=>(
                <B64toimg data={boxStr} />
              )) 
            }
          </Box>
        </Box>
      }
      {/* { resultPairs.map(p => {
        return (
          <Box alignSelf={'flex-start'}>
            <Text fontSize='md'>
              { p[0] }{': '}{ p[1] }
            </Text>
          </Box>
        )
      })} */}
    </VStack>
  ), [mcaoanData])
  // ), [resultPairs])

  return (
    <Container>
      <Heading fontSize='3xl' mb={8}>
        VQA Result
      </Heading>
      { ResultComponent }
    </Container>
  )
}

export default VQAOutPutScreen
