import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, PlusSquareIcon, QuestionIcon } from "@chakra-ui/icons";
import { Inter, Vollkorn } from "next/font/google";
const vollkorn = Vollkorn({ subsets: ["latin"], weight: '800' });

const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

function Header(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session, status } = useSession();

  return (
    <div className={`grid place-items-center pt-3 pb-2 ${vollkorn.className}`}>
      <Box
        className={`grid w-2/5 max-h-13`}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <ButtonGroup>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button onClick={toggleColorMode}>
            <QuestionIcon />
          </Button>
          </ButtonGroup>
         
          <Box>kwests</Box>

          <ButtonGroup>
            <Button>
              <PlusSquareIcon/>
            </Button>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={props.image}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={props.image}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{props.name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Account Settings</MenuItem> */}
                  <MenuItem>
                    {status !== "authenticated" && (
                      <Button onClick={() => signIn()}>login</Button>
                    )}
                    {status === "authenticated" && (
                      <Button onClick={() => signOut()}>logout</Button>
                    )}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
          </ButtonGroup>
         
        </Flex>
      </Box>
    </div>
  );
}

export default Header;
