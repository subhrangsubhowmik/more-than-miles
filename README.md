# More Than Miles

Tour data is stored in `public/tours.txt` and is read by the app at runtime.

## tours.txt format

Each tour entry must use the following block format:

```txt
=== Place Name ===
subheading: Catchy tour summary
images: file1.jpg, file2.jpg, file3.jpg
duration: 2 days
booking: Hotel & transport assistance
description:
First description paragraph.
Second paragraph if needed.
```

- `=== Place Name ===` starts a new tour.
- `subheading:` is the catchy heading shown below the tour title.
- `images:` accepts up to 3 image file names. Put image files in `public/images/`.
- `duration:` indicates how many days the package tour typically needs.
- `booking:` describes hotel and transport booking support.
- `description:` begins the tour description. Leave the next lines as paragraph text.

## Notes

- Comments may be added with `#` at the start of a line.
- Blank lines between paragraphs are preserved as separate description paragraphs.
- The detail page uses the tour's title, subheading, images, description, duration, and booking fields.
