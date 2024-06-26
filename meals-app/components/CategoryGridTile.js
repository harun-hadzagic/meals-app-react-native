import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.girdItem}>
      <Pressable style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]} android_ripple={{color: '#ccc'}}>
        <View style={[styles.innerContainer,  {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  girdItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden': 'visible'
  },
  button:{
    flex: 1
  },
  buttonPressed:{
    opacity: 0.25
  },
  innerContainer:{
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18
  }
});
