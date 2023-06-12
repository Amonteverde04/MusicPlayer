import React from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "./lib/globals";
import { NativeBaseProvider, extendTheme, Box, HStack, VStack, IconButton, Slider, Heading, Text } from "native-base";
import { PlayIcon, ChevronLeftIcon, ChevronRightIcon, FavouriteIcon } from "native-base";
import { Image } from "react-native";

import { StatusBar } from 'expo-status-bar';
import songs from './models/songs';

export default function App() {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: {
          color: "#FAFAFA",
        },
      },
      Text: {
        baseStyle: {
          color: "#CFCFCF",
        },
      }
    }
  });


  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" />
      <Box safeArea position={"absolute"} bottom={0} width={"100%"}>

        <Box alignItems={"center"} style={{gap: 15, padding: 30}}>
          <Box width={"100%"}>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
              <VStack width={"80%"} justifyContent={"space-between"}>
                <Heading>Track Name</Heading>
                <Text>Artist</Text>
              </VStack>
              <IconButton icon={<FavouriteIcon size={"xl"} color={PRIMARY_COLOR} />} />
            </HStack>
          </Box>

          <Box width={"100%"}>
            <Slider maxW="100%" defaultValue={0} minValue={0} maxValue={100} step={1} zIndex={10}>
              <Slider.Track bgColor={"#9F9F9F"}>
                <Slider.FilledTrack bgColor={SECONDARY_COLOR}/>
              </Slider.Track>
              <Slider.Thumb bg={SECONDARY_COLOR} 
                _pressed= {{
                  _interactionBox: {
                    borderWidth: '2',
                    borderColor: SECONDARY_COLOR,
                  },
                }}/>
            </Slider>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Text>Start</Text>
              <Text>End</Text>
            </HStack>
          </Box>

          <HStack style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <IconButton icon={<ChevronLeftIcon size={"4xl"} color={SECONDARY_COLOR} />} _pressed={{ opacity: "0.25", bg: "none"}} />
              <IconButton icon={<PlayIcon size={"6xl"} color={SECONDARY_COLOR} />} _pressed={{ opacity: "0.25", bg: "none"}} />
              <IconButton icon={<ChevronRightIcon size={"4xl"} color={SECONDARY_COLOR} />} _pressed={{ opacity: "0.25", bg: "none"}} />
          </HStack>
        </Box>
        
      </Box>
      <Image style={{position: "absolute", zIndex: -10, width: "100%"}} source={songs[0].art} />
      <Image style={{position: "absolute", zIndex: -9, width: "100%"}} source={require("./assets/overlay.png")} />
    </NativeBaseProvider>
  );
}