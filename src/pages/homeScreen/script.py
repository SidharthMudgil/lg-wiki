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
                    img.save(image_path, format='PNG')
                    print(f"Converted {filename} to PNG")
            except Exception as e:
                print(f"Error converting {filename}: {e}")

def generate_contributor_list(directory):
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
    return contributor_list

input_directory = ""
contributor_json = generate_contributor_list(input_directory)

convert_to_png(input_directory)
print(json.dumps(contributor_json, indent=4))