import os
import json

def get_image_files(folder_path):
    image_files = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".jpg") or file.endswith(".jpeg") or file.endswith(".png"):
                image_files.append(os.path.join(root, file))
    return image_files

def create_json_file(image_files, json_file_path):
    data = {}
    for i, image_file in enumerate(image_files):
        data[f"image_{i}"] = {"path": os.path.dirname(image_file), "name": os.path.basename(image_file)}
    with open(json_file_path, "w") as f:
        json.dump(data, f, indent=4)

folder_path = "src/contributors/"
json_file_path = "src/pages/file.json"

image_files = get_image_files(folder_path)

# Debug print statements
print("Folder Path:", folder_path)
print("JSON File Path:", json_file_path)
print("Image Files:", image_files)

create_json_file(image_files, json_file_path)
