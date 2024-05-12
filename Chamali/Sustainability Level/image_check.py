import cv2
import numpy as np

def detect_green_color(img_path):

    img = cv2.imread(img_path)
    if img is None:
        print(f"Failed to load image at {img_path}")
        return


    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)


    lower_green = np.array([36, 25, 25])
    upper_green = np.array([86, 255, 255])


    mask = cv2.inRange(hsv, lower_green, upper_green)


    green_pixels = np.sum(mask > 0)
    total_pixels = img.shape[0] * img.shape[1]
    green_percentage = (green_pixels / total_pixels) * 100


    if green_percentage > 0.05:
        return True
        #print(f"The image likely contains green areas, possibly trees. Green percentage: {green_percentage:.2f}%")
    else:
        print("No significant green areas detected.")
        print(green_percentage)
        return False


#detect_green_color('5.jpg')