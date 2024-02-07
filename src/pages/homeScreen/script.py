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



# import glob
# import json
# import os

# # path to search file

# folder_path = "src/contributors/"  
# image_ext_list = [".jpg", ".jpeg", ".png"]

# # making necessary implementation

# image_list = []
# index = 0
# req = "require"
# image_fetch_array = []

# # reading the file name and path 

# for image_ext in image_ext_list:
#     for file_path in glob.glob(folder_path + "*" + image_ext):
#         file_name = os.path.basename(file_path)

#         # split the name 

#         name_parts = file_name.split('-')
#         abbreviated_name = name_parts[0] if name_parts else ""
#         index = index + 1

#     # adding it to image file array

#         image_list.append({"index": index, "path": "../../contributors/" + file_name, "name": abbreviated_name})
#         image_fetch_array.append({"index": index, "path": req + "(../../contributors/" + file_name + ")", "name": abbreviated_name})

# image_dict = {"": image_fetch_array}

# # path for making a new file with data

# js_file_path = "src/pages/homeScreen/ImageList.js"
# with open(js_file_path, "w") as js_file:

#     # writing the data

#     js_file.write(" const contributer = \n")
#     js_file.write("\t" + json.dumps(image_fetch_array, indent=4).replace('"require(', 'require("').replace(')"', '")') + "\n")
#     js_file.write("export default contributer;\n")


# #this is for debugging if u face error after word
    
# # print(f"JavaScript file created with {len(image_list)} image files at {js_file_path}.")
