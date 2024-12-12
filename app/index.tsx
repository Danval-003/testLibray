import { Text, View } from "react-native";
import {ThemedContainer} from "atomic_components_explorax/src"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedContainer>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </ThemedContainer>
    </View>
  );
}
