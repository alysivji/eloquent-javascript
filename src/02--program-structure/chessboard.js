let size = 8;

for (i = 0; i < size; i++) {
  line = ""
  lead_char = i % 2 == 0 ? " " : "#"
  other_char = i % 2 == 0 ? "#" : " "

  for (j = 0; j < size; j = j + 2) {
    line += lead_char + other_char
  }
  console.log(line)
}
