import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
  Image, Grid, GridItem
} from '@chakra-ui/react'
import { useMemo, } from 'react'
import VqaResultProps, { ImportantBoxProps } from '../../types/VqaResult.types'
import QuestionDataTable from './QuestionDataTable'
import { WarningTwoIcon } from '@chakra-ui/icons'
import ModelRadioButton from './ModelRadioButton'

const Base64toImg = (
  imageData: string,
  boxSize?: string,
) => (
  <Image boxSize={boxSize} src={`data:image/jpeg;base64,${imageData}`} />
)

function VQAOutPutScreen({
  MCAoAN,
}: VqaResultProps) {
  const mcaoanData = MCAoAN

  const ResultComponent = useMemo(() => (
    <VStack
      divider={
        <Divider />
      }
    >
      <Box
        overflow='hidden'
        flex='stretch'
        p={4}
      >
        <VStack spacing={4} divider={<Divider />} align='stretch'>
          <Box mb={4}>
            <Heading fontSize='2xl' mb={6}>Select Output Model</Heading>
            <ModelRadioButton />
          </Box>

          <Box>
            <Heading fontSize='xl' mb={2}>Question</Heading>
            <Text fontSize='lg'>{mcaoanData.oriQuestion}</Text>
          </Box>

          <Box>
            <Heading fontSize='xl' mb={2}>Answer</Heading>
            <Text fontSize='lg'>{mcaoanData.answer}</Text>
          </Box>

          <Box>
            <Heading fontSize='xl' mb={2}>Original Image</Heading>
            {
              mcaoanData.oriImage !== "" && (
                Base64toImg(mcaoanData.oriImage)
              )
            }
          </Box>

          <Box>
            <Heading fontSize='xl' mb={2}>Question Word Data</Heading>
            <QuestionDataTable questionData={mcaoanData.questionData} />
          </Box>

          <Box>
            <Heading fontSize='xl' mb={2}>
              Image with attention box
            </Heading>
            { mcaoanData.boxedImage !== "" && (
              Base64toImg(mcaoanData.boxedImage)
            )}
          </Box>

          <Box>
            <Heading fontSize='xl' mb={2}>
              Important Attention box list
            </Heading>
            <Text fontSize='sm' color='gray.500' mb={4}>
              Attention box list which has attention weight more than avg
            </Text>
            <Grid templateColumns='repeat(3, 2fr)' gap={6}>
              {
                mcaoanData.importantBoxes.map((obj: ImportantBoxProps) => (
                  <GridItem>
                    { Base64toImg(obj.str, '200px') }
                  </GridItem>
                ))
              }
            </Grid>
          </Box>
        </VStack>
      </Box>
    </VStack>
  ), [mcaoanData])

  const EmptyInputComponent = useMemo(() => (
    <Box textAlign='center' py={10} px={6}>
      <WarningTwoIcon boxSize='50px' color='orange.300' />
      <Heading size='lg' mt={6} mb={2}>
        Please input Image and Question!
      </Heading>
    </Box>
  ), [])

  return (
    <Container>
      <Heading fontSize='3xl' mb={8}>
        VQA Result
      </Heading>
      { MCAoAN.answer === ''
        ? EmptyInputComponent
        : ResultComponent
      }
    </Container>
  )
}

export default VQAOutPutScreen
