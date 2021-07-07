import React, { useState,useEffect, useRef } from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
  Animated,
  useWindowDimensions

} from "react-native";
import TemplateCard from "./templateCard";
import SwitchSelector from "react-native-switch-selector";
import {styles} from "./style";
import { getTemplates } from "./templateHandler";


export default function NewStatus({ navigation, route }) {

  const [selectedTitle, setSelect] = useState(null);
  const [selectedBody, setBody] = useState(null)
  const [reply, setreply] = useState(false);
  const [replyToContacts, setreplyToContacts] = useState(false);
  const [alltemp, setAll] = useState([]);

  const { width: windowWidth } = useWindowDimensions();
  const [dots, setDots] = useState(new Array(1).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4'));

  const onlyToContacts = [
    { label: "Reply to all", value: "0" },
    { label: "Reply to contacts", value: "1" },
  ];

  const replyMessage = [
    { label: "No reply", value: "0" },
    { label: "Send auto-reply", value: "1" },
  ];


  async function getData() {
    try{
      data = await getTemplates()
      if (data != undefined){
     setAll(data)
     temparr = [];
     for (i = 0 ; i <data.length;i++) {
      temparr.push(dots[0]);
     }
     setDots(temparr)
      }
    }catch(e) {
      console.log(e)
    }
  }


useEffect(()=> {
  getData()
}, [])


  function setNewStatus() {
    details = {subject: selectedTitle, body:selectedBody ,autoreply: Boolean(reply), contacts: Boolean(replyToContacts) }
    route.params.changeStatus(details);
    navigation.navigate("Home", {details});
  }

  const scrollX = useRef(new Animated.Value(0)).current;

  showcontacts = reply == true? (<SwitchSelector
    style={styles.switch}
    buttonColor="#7a7672"
    options={onlyToContacts}
    initial={0}
    bold={true}
    fontSize={13}
    buttonMargin={2}
    height={40}
    animationDuration={200}
    textStyle={styles.text}
    selectedTextStyle={styles.textwhite}
    selectedColor="#ffffff"
    onPress={(value) => (setreplyToContacts(Boolean(value)))}
  />) : (<View></View>)

   showTemplates = (
      <View></View>

    );

  if (reply == true)
  showTemplates = (
    <View style={styles.scrollContainer}>


    <ScrollView horizontal={true}
    contentContainerStyle={styles.cardContent}
    pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX 
                }
              }
            }
          ],
          {useNativeDriver: false})}
          scrollEventThrottle={1}
  >
    {alltemp.map((t) => (
      <TouchableOpacity
        onPress={() => {setSelect(t.title)
          setBody(t.body)
         
        }}
        style={{ width: windowWidth, justifyContent: "center", alignItems: "center" }}
      >
        <TemplateCard
  
          title={t.title}
          canBeEdited={false}
          text={t.body}
          select={
            t.title === selectedTitle? true:false
          }
        />
      </TouchableOpacity>
    ))}
  </ScrollView>

<View style={styles.indicatorContainer}>
{dots.map((image, imageIndex) => {
  const width = scrollX.interpolate({
    inputRange: [
      windowWidth * (imageIndex - 1),
      windowWidth * imageIndex,
      windowWidth * (imageIndex + 1)
    ],
    outputRange: [8, 16, 8],
    extrapolate: "clamp"
  });
  return (
    <Animated.View
      key={imageIndex}
      style={[styles.normalDot, { width }]}
    />
  );
})}
</View>
</View>

  );




  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.containerstart}>

  

      <SwitchSelector
        style={styles.switch}
        buttonColor="#7a7672"
        options={replyMessage}
        initial={0}
        bold={true}
        fontSize={13}
        buttonMargin={2}
        height={40}
        animationDuration={200}
        textStyle={styles.text}
        selectedTextStyle={styles.textwhite}
        selectedColor="#ffffff"
        onPress={(value) => (setreply(Boolean(value)))}
      />

      {showcontacts}
      </View>
     
   
   {showTemplates}

  
   

      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => {
          if (reply == true && selectedTitle == null)
            alert("To send an auto reply, you need to select a template")
          else
            setNewStatus();
        }}
      >
        <Text style={styles.btnText}>Set Status </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}