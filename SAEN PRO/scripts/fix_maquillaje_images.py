from pathlib import Path

path = Path(__file__).resolve().parent.parent / 'datos-maquillaje.js'
text = path.read_text(encoding='utf-8')
lines = text.splitlines()
count = 0
new_lines = []
for line in lines:
    if '"imagen": ""' in line:
        count += 1
        new_lines.append(line.replace('"imagen": ""', f'"imagen": "IMAGENES MAQUILLAJE/IMGMAQ{count:03}.png"'))
    else:
        new_lines.append(line)
path.write_text('\n'.join(new_lines) + '\n', encoding='utf-8')
print(f'replaced {count} imagen fields')
