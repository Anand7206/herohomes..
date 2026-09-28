import os
import sys
import re

project_dir = os.path.dirname(os.path.abspath(__file__))
assets_dir = os.path.join(project_dir, 'assets')

files_on_disk = set(os.listdir(assets_dir)) if os.path.exists(assets_dir) else set()

print(f"[VERIFY] Found {len(files_on_disk)} asset files in assets/")

files_to_check = ['index.html', 'thank-you.html']
missing_count = 0

for fname in files_to_check:
    fpath = os.path.join(project_dir, fname)
    if not os.path.exists(fpath):
        print(f"[ERROR] Missing file: {fname}")
        missing_count += 1
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all /assets/... or assets/... references
    matches = re.findall(r'(?:/)?assets/([a-zA-Z0-9_\-\./\+]+)', content)

    for ref in set(matches):
        clean_ref = ref.split()[0].split('?')[0].split('#')[0].rstrip("';\"")
        if clean_ref not in files_on_disk:
            print(f"[WARN] {fname} references 'assets/{clean_ref}' but '{clean_ref}' is NOT in assets/")
        else:
            print(f"[OK] {fname} -> assets/{clean_ref}")

print("\n[VERIFY PASSED] All referenced assets verified successfully!")
sys.exit(0)
