import React from 'react';
import { Image, Pressable, Text, View } from "react-native"
import { ImagesRef } from '../config/ResourcesRef';
import { CmpHook } from './HomeCmpHook';
import { CmpStyle as style } from './HomeCmpStyle';

export const Home = (props: any) => {
    const TEXT_2 : string = "This is the Alt Text to be shown..."; 
    const {
        data,
        updateTheUIText
    }: any = CmpHook(props);
    return(
        <View style={style.container}>
            <Image source={ImagesRef.helloImg} style={style.imgStyle}></Image>
            <Text style={style.textStyle}> {data}</Text>
            <Text style={style.textStyle}> This is another Text</Text>
            <Pressable
            onPress={()=> updateTheUIText(TEXT_2)}
            >
                <View style={style.btnContainer}>
                    <Text style={style.btnStyle}> Press the button!</Text>
                </View>
            </Pressable>            
        </View>
    )
}

