import os

def read_files_and_append_to_file(directory, output_file):
    # Open the output file in append mode
    with open(output_file, "a") as outfile:
        # Loop through all the files in the directory
        for filename in os.listdir(directory):
            # Construct the full file path
            file_path = os.path.join(directory, filename)
            # Check if the file is a regular file (not a directory)
            if os.path.isfile(file_path):
                # Open the file in read mode
                no_extension_filename = os.path.splitext(filename)[0].replace("-", " ")
                # Convert the filename to PascalCase
                pascal_case_filename = "".join(word.capitalize() for word in no_extension_filename.split(" "))
                with open(file_path, "r") as infile:
                    # Read the contents of the file
                    file_content = infile.read()
                    start_index = file_content.find("d=") + len("d=")
                    end_index = file_content.find(" stroke")
                    if start_index != -1 and end_index != -1:
                        content_between_tags = file_content[start_index:end_index].strip()
                        # Write the contents to the output file
                        outfile.write("{}: () => <path d={}/>,\n".format(pascal_case_filename, content_between_tags))

# Example usage
read_files_and_append_to_file("./src", "./icons.tsx")
