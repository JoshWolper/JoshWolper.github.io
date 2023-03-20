#!/bin/bash

# Iterate over each gif in the folder and apply the desired modifications
for gif in *.gif; do
  # Use ImageMagick to reduce the number of frames in the gif by 1/3
  convert -coalesce "$gif" +repage "${gif%.*}-tmp.gif"
  # Convert the modified gif to webp format using gif2webp
  gif2webp "${gif%.*}-tmp.gif" -o "${gif%.*}.webp"
  # Remove the temporary gif file
  rm "${gif%.*}-tmp.gif"
done
