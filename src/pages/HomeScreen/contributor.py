import glob
import json
import os


folder_path = "src/contributors/"  
image_ext_list = [".jpg", ".jpeg", ".png"]  

image_list = []
index = 0
req = "require"
image_fetch_array = []

for image_ext in image_ext_list:
    for file_path in glob.glob(folder_path + "*" + image_ext):
        file_name = os.path.basename(file_path)
        name_parts = file_name.split('-')
        abbreviated_name = name_parts[0] if name_parts else ""
        index = index + 1
        image_list.append({"index": index, "path": "../../contributors/" + file_name, "name": abbreviated_name})
        image_fetch_array.append({"index": index, "path": req + "(../../contributors/" + file_name + ")", "name": abbreviated_name})

image_dict = {"": image_fetch_array}

js_file_path = "src/pages/Main_content/image_list.js"
with open(js_file_path, "w") as js_file:
    js_file.write(" const contributer = \n")
    js_file.write("\t" + json.dumps(image_fetch_array, indent=4).replace('"require(', 'require("').replace(')"', '")') + "\n")
    js_file.write("export default contributer;\n")


#this is for debugging
# print(f"JavaScript file created with {len(image_list)} image files at {js_file_path}.")
