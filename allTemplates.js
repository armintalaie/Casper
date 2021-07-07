import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated
} from "react-native";

import TemplateCard from "./templateCard";
import {styles} from "./style";
import { getTemplates } from "./templateHandler";
const max = 10;

export default function AllTemplates({navigation}) {
  const [counted, setCount] = useState(0)
  const [allTemp, setAll] = useState([])
  let count = 1;

  async function getData() {
    try{
      data = await getTemplates()
     
      if (data != undefined){
     
     setAll(data)
     setCount(allTemp.length)
    }
    }catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  })
 
  
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Templates</Text>
      <Text style={styles.title}>{counted}/{max}</Text>
      <ScrollView contentContainerStyle={styles.templateCards}
     
      >
        {allTemp.map(e => (
          <TemplateCard
            key={count++}
            temp={e}
            title={e.title}
            text={e.body}
            templates={allTemp}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => {
          if (count <= max)
          navigation.navigate("Newt", {templates: allTemp })
          else
          alert("Oh oh :(. You've reached the maximum number of templates. You can delete an older template")
      }}
      >
        <Text style={styles.btnText}>New Template </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}
