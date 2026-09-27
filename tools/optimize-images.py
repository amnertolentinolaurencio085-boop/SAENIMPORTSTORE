from pathlib import Path
from PIL import Image
import re

ROOT = Path(__file__).resolve().parents[1]
TEXT_EXTENSIONS = {".html", ".js", ".css"}
IMAGE_PATTERN = re.compile(r"IMAGENES [^\"'`)]+?\.png", re.IGNORECASE)


def referenced_images():
    found = set()
    for path in ROOT.iterdir():
        if path.is_file() and path.suffix.lower() in TEXT_EXTENSIONS:
            text = path.read_text(encoding="utf-8")
            found.update(match.replace("/", "\\") for match in IMAGE_PATTERN.findall(text))
    return sorted(found)


def optimize(relative_path):
    source = ROOT / relative_path
    if not source.exists():
        return None
    target = source.with_suffix(".webp")
    max_width = 1920 if "CARRUSEL" in relative_path.upper() else 1200
    with Image.open(source) as image:
        image.load()
        if image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")
        image.save(target, "WEBP", quality=82, method=6)
    return source.stat().st_size, target.stat().st_size, target


def rewrite_references(converted):
    replacements = {old.replace("\\", "/"): new.replace("\\", "/") for old, new in converted}
    replacements.update({old.replace("/", "\\"): new.replace("/", "\\") for old, new in converted})
    changed = 0
    for path in ROOT.iterdir():
        if not path.is_file() or path.suffix.lower() not in TEXT_EXTENSIONS:
            continue
        text = path.read_text(encoding="utf-8")
        updated = text
        for old, new in replacements.items():
            updated = updated.replace(old, new)
        if updated != text:
            path.write_text(updated, encoding="utf-8", newline="\n")
            changed += 1
    return changed


def main():
    converted = []
    original_bytes = optimized_bytes = 0
    for relative in referenced_images():
        result = optimize(relative)
        if not result:
            continue
        before, after, target = result
        original_bytes += before
        optimized_bytes += after
        converted.append((relative, str(target.relative_to(ROOT))))
    changed_files = rewrite_references(converted)
    saved = original_bytes - optimized_bytes
    print(f"converted={len(converted)} changed_files={changed_files}")
    print(f"original_mb={original_bytes/1024/1024:.1f} optimized_mb={optimized_bytes/1024/1024:.1f} saved_mb={saved/1024/1024:.1f}")


if __name__ == "__main__":
    main()
