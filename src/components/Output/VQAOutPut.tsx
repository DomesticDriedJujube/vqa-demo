import { Box, Container, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import { useMemo } from 'react'
import _ from 'lodash'

function VQAOutPutScreen() {
  const mockResult = {
    'model1': 'black',
    'model2': 'black',
    'model3': 'gray',
    'model4': 'black',
  }
  const resultPairs = _.toPairs(mockResult)

  const ResultComponent = useMemo(() => (
    <VStack
      divider={<Divider />}
    >
      { resultPairs.map(p => {
        return (
          <Box alignSelf={'flex-start'}>
            <Text fontSize='md'>
              { p[0] }{': '}{ p[1] }
            </Text>
          </Box>
        )
      })}
    </VStack>
  ), [resultPairs])

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
