import os
import json

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

input_directory = "D:/repos/lg-wiki/src/contributors"
contributor_json = generate_contributor_list(input_directory)
print(json.dumps(contributor_json, indent=4))