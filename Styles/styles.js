import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
});

export const listItemsStyle = StyleSheet.create({
  item: {
    padding: 5,
    margin: 5,
    height: 125,
    backgroundColor: "#ddd",
    flexDirection: "row",
    borderRadius: 10
  },
  imageLastContainer: {
    width: "30%",
    justifyContent: "space-between"
  },
  imgContainer: {
    height: "80%"
  },
  img: {
    width: "100%",
    height: '100%'
  },
  lastContainer: {
    alignItems: "center",
    height: "15%",
    backgroundColor: "#90b6de",
    borderRadius: 15,
  },
  last: {

  },
  textContainer: {
    width: '70%',
    backgroundColor: "#90b6de",
    borderWidth: 5,
    borderColor: "#ddd",
    padding: 5,
    borderRadius: 15
  },
  text: {
    
  },
  separator: {
    height: 1,
    width: "95%",
    backgroundColor: "black",
    alignSelf: "center"
  }
})

export const VideoScreenStyle = StyleSheet.create({
  videoContainer: {
    
  },
  videoInfo: {
    height: '12%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#ddd'
  },
  videoControls: {
    justifyContent: 'space-evenly',
    height: '50%',
    alignItems: 'center'
  },
  controlGroup: {
    flexDirection: 'row',
  },
  btn: {
    borderWidth: 1,
    borderRadius: 40,
    margin:5,
    backgroundColor: '#2cc'
  }
})