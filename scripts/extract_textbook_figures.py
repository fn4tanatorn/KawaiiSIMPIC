import fitz
import os

os.makedirs('public/images/figures', exist_ok=True)
doc = fitz.open('Source/Murray Microbiology.pdf')

def extract_largest_image_from_page(page_num, output_name, target_xref=None):
    page = doc[page_num]
    imgs = page.get_images()
    if not imgs:
        print(f"No images found on page {page_num}")
        return False

    if target_xref:
        base_img = doc.extract_image(target_xref)
    else:
        # Find the largest image by area
        best_img = None
        best_area = 0
        best_xref = None
        for img in imgs:
            xref = img[0]
            info = doc.extract_image(xref)
            area = info['width'] * info['height']
            if area > best_area:
                best_area = area
                best_img = info
                best_xref = xref
        base_img = best_img

    if base_img:
        ext = base_img['ext']
        out_path = f"public/images/figures/{output_name}.{ext}"
        with open(out_path, 'wb') as f:
            f.write(base_img['image'])
        print(f"Extracted {output_name}.{ext} ({base_img['width']}x{base_img['height']}) from page {page_num}")
        return True
    return False

# Extract the high-yield clinical exhibits
targets = [
    (214, "staph-tss-rash", None),
    (217, "staph-blood-agar", None),
    (226, "strep-erysipelas", None),
    (232, "strep-pneumo-gram", 32860),
    (243, "anthrax-eschar", None),
    (250, "listeria-gram", None),
    (318, "pseudomonas-burn", None),
    (320, "pseudomonas-colony", None),
    (495, "ebv-downey-cell", None),
    (542, "measles-koplik", None),
    (663, "crypto-gram-halo", None),
    (663, "histo-intracellular", None),
    (814, "plasmodium-ring", 34635),
    (814, "plasmodium-gametocyte", 34636),
    (842, "strongyloides-larva", None),
]

for p, name, xref in targets:
    extract_largest_image_from_page(p, name, xref)

print("Figure extraction complete!")
