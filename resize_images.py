import os
import sys
import tkinter as tk
from tkinter import filedialog

def check_dependencies():
    """Checks if the Pillow library is installed."""
    try:
        import PIL
        return True
    except ImportError:
        print("Error: The 'Pillow' library is not installed.", file=sys.stderr)
        print("Please install it by running this command in your terminal:", file=sys.stderr)
        print("pip install Pillow", file=sys.stderr)
        return False

def resize_images_in_folder():
    """
    Opens a folder selection dialog, then resizes all images in that folder
    to a width of 1080px, maintaining the aspect ratio.
    """
    if not check_dependencies():
        sys.exit(1)
        
    # Now that we know PIL is installed, we can safely import it
    from PIL import Image

    # Hide the root tkinter window
    root = tk.Tk()
    root.withdraw()

    # Open a dialog to select a folder
    input_folder = filedialog.askdirectory(title="Select the Folder Containing Your Images")
    if not input_folder:
        print("No folder selected. The script will now exit.")
        root.destroy()
        return

    # Create a dedicated output folder for the resized images
    output_folder = os.path.join(input_folder, "resized-1080p")
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    print(f"Selected folder: {input_folder}")
    print(f"Resized images will be saved in: {output_folder}\n")

    # Define the target width and supported image formats
    target_width = 1080
    supported_extensions = ('.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff')
    processed_count = 0
    skipped_count = 0
    already_optimal_count = 0
    
    # Find image files in the selected directory
    image_files = [f for f in os.listdir(input_folder) if f.lower().endswith(supported_extensions)]
    
    if not image_files:
        print("No supported image files found in the selected folder.")
        root.destroy()
        return

    # Iterate over all image files in the selected directory
    for filename in image_files:
        try:
            img_path = os.path.join(input_folder, filename)
            with Image.open(img_path) as img:
                # Skip if image is already smaller than or equal to target width
                if img.size[0] <= target_width:
                    print(f"Skipping {filename} - already {img.size[0]}px wide (not larger than target width)")
                    already_optimal_count += 1
                    continue
                    
                # Calculate the new height to maintain the original aspect ratio
                width_percent = (target_width / float(img.size[0]))
                target_height = int((float(img.size[1]) * float(width_percent)))
                
                # Resize the image using a high-quality filter
                resized_img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
                
                # Construct the full path for the output file
                output_path = os.path.join(output_folder, filename)
                
                # Save the resized image
                resized_img.save(output_path, quality=95, optimize=True)
                print(f"Successfully resized: {filename}")
                processed_count += 1
        except Exception as e:
            print(f"Could not process {filename}. Reason: {e}")
            skipped_count += 1
    
    print(f"\n--- Resizing Complete ---")
    print(f"Successfully resized: {processed_count} images")
    print(f"Already optimal size: {already_optimal_count} images")
    print(f"Skipped due to errors: {skipped_count} files")
    print("-------------------------")
    
    root.destroy()

if __name__ == "__main__":
    resize_images_in_folder() 