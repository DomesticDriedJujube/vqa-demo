/* External dependencies */
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'

/* Internal dependencies */
import Link from '../constant/link'

function Hero() {
  const handleButtonClick = (link: Link) => {
    window.open(link)
  };

  const handleGitHubLinkClick = () => handleButtonClick(Link.GitHub)
  const handlePaperLinkClick = () => handleButtonClick(Link.GitHub)

  const GitHubIcon = () => (
    <Icon viewBox="0 0 24 24">
      <path
        fill='currentColor'
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </Icon>
  )

  return (
    <Container
      maxW='5xl'
    >
      <Stack
        textAlign='center'
        align='center'
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 24 }}>
        <Heading
          size='3xl'
          fontWeight={800}
          lineHeight='110%'
          letterSpacing='-1.5px'
        >
          Visual{' '}
          <Text as='span' color='red.500'>
            Question Answering
          </Text>
        </Heading>
        <Text color='gray.500' maxW='3xl' noOfLines={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus eget laoreet felis, eget interdum risus. Nunc a dapibus ex.
          Sed pellentesque risus ut cursus rhoncus.
          In tempus facilisis tortor sed eleifend Phasellus condimentum nisi ac neque tempus, sed eleifend risus viverra.
        </Text>
        <HStack spacing={8}>
          <Button
            size='lg'
            colorScheme={'red'}
            bg={'red.400'}
            _hover={{ bg: 'red.500' }}
            leftIcon={
              <GitHubIcon />
            }
            onClick={handleGitHubLinkClick}
          >
            GitHub
          </Button>
          <Button
            size='lg'
            onClick={handlePaperLinkClick}
          >
            Paper
          </Button>
        </HStack>
      </Stack>
    </Container>
  )
}

export default Hero
