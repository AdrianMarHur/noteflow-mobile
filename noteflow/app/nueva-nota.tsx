import { StyleSheet, Text, View } from "react-native";
import { colors } from "../src/constants/theme";

export default function NuevaNotaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear nueva nota</Text>
      <Text style={styles.body}>
        Aquí puedes crear una nueva nota o idea y almacenar la información en el
        estado global del proyecto.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.text,
  },
  body: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
});
