import {
  Box,
  HStack,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Icon,
  Avatar,
  AvatarBadge,
  Tag,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { RiVipCrownFill } from "react-icons/ri";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import React,{useContext} from "react";
import { AlertSuccess, AuthSuccess, LoginFailure, LoginSuccess } from "../../Context/AuthContext/Action"
import { useNavigate } from "react-router-dom";

export default function MenuLink() {
  const {state,dispatch} = useContext(AuthContext)
  const {navigate} = useNavigate ()
  const logout = () => {
    dispatch(AuthSuccess(false));
    localStorage.removeItem('Zee5-token')
    navigate ('/login')
  }
  return (
    <Flex>
      <HStack gap="30px">
        <Box>
          <InputGroup w={340}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="white" />}
            />
            <Input
              size="sm"
              focusBorderColor="Purple"
              borderRadius={5}
              type="search"
              placeholder="Search for Movies, Shows, Channels etc."
              fontSize="13"
            />
          </InputGroup>
        </Box>
        <Box>
        {
          state.auth === true ? ( 
          <Avatar bgGradient='linear(to-l, #7928CA, #FF0080)' size="md">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          ):(
            <Button
            size="sm"
            fontSize={10}
            color="white"
            bg="#0F0617"
            padding={3}
            variant="outline"
            _hover={{ background: "white", color: "black" }}
          >
            <NavLink to={"/login"}>LOGIN</NavLink>
          </Button>
          )
        }
        </Box>
        <Box>
          {
            state.alert === true ? (
              <Tag size="lg" key="md" variant='solid' bgGradient='linear(to-l, #7928CA, #FF0080)' color='white'>ZEE5 Premium</Tag>
            ) : (
              <Button
            size="sm"
            padding={3.5}
            fontSize={12}
            w={140}
            colorScheme="purple"
            _hover={{ background: "#8230E9", color: "white" }}
            leftIcon={<Icon as={RiVipCrownFill} width="18px" height="18px" />}
          >
            
            <NavLink to={"/premiumplan"}>BUY PLAN</NavLink>
          </Button>
            )
          }
          
        </Box>
        <Box>
        {
          state.auth === true ? ( 
          <button onClick= {logout }>Logout</button>
          ):null
            
        }
        </Box>
      </HStack>
    </Flex>
  );
}
