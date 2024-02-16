import os
import json

import os
from PIL import Image

def convert_to_png(input_dir):
    for filename in os.listdir(input_dir):
        if filename.endswith(('.jpg', '.jpeg', '.bmp', '.gif', '.tiff')):
            image_path = os.path.join(input_dir, filename)
            try:
                with Image.open(image_path) as img:
                    png_path = os.path.splitext(image_path)[0] + '.png'
                    img.save(png_path, format='PNG')
                    os.remove(image_path)
                    print(f"Converted {filename} to PNG")
            except Exception as e:
                print(f"Error converting {filename}: {e}")

def generate_and_write_contributor_list(directory, output_file):
    contributor_list = []
    index = 1
    for filename in os.listdir(directory):
        if filename.endswith(('.jpg', '.jpeg', '.bmp', '.gif', '.tiff', '.png')):
            name, _ = os.path.splitext(filename)
            name_parts = name.split(" - ")
            if len(name_parts) >= 2:
                contributor = {
                    "index": index,
                    "path": f'require("../../contributors/{filename}")',
                    "name": name_parts[0]
                }
                contributor_list.append(contributor)
                index += 1
    
    with open(output_file, 'w') as f:
        f.write("const contributors = ")
        json.dump(contributor_list, f, indent=4)
        f.write(";\n")
        f.write("export default contributors;")

input_directory = "src/contributors/"
convert_to_png(input_directory)
generate_and_write_contributor_list(input_directory, "src/pages/homeScreen/ImageList.js")