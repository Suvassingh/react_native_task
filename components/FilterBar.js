import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

const PRICE_RANGES = [
  { key: "all", label: "All" },
  { key: "budget", label: "Budget" },
  { key: "mid-range", label: "Mid" },
  { key: "premium", label: "Premium" },
];

const TOGGLES = [
  { key: "inStock", label: "In Stock" },
  { key: "bestSeller", label: "Best Seller" },
  { key: "featured", label: "Featured" },
];

const SORTS = [
  { key: "name", label: "Name A–Z" },
  { key: "price-asc", label: "$ ↑" },
  { key: "price-desc", label: "$ ↓" },
];

export default function FilterBar({
  search,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  toggles,
  onToggleChange,
  sortKey,
  onSortChange,
}) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.search}
        placeholder="Search by title or brand…"
        value={search}
        onChangeText={onSearchChange}
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Price range</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row}
      >
        {PRICE_RANGES.map((pro) => (
          <Pressable
            key={pro.key}
            onPress={() => onPriceRangeChange(pro.key)}
            style={[styles.chip, pro.key === priceRange && styles.chipActive]}
          >
            <Text
              style={[
                styles.chipText,
                pro.key === priceRange && styles.chipTextActive,
              ]}
            >
              {pro.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.label}>Show only</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row}
      >
        {TOGGLES.map((tog) => {
          const active = !!toggles[tog.key];
          return (
            <Pressable
              key={tog.key}
              onPress={() => onToggleChange(tog.key, !active)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {tog.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Text style={styles.label}>Sort by</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row}
      >
        {SORTS.map((sor) => (
          <Pressable
            key={sor.key}
            onPress={() => onSortChange(sor.key)}
            style={[styles.chip, sor.key === sortKey && styles.chipActive]}
          >
            <Text
              style={[
                styles.chipText,
                sor.key === sortKey && styles.chipTextActive,
              ]}
            >
              {sor.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  search: {
    marginHorizontal: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    fontSize: 14,
  },
  label: {
    fontSize: 11,
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 10,
    marginBottom: 6,
    marginHorizontal: 12,
  },
  row: { paddingHorizontal: 12, maxHeight: 40 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginRight: 8,
    alignSelf: "center",
  },
  chipActive: { backgroundColor: "#03cefb" },
  chipText: { fontSize: 13, color: "#333" },
  chipTextActive: { color: "#fff", fontWeight: "600" },
});
